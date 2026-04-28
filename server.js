require('dotenv').config();

const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const { getChatbotResponse } = require('./data/collegeData');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── MySQL CONNECTION ───────────────────────────────
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Test DB connection
(async () => {
  try {
    const conn = await db.getConnection();
    console.log("✅ MySQL Connected");
    conn.release();
  } catch (err) {
    console.error("❌ MySQL Error:", err);
  }
})();

// ─── MIDDLEWARE ─────────────────────────────────────
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: 'lax'
  }
}));

// ─── AUTH MIDDLEWARE ───────────────────────────────
function requireAuth(req, res, next) {
  if (req.session.userId) return next();
  res.status(401).json({ success: false, message: 'Login required' });
}

// ─── ROUTES ─────────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chatbot.html'));
});

// ─── REGISTER ───────────────────────────────────────
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    // Auto-login after registration
    req.session.userId = result.insertId;
    req.session.userName = name;

    res.json({ success: true, message: "Registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error registering user" });
  }
});

// ─── LOGIN ──────────────────────────────────────────
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ success: false, message: "Wrong password" });
    }

    req.session.userId = user.id;
    req.session.userName = user.name;

    res.json({ success: true, message: "Login successful" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Login error" });
  }
});

// ─── COLLEGE-SPECIFIC CHAT API ───────────────────────

app.post('/api/chat', requireAuth, async (req, res) => {
  const { message } = req.body;
  const response = getChatbotResponse(message);

  res.json({
    success: true,
    reply: response.text,
    suggestions: response.suggestions || []
  });
});

// ─── GET USER INFO ──────────────────────────────────
app.get('/api/me', requireAuth, async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT id, name, email FROM users WHERE id = ?",
      [req.session.userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error fetching user" });
  }
});

// ─── LOGOUT ─────────────────────────────────────────
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

// ─── START SERVER ───────────────────────────────────
const startServer = port => {
  const server = app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });

  server.on('error', err => {
    if (err.code === 'EADDRINUSE') {
      console.error(`⚠️ Port ${port} is already in use. Trying port ${port + 1} instead...`);
      startServer(port + 1);
      return;
    }
    console.error('Server error:', err);
    process.exit(1);
  });
};

startServer(PORT);