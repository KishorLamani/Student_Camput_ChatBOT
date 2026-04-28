# Student_Camput_ChatBOT
README
🎓 JCE Belagavi - AI College Chatbot
Team: Matrix Surge - 13 | GVH-13
Department of Master of Computer Application
Jain College of Engineering, Belagavi

🚀 Quick Setup (Run in 3 steps)
Step 1: Install Dependencies
cd college-chatbot
npm install
Step 2: Start the Server
node server.js
Step 3: Open in Browser
http://localhost:3000
📄 Pages
URL	Description
http://localhost:3000/	Main landing page
http://localhost:3000/register	User registration
http://localhost:3000/login	User login
http://localhost:3000/chat	AI Chatbot (requires login)
🔌 API Endpoints
Method	URL	Description
POST	/api/register	Register new user
POST	/api/login	Login user
POST	/api/logout	Logout user
GET	/api/me	Get logged-in user info
POST	/api/chat	Chat with bot (auth required)
GET	/api/college-info	Get college info (public)
🤖 Chatbot Capabilities
The chatbot can answer questions about:

🏛️ College information
🎓 Courses (MCA, BCA, BE)
💰 Fee structure
📝 Admission process & documents
✅ Eligibility criteria
🏫 Campus facilities
🏠 Hostel accommodation
💼 Placements & recruiters
🎖️ Scholarships
📍 Campus locations
📅 Exam schedule
📞 Contact information
🛠️ Tech Stack
Layer	Technology
Frontend	HTML5, CSS3, JavaScript
Backend	Node.js, Express.js
Authentication	bcryptjs + express-session
Database	In-memory (MySQL ready)
AI/ML	Rule-based NLP (Groq API integration point)
⚠️ Known Problem Cases Handled
Wrong college info → Only pre-verified data is used
No internet → Predefined answers for common questions
Student location queries → Campus map with exact locations
Online admissions → Form accessible without visiting college
Outdated data → Update data/collegeData.js annually
Authentication → Session-based, expires in 24 hours
🔄 Upgrading to MySQL
Replace in-memory db in server.js:

npm install mysql2
Then replace the db object with MySQL queries using the schema:

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
📁 Project Structure
college-chatbot/
├── server.js              # Main Express server
├── package.json           # Dependencies
├── data/
│   └── collegeData.js     # College knowledge base + chatbot logic
├── public/
│   ├── index.html         # Landing page
│   ├── registration.html  # Registration form
│   ├── login.html         # Login form
│   └── chatbot.html       # Main chatbot UI
└── README.md
