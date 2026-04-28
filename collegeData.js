// College Knowledge Base - Jain College of Engineering, Belagavi
const collegeData = {
  college: {
    name: "Jain College of Engineering",
    location: "Belagavi, Karnataka",
    approved_by: "AICTE, New Delhi",
    established: 2010,
    website: "www.jce.ac.in",
    phone: "+91-831-XXXXXXX",
    email: "info@jce.ac.in",
    address: "Jain College Campus, Belagavi, Karnataka - 590014"
  },

  courses: {
    MCA: {
      name: "Master of Computer Applications",
      duration: "2 years",
      eligibility: ["Passed BCA/BSc", "Minimum 50% marks in qualifying exam"],
      fees: "₹50,000 per semester",
      total_fees: "₹2,00,000 (total)",
      seats: 60,
      subjects: ["Data Structures", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering", "Machine Learning", "Web Technologies", "Python Programming"]
    },
    BCA: {
      name: "Bachelor of Computer Applications",
      duration: "3 years",
      eligibility: ["Passed 12th/PUC", "Minimum 45% marks"],
      fees: "₹35,000 per semester",
      total_fees: "₹2,10,000 (total)",
      seats: 60,
      subjects: ["Programming in C", "Database Systems", "Operating Systems", "Software Engineering", "Web Technologies", "Computer Networks", "Mathematics for Computing", "Mobile App Development"]
    },
    BE: {
      name: "Bachelor of Engineering",
      duration: "4 years",
      eligibility: ["Passed 12th with PCM", "Minimum 45% marks"],
      fees: "₹45,000 per semester",
      departments: ["Computer Science", "Electronics", "Mechanical", "Civil"],
      subjects: ["Engineering Mathematics", "Physics", "Chemistry", "Mechanics", "Thermodynamics", "Circuit Theory", "Environmental Studies", "Workshop Practice"]
    }
  },

  admissions: {
    process: "Apply online or visit college office",
    online_form: "Available on college website",
    documents_required: ["10th Marksheet", "12th/Degree Marksheet", "Transfer Certificate", "Caste Certificate (if applicable)", "Passport size photos", "Aadhar Card"],
    admission_open: true,
    last_date: "July 31, 2026",
    helpdesk: "+91-831-XXXXXXX",
    online_admission_fee: "₹500 (non-refundable)"
  },

  facilities: {
    library: "Digital library with 10,000+ books and e-resources",
    labs: ["Computer Lab (150 systems)", "Language Lab", "Physics Lab", "Chemistry Lab", "Electronics Lab"],
    sports: ["Cricket Ground", "Basketball Court", "Badminton Court", "Table Tennis"],
    hostel: {
      boys: "Available - ₹8,000/month",
      girls: "Available - ₹8,500/month",
      facilities: ["Wi-Fi", "Mess", "Laundry", "Security"]
    },
    canteen: "Available 8 AM - 8 PM",
    transport: "Bus facility from major routes in Belagavi",
    wifi: "Campus-wide Wi-Fi connectivity"
  },

  placements: {
    average_package: "₹4.5 LPA",
    highest_package: "₹12 LPA",
    top_recruiters: ["Infosys", "TCS", "Wipro", "Cognizant", "Accenture", "IBM", "HCL"],
    placement_rate: "85%"
  },

  departments: {
    MCA_dept: {
      head: "Prof. [Department Head]",
      faculty_count: 12,
      labs: ["Advanced Computing Lab", "AI/ML Lab", "Web Development Lab"]
    }
  },

  location_map: {
    library: "Block A, Ground Floor",
    principal_office: "Main Building, 1st Floor",
    admissions_office: "Main Building, Ground Floor",
    mca_office: "Block C, 2nd Floor",
    computer_lab: "Block B, All Floors",
    canteen: "Near Main Gate",
    boys_hostel: "North Campus",
    girls_hostel: "South Campus",
    sports_ground: "East Campus"
  },

  exam_schedule: {
    internal_exams: "October & March",
    semester_exams: "November & April",
    results: "Within 45 days of exam"
  },

  scholarship: {
    government: "SC/ST/OBC scholarships as per Karnataka govt norms",
    merit: "Top 3 students per branch get 25% fee waiver",
    sports: "Sports quota - 10% concession"
  },

  learningResources: {
    onlineCourses: ["Coursera", "edX", "Udemy"],
    library: "Digital library with 10,000+ e-books",
    virtualLabs: "Available for Physics, Chemistry, Computer Science"
  },

  digitalInnovation: {
    eLearning: "LMS platform for online classes",
    aiTutoring: "AI-powered study assistants",
    virtualClassrooms: "Zoom integration for remote learning"
  },

  smartCampus: {
    facilities: ["Smart Library", "IoT-enabled Labs", "Campus Wi-Fi", "Digital Notice Boards"],
    bookingSystem: "Online booking for labs, auditoriums",
    navigation: "Campus map app with AR navigation"
  },

  administrativeAutomation: {
    onlineRegistration: "Digital course registration system",
    feePayment: "Online fee payment gateway",
    documentSubmission: "Digital document upload portal"
  }
};

// Chatbot response logic
function normalizeMessage(userMessage) {
  return userMessage
    .toLowerCase()
    .trim()
    .replace(/scolarship|scollarship|scholorship/g, "scholarship")
    .replace(/colledge|colege|cooleg/g, "college")
    .replace(/assistence|assitance|assistance|assistent/g, "assistant")
    .replace(/chat[ -]?bot/g, "chatbot")
    .replace(/mca\s*scholarship|scholarships for mca/g, "mca scholarship");
}

function formatList(items) {
  return items.map(item => `• ${item}`).join("\n");
}

function getCourseDetail(course) {
  const details = [
    `🎓 **${course.name}**`,
    `• Duration: ${course.duration}`
  ];

  if (course.fees) details.push(`• Fees: ${course.fees}`);
  if (course.total_fees) details.push(`• Total Fee: ${course.total_fees}`);
  if (course.seats) details.push(`• Seats: ${course.seats}`);
  if (course.eligibility) details.push(`• Eligibility: ${course.eligibility.join(", ")}`);
  if (course.departments) details.push(`• Departments: ${course.departments.join(", ")}`);
  if (course.subjects) details.push(`\n📚 **Core Subjects:**\n${formatList(course.subjects)}`);

  return details.join("\n");
}

function getAdmissionsAnswer() {
  const adm = collegeData.admissions;
  return {
    text: `📝 **Admissions at JCE Belagavi**\n• Admission status: ${adm.admission_open ? "Open" : "Closed"}\n• Application deadline: ${adm.last_date}\n• Online application: ${adm.online_form}\n• Application fee: ${adm.online_admission_fee}\n• Helpdesk: ${adm.helpdesk}\n\n**How to apply:**\n1. Visit the college website or admissions office.\n2. Fill out the online form or obtain a physical form.\n3. Submit documents listed below.\n4. Pay the application fee.\n5. Await confirmation from the admissions office.\n\n**Required documents:**\n${formatList(adm.documents_required)}`,
    suggestions: ["Documents Required", "Fees", "Eligibility", "Contact"]
  };
}

function getScholarshipAnswer() {
  const s = collegeData.scholarship;
  return {
    text: `🎖️ **Scholarships at JCE Belagavi**\n• Government scholarships: ${s.government}\n• Merit scholarships: ${s.merit}\n• Sports quota: ${s.sports}\n\n**How to apply:**\n1. Submit scholarship application with admission form.\n2. Attach required certificates.\n3. Contact the admissions office for verification.\n4. Merit and sports awards are decided after the first semester results.`,
    suggestions: ["Admissions", "Fees", "Contact"]
  };
}

function getFacilitiesAnswer() {
  const f = collegeData.facilities;
  return {
    text: `🏫 **Facilities at JCE Belagavi**\n• Library: ${f.library}\n• Labs: ${f.labs.join(", ")}\n• Sports: ${f.sports.join(", ")}\n• Hostel: Boys - ${f.hostel.boys}, Girls - ${f.hostel.girls}\n• Hostel amenities: ${f.hostel.facilities.join(", ")}\n• Canteen: ${f.canteen}\n• Transport: ${f.transport}\n• Wi-Fi: ${f.wifi}\n\nThese facilities support both academic and campus life with modern resources and student services.`,
    suggestions: ["Hostel", "Library", "Labs", "Sports"]
  };
}

function getPlacementAnswer() {
  const p = collegeData.placements;
  return {
    text: `💼 **Placement Highlights at JCE Belagavi**\n• Average package: ${p.average_package}\n• Highest package: ${p.highest_package}\n• Placement rate: ${p.placement_rate}\n• Top recruiters: ${p.top_recruiters.join(", ")}\n\nThe placement cell arranges campus drives, soft skills training, and interview preparation for final-year students.`,
    suggestions: ["Courses", "About College", "Contact"]
  };
}

function getExamAnswer() {
  const e = collegeData.exam_schedule;
  return {
    text: `📅 **Exam & Result Timeline**\n• Internal exams: ${e.internal_exams}\n• Semester exams: ${e.semester_exams}\n• Result publication: ${e.results}\n\nStudents should prepare early, review the official timetable, and watch the college notice board for updates.`,
    suggestions: ["Exam Schedule", "Contact", "Admissions"]
  };
}

function getLocationAnswer(msg) {
  const loc = collegeData.location_map;
  if (msg.includes("library")) return { text: `📚 Library is located at: **${loc.library}**`, suggestions: ["Facilities", "Campus"] };
  if (msg.includes("principal")) return { text: `👨‍💼 Principal's Office is at: **${loc.principal_office}**`, suggestions: ["Admissions Office", "Contact"] };
  if (msg.includes("admission")) return { text: `📝 Admissions Office is at: **${loc.admissions_office}**`, suggestions: ["Apply Now", "Contact"] };
  if (msg.includes("mca")) return { text: `🏢 MCA Office is at: **${loc.mca_office}**`, suggestions: ["MCA Eligibility", "MCA Fees", "Contact"] };
  if (msg.includes("canteen")) return { text: `🍽️ Canteen is located at: **${loc.canteen}**`, suggestions: ["Hostel", "Facilities"] };
  return {
    text: `📍 **JCE Belagavi Location**\n• Address: ${collegeData.college.address}\n• Admissions Office: ${loc.admissions_office}\n• Library: ${loc.library}\n• Computer Lab: ${loc.computer_lab}\n• Boys Hostel: ${loc.boys_hostel}\n• Girls Hostel: ${loc.girls_hostel}\n• Canteen: ${loc.canteen}\n\nThe campus is in Belagavi, Karnataka. Use the college phone number for exact travel guidance.`,
    suggestions: ["Contact", "Transport", "Hostel"]
  };
}

function getDigitalAnswer() {
  return {
    text: `🚀 **Digital Education at JCE Belagavi**\n• LMS platform for online classes and attendance tracking\n• AI tutoring tools to help with assignments and revision\n• Virtual classrooms integrated with Zoom\n• Virtual labs for practical learning in Computer Science, Physics, and Chemistry\n• Digital library with 10,000+ e-books and journals`,
    suggestions: ["Online Courses", "Virtual Labs", "AI Tutoring"]
  };
}

function getSupportAnswer() {
  return {
    text: `🆘 **Student Support at JCE Belagavi**\n• Academic support for course planning and exam preparation\n• Technical support for online learning and campus systems\n• Administrative support for admissions, fee payments, and document submission\n• Helpdesk available for any campus-related questions`,
    suggestions: ["Contact Support", "Admissions", "Announcements"]
  };
}

function getChatbotResponse(userMessage, user) {
  const msg = normalizeMessage(userMessage);

  if (msg.match(/\b(personal|private|confidential|ssn|social security|dob|date of birth|age|your name|your email|your phone|your address|student details|student info|identity|password|secret|private details)\b/)) {
    return {
      text: "I'm here to provide information only about Jain College of Engineering, Belagavi. I cannot disclose personal or private details.",
      suggestions: ["About College", "Admissions", "Contact"]
    };
  }

  if (msg.match(/\b(other colleges|other college|another college|compare|comparison|best college|government college|nit|iit|university|private institution)\b/)) {
    return {
      text: "I can only answer questions about Jain College of Engineering, Belagavi. Please ask about courses, fees, admissions, facilities, placements, or contact details for this college.",
      suggestions: ["About College", "Courses", "Admissions"]
    };
  }

  if (msg.match(/^(hi|hello|hey|good morning|good evening|good afternoon|namaste)/)) {
    return {
      text: "Hello! Welcome to Jain College of Engineering, Belagavi! 👋 I'm your virtual college assistant. How can I help you today?",
      suggestions: ["About College", "MCA Fees", "Admissions", "Facilities", "Placements"]
    };
  }

  if (msg.includes("virtual college assistant") || msg.includes("virtual assistant") || msg.includes("college assistant") || msg.includes("query assistance") || (msg.includes("help") && msg.includes("chatbot"))) {
    return {
      text: `🤖 **Virtual College Assistant**\nI am the AI assistant for Jain College of Engineering, Belagavi. I use verified JCE data so you get accurate answers about admissions, fees, syllabus, campus locations, and support.\n\nExample questions:\n• What are MCA fees?\n• Where is the MCA office?\n• How can I apply for admissions?\n• What scholarships are available for MCA?`,
      suggestions: ["MCA Fees", "Admissions", "Scholarship", "Campus Location"]
    };
  }

  if (msg.includes("about college") || msg.includes("about jain") || msg.includes("jce") || msg.includes("college info")) {
    const c = collegeData.college;
    return {
      text: `🏛️ **${c.name}**\n📍 ${c.address}\n✅ Approved by: ${c.approved_by}\n📅 Established: ${c.established}\n📞 Phone: ${c.phone}\n📧 Email: ${c.email}\n\nJCE Belagavi is an AI-enabled college assistant platform focused on accurate local information for students.`,
      suggestions: ["Courses Offered", "Facilities", "Admissions", "Placements"]
    };
  }

  if (msg.includes("mca scholarship") || msg.includes("scholarship for mca") || msg.includes("mca scholarships")) {
    return getScholarshipAnswer();
  }

  if (msg.includes("scholarship") || msg.includes("discount") || msg.includes("concession")) {
    return getScholarshipAnswer();
  }

  if (msg.includes("admission") || msg.includes("apply") || msg.includes("enroll") || msg.includes("register")) {
    return getAdmissionsAnswer();
  }

  if (msg.includes("fee") || msg.includes("fees") || msg.includes("cost") || msg.includes("tuition")) {
    const mca = collegeData.courses.MCA;
    const bca = collegeData.courses.BCA;
    const be = collegeData.courses.BE;
    if (msg.includes("mca")) {
      return {
        text: getCourseDetail(mca) + `\n\nFor scholarships, ask about MCA scholarships or admission support.`,
        suggestions: ["MCA Eligibility", "MCA Subjects", "Scholarship"]
      };
    }
    if (msg.includes("bca")) {
      return {
        text: getCourseDetail(bca) + `\n\nFor scholarship help, ask about BCA scholarships or fee assistance.`,
        suggestions: ["BCA Eligibility", "BCA Subjects", "Scholarship"]
      };
    }
    if (msg.includes("be")) {
      return {
        text: getCourseDetail(be) + `\n\nFor branch-wise details, ask for BE Computer Science, BE Electronics, BE Mechanical, or BE Civil.`,
        suggestions: ["BE Eligibility", "BE Departments", "Admissions"]
      };
    }
    return {
      text: `💰 **JCE Belagavi Fee Summary**\n• MCA: ₹50,000/semester (₹2,00,000 total)\n• BCA: ₹35,000/semester (₹2,10,000 total)\n• BE: ₹45,000/semester\n\nFor a specific program, ask about MCA fees, BCA fees, or BE fees.`,
      suggestions: ["MCA Fees", "BCA Fees", "BE Fees", "Scholarship"]
    };
  }

  if (msg.includes("eligib") || msg.includes("qualification") || msg.includes("requirement")) {
    if (msg.includes("mca")) {
      const mca = collegeData.courses.MCA;
      return {
        text: `✅ **MCA Eligibility:**\n${formatList(mca.eligibility)}\n\nSeats available: ${mca.seats}\n\nIf you need help with admission documents, ask for documents required.`,
        suggestions: ["MCA Fees", "Apply Now", "Documents Required"]
      };
    }
    return {
      text: `📋 **Eligibility Requirements:**\n${formatList([
        "MCA: BCA/BSc with 50%+ marks",
        "BCA: 12th/PUC with 45%+ marks",
        "BE: 12th PCM with 45%+ marks"
      ])}`,
      suggestions: ["MCA Eligibility", "BCA Eligibility", "Admissions Process"]
    };
  }

  if ((msg.includes("result") || msg.includes("results") || msg.includes("result date") || msg.includes("when will") || msg.includes("when are")) && !msg.includes("recruit") && !msg.includes("placement")) {
    return getExamAnswer();
  }

  if (msg.includes("syllabus") || msg.includes("syllabuss") || msg.includes("syllabi") || msg.includes("syllabus of")) {
    if (msg.includes("mca")) {
      return {
        text: `📘 **MCA Syllabus at JCE Belagavi**\n${formatList(collegeData.courses.MCA.subjects)}\n\nThe MCA program includes practical lab work, projects, and industry-relevant electives.`,
        suggestions: ["MCA Fees", "MCA Eligibility", "Admissions"]
      };
    }
    if (msg.includes("bca")) {
      return {
        text: `📘 **BCA Syllabus at JCE Belagavi**\n${formatList(collegeData.courses.BCA.subjects)}\n\nThe BCA syllabus is designed for foundational computing skills and software development.`,
        suggestions: ["BCA Fees", "BCA Eligibility", "Admissions"]
      };
    }
    if (msg.includes("be")) {
      return {
        text: `📘 **BE Syllabus at JCE Belagavi**\n${formatList(collegeData.courses.BE.subjects)}\n\nBE students also receive branch-specific engineering training and practical workshops.`,
        suggestions: ["BE Fees", "BE Departments", "Admissions"]
      };
    }
    return {
      text: `📘 **JCE Syllabus Information**\nWe provide detailed syllabus support for MCA, BCA, and BE. Ask for the specific program: MCA syllabus, BCA syllabus, or BE syllabus.`,
      suggestions: ["MCA Syllabus", "BCA Syllabus", "BE Syllabus"]
    };
  }

  if (msg.includes("office") || msg.includes("department office") || msg.includes("office of")) {
    return getLocationAnswer(msg);
  }

  if (msg.includes("course") || msg.includes("program") || msg.includes("degree")) {
    return {
      text: `🎓 **Courses Offered at JCE Belagavi**\n• MCA: Master of Computer Applications (2 years, 60 seats)\n• BCA: Bachelor of Computer Applications (3 years, 60 seats)\n• BE: Bachelor of Engineering (4 years) with branches in Computer Science, Electronics, Mechanical, and Civil.\n\nEach program includes classroom teaching, lab sessions, and placement support.`,
      suggestions: ["MCA Details", "BCA Details", "BE Details", "Admissions"]
    };
  }

  if (msg.includes("mca")) {
    return {
      text: getCourseDetail(collegeData.courses.MCA) + `\n\nThe MCA program is ideal for students aiming for software development, AI, and data science careers.`,
      suggestions: ["MCA Eligibility", "MCA Fees", "MCA Syllabus", "Admissions"]
    };
  }

  if (msg.includes("facilit") || msg.includes("infrastructure") || msg.includes("campus")) {
    return getFacilitiesAnswer();
  }

  if (msg.includes("hostel") || msg.includes("accommodation") || msg.includes("stay")) {
    return {
      text: `🏠 **Hostel Facilities at JCE Belagavi**\n• Boys Hostel: ${collegeData.facilities.hostel.boys}\n• Girls Hostel: ${collegeData.facilities.hostel.girls}\n• Amenities: ${collegeData.facilities.hostel.facilities.join(", ")}\n\nHostel residents get Wi-Fi, mess service, laundry, and round-the-clock security.`,
      suggestions: ["Fees", "Transport", "Canteen", "Contact"]
    };
  }

  if (msg.includes("placement") || msg.includes("job") || msg.includes("recruit") || msg.includes("career") || msg.includes("package")) {
    return getPlacementAnswer();
  }

  if (msg.includes("where") || msg.includes("location") || msg.includes("find") || msg.includes("address") || msg.includes("reach") || msg.includes("landmark") || msg.includes("near")) {
    return getLocationAnswer(msg);
  }

  if (msg.includes("contact") || msg.includes("phone") || msg.includes("number") || msg.includes("email") || msg.includes("reach")) {
    const c = collegeData.college;
    return {
      text: `📞 **Contact Information**\n• Phone: ${c.phone}\n• Email: ${c.email}\n• Address: ${c.address}\n• Website: ${c.website}\n\nAdmissions Helpdesk: ${collegeData.admissions.helpdesk}\nOffice Hours: Mon-Sat, 9 AM - 5 PM`,
      suggestions: ["Admissions", "About College", "Directions"]
    };
  }

  if (msg.includes("transport") || msg.includes("bus") || msg.includes("travel")) {
    return {
      text: `🚌 **Transport at JCE Belagavi**\n• Bus service from major Belagavi routes\n• Pickup points include City Center, Railway Station, and Bus Stand\n• For specific schedules, contact the college phone number`,
      suggestions: ["Hostel", "Facilities", "Contact"]
    };
  }

  if (msg.includes("faculty") || msg.includes("teacher") || msg.includes("professor") || msg.includes("staff")) {
    return {
      text: `👨‍🏫 **Faculty Overview**\n• MCA Department faculty: ${collegeData.departments.MCA_dept.faculty_count} experienced professors\n• Faculty expertise includes AI, software engineering, networks, and database systems\n• Labs include Advanced Computing, AI/ML, and Web Development`,
      suggestions: ["Courses", "Contact", "About College"]
    };
  }

  if (msg.includes("online") || msg.includes("digital") || msg.includes("e-learning") || msg.includes("virtual")) {
    return getDigitalAnswer();
  }

  if (msg.includes("support") || msg.includes("help") || msg.includes("ticket") || msg.includes("issue")) {
    return getSupportAnswer();
  }

  if (msg.includes("announcement") || msg.includes("news") || msg.includes("update")) {
    return {
      text: `📢 **Recent Announcements**\n• Semester exam schedule released\n• Campus maintenance notice published\n• New course options added\n\nCheck the announcements section for the full details.`,
      suggestions: ["All Announcements", "Exam Schedule", "New Courses"]
    };
  }

  return {
    text: `I can answer detailed questions about Jain College of Engineering, Belagavi. Try asking about:\n\n• MCA fees and eligibility\n• Admissions steps and documents\n• Scholarship opportunities\n• Campus facilities and hostels\n• Exam dates and results\n• Faculty, placements, and transport\n\nAsk any one question and I will provide a detailed response.`,
    suggestions: ["Courses", "Fees", "Admissions", "Facilities", "Support"]
  };
}

module.exports = { collegeData, getChatbotResponse };
