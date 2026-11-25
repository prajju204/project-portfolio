export const personalDetails = {
  name: "Prajwal",
  taglines: [
    "MCA Graduate",
    "Software Developer",
    "Frontend Developer",
    "Java & Web Enthusiast"
  ],
  role: "MCA Graduate | Software Developer | Frontend Developer",
  summary:
    "MCA graduate (2026) with a 6-month software development internship and strong skills in software development, Java, and web technologies. Experienced in building Android and full-stack applications using Firebase, Supabase and MongoDB. Seeking an entry-level Software Developer role to apply and grow technical expertise.",
  email: "prajwaldp03@gmail.com",
  phone: "+91 8431967664",
  location: "Mattu, Udupi, Karnataka, India",
  dob: "3rd Feb, 2004",
  gender: "Male",
  languages: ["English", "Kannada", "Hindi"],
  linkedin: "https://www.linkedin.com/in/prajwal2004",
  github: "https://github.com/prajju204",
  availability: "Available for Full-time Roles"
};

export const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Poornaprajna Institute Of Management",
    location: "Udupi, Karnataka",
    period: "2024 – 2026",
    score: "7.47 CGPA",
    status: "Graduated",
    description:
      "Advanced coursework in Software Engineering, Advanced Web Technologies, Database Systems, Data Structures & Algorithms, and Distributed Computing.",
    highlight: "Key Focus: Full-Stack Web Development & Modern Software Architecture"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "St Mary's College",
    location: "Shirva, Karnataka",
    period: "2021 – 2024",
    score: "6.94 CGPA",
    status: "Completed",
    description:
      "Foundational computer science education covering Object-Oriented Programming in Java/C++, Relational Databases, Web Design, and Networking.",
    highlight: "Graduated with strong foundations in programming and computer theory"
  }
];

export const experienceList = [
  {
    role: "Software Development Intern",
    company: "MCWARE Technologies LLP (MIhub)",
    period: "06 May 2026 – 07 Oct 2026",
    duration: "6 Months",
    location: "Karnataka, India",
    type: "Internship",
    description:
      "Key contributor to the development of Luxe Groom – a modern Salon & Clinical Treatment Appointment Management System.",
    responsibilities: [
      "Worked extensively on the Salon & Clinical Treatment Appointment Management System (Luxe Groom).",
      "Built a high-performance, responsive web application using React.js and Tailwind CSS.",
      "Integrated MongoDB and Socket.io for instantaneous real-time slot booking notifications and schedule sync.",
      "Leveraged Google Antigravity and Claude AI for rapid coding, robust debugging, and performance optimization.",
      "Collaborated with cross-functional team members following agile development workflows."
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Socket.io",
      "Node.js",
      "Google Antigravity",
      "Claude AI"
    ]
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: 85, badge: "Advanced Core" },
      { name: "Python", level: 80, badge: "NPTEL Certified" },
      { name: "TypeScript", level: 75, badge: "Typed Systems" },
      { name: "JavaScript (ES6+)", level: 88, badge: "Modern JS" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 90, badge: "Hooks & SPA" },
      { name: "Tailwind CSS", level: 92, badge: "Modern Utility" },
      { name: "HTML5", level: 95, badge: "Semantic Web" },
      { name: "CSS3", level: 90, badge: "Animations & Flex/Grid" }
    ]
  },
  {
    category: "Backend & Realtime",
    icon: "Server",
    skills: [
      { name: "Supabase", level: 82, badge: "BaaS & Auth" },
      { name: "Socket.io", level: 80, badge: "Real-time Events" },
      { name: "PHP", level: 70, badge: "Server Scripting" },
      { name: "Node.js / Express basics", level: 75, badge: "REST APIs" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 85, badge: "NoSQL & Mongoose" },
      { name: "MySQL", level: 80, badge: "Relational / SQL" },
      { name: "Firebase", level: 82, badge: "Firestore & Realtime DB" }
    ]
  },
  {
    category: "AI Tools & Modern Workflow",
    icon: "Sparkles",
    skills: [
      { name: "Google Antigravity", level: 90, badge: "Agentic Dev" },
      { name: "Claude AI", level: 90, badge: "Code & Architecture" },
      { name: "GitHub Copilot", level: 85, badge: "AI Pair Dev" }
    ]
  }
];

export const softSkills = [
  { name: "Team Lead / Team Work", icon: "Users" },
  { name: "Adaptability", icon: "Shuffle" },
  { name: "Self-motivated", icon: "Zap" },
  { name: "Problem Solving", icon: "Brain" },
  { name: "Time Management", icon: "Clock" }
];

export const projectsList = [
  {
    id: "luxe-groom",
    title: "LUXE GROOM",
    subtitle: "Salon & Clinical Treatment Appointment Management System",
    category: "Full Stack & Real-Time",
    featured: true,
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Socket.io"],
    summary:
      "Enterprise appointment scheduling & clinical treatment management platform built during internship at MCWARE Technologies LLP (MIhub).",
    highlights: [
      "Built a responsive web application using React.js and Tailwind CSS for appointment bookings.",
      "Engineered real-time notifications with Socket.io for slot confirmations and cancellations.",
      "Structured MongoDB database schemas for practitioners, time slots, and patient histories.",
      "Utilized Google Antigravity and Claude AI for rapid iterative code optimization and bug resolution."
    ],
    github: "https://github.com/prajju204/luxe-groom-system",
    liveDemo: "#",
    badge: "Internship Project"
  },
  {
    id: "foodie",
    title: "FOODIE",
    subtitle: "Food Ordering Application",
    category: "Web Application",
    featured: true,
    tags: ["React.js", "TypeScript", "Supabase", "Tailwind CSS"],
    summary:
      "A fast, responsive food ordering platform with seamless user authentication, cart checkout, and real-time backend synchronization.",
    highlights: [
      "Developed responsive, mobile-first food ordering application with intuitive UI.",
      "Integrated Supabase for secure authentication, real-time database, and cloud storage.",
      "Implemented dynamic menu filtering, shopping cart persistence, and order tracking.",
      "Used Google Antigravity and Claude AI to architect clean TypeScript interfaces and optimize queries."
    ],
    github: "https://github.com/prajju204/foodie-ordering-app",
    liveDemo: "#",
    badge: "Featured Project"
  },
  {
    id: "quiz-astra",
    title: "QUIZ ASTRA",
    subtitle: "Android Multiplayer Quiz App",
    category: "Mobile Application",
    featured: true,
    tags: ["Java", "Android SDK", "Firebase", "Material Design"],
    summary:
      "A competitive Android quiz application featuring authentication, live multiplayer battles, and an offline-enabled leaderboard.",
    highlights: [
      "Developed native Android quiz app in Java with real-time multiplayer challenges.",
      "Built a global competitive leaderboard powered by Firebase Realtime Database with offline caching.",
      "Crafted an engaging, smooth UI adhering strictly to Google Material Design standards.",
      "Implemented comprehensive category quizzes, timer mechanisms, and streak analytics."
    ],
    github: "https://github.com/prajju204/quiz-astra-android",
    liveDemo: "#",
    badge: "Android App"
  }
];

export const certificationsList = [
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    category: "Programming & Problem Solving",
    icon: "Award",
    accent: "from-blue-500 to-indigo-500",
    description:
      "Comprehensive mastery of Python programming fundamentals, algorithmic problem solving, data processing, and computational logic."
  },
  {
    title: "Digital Productivity with AI",
    issuer: "UNICEF",
    category: "AI & Productivity",
    icon: "Sparkles",
    accent: "from-purple-500 to-pink-500",
    description:
      "Certified in generative AI workflows, intelligent digital automation, ethical AI practices, and boosting engineering efficiency."
  },
  {
    title: "Reliance Nippon Life Insurance Examination",
    issuer: "Reliance Nippon Life Insurance",
    status: "Cleared",
    category: "Professional Certification",
    icon: "CheckCircle2",
    accent: "from-emerald-500 to-teal-500",
    description:
      "Demonstrated financial acumen, regulatory compliance understanding, and professional analytical competence."
  }
];

export const achievementsList = [
  {
    title: "Sports & Games Excellence",
    description:
      "Achieved numerous prizes and honors participating in competitive Games and Athletics throughout school & college days.",
    icon: "Trophy"
  }
];

