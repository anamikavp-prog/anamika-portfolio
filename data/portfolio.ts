// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Anamika V P",
  title: "Full Stack Developer with a QA mindset",
  positioning:
    "I build web and cross-platform apps with React, Flutter and .NET, and I test them the way a user would use them.",
  location: "Thrissur, Kerala, India",
  email: "vpanamika05@gmail.com",
  phone: "+91 8136993293",
  linkedin: "https://www.linkedin.com/in/anamika-vp-2a533a311",
  github: "https://github.com/anamikavp-prog",
  about: [
    "I'm a B.Tech Computer Science graduate who enjoys working across the stack, from backend logic and databases to mobile and web front ends.",
    "I currently work as a Software Developer and QA Intern at Velvetek System, building features in React on Supabase and testing them manually and with automation. Before that, I trained at Intechsoft Solutions on Flutter and VB.NET applications backed by SQL Server and Firebase.",
    "I'm looking for an entry-level role as a Software Engineer, Full Stack Developer, .NET Developer or Flutter Developer.",
  ],
  current: {
    role: "Software Developer and QA Intern",
    company: "Velvetek System",
    summary: "Building React features on Supabase and testing them manually and with automation.",
  },
  openTo: ["Software Engineer", "Full Stack Developer", ".NET Developer", "Flutter Developer"],
};

export const projects = [
  {
    name: "CramX",
    subtitle: "Flashcard generator",
    problem: "Turning study notes into revision questions by hand takes time.",
    solution:
      "A tool that turns study notes into flashcards, using T5, BART and Sentence-BERT models for question generation.",
    contribution:
      "Built the Flutter front end and the Flask/FastAPI backend, with Firebase for data.",
    stack: ["Flutter", "Python", "Flask", "FastAPI", "Firebase", "T5", "BART", "Sentence-BERT"],
  },
  {
    name: "AgroBot",
    subtitle: "Agricultural assistant",
    problem: "Farmers need quick, practical guidance on what to grow and how to protect it.",
    solution:
      "A web assistant that recommends crops and answers farmers' queries through the Gemini API, with weather, pest information and crop-planning modules.",
    contribution: "Built the web app, the modules and the SQLite storage layer in Python and Flask.",
    stack: ["Python", "Flask", "SQLite", "Gemini API"],
  },
  {
    name: "Temple Management System",
    subtitle: "Admin application",
    problem: "Temple administration involves many separate records: bookings, donations, people and events.",
    solution:
      "An admin application to manage pooja bookings, donations, and news and events, with modules for trustees, priests, a gallery and reports.",
    contribution: "Built the application in VB.NET and Flutter, with SQL and Firebase for storage.",
    stack: ["VB.NET", "Flutter", "SQL", "Firebase"],
  },
];

export const experience = [
  {
    role: "Software Developer and QA Intern",
    company: "Velvetek System",
    period: "Current",
    points: [
      "Develop application features using React, with Supabase as the database.",
      "Run manual and automated tests to keep application quality high.",
    ],
  },
  {
    role: "Software Developer Trainee",
    company: "Intechsoft Solutions, Thrissur",
    period: "June 2026 to August 2026",
    points: [
      "Built mobile and desktop interfaces with Flutter and VB.NET under senior developer guidance.",
      "Worked with SQL Server and Firebase for data management and real-time sync.",
      "Integrated REST APIs to connect front ends with backend services.",
      "Used Git and Jira for version control and team workflows.",
      "Strengthened debugging, testing and problem-solving on real application work.",
    ],
  },
  {
    role: "Virtual Intern",
    company: "Infosys Springboard",
    period: "February 2026",
    points: [
      "Completed Python programming and web development training through assignments and small projects.",
      "Practised debugging and problem-solving on applied coding exercises.",
    ],
  },
  {
    role: "Python and AI Intern",
    company: "Pacelab, Remote",
    period: "January 2024",
    points: [
      "Trained in Python fundamentals and machine learning basics, including NumPy, Pandas and supervised learning models.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "C", "C#", "Dart", "VB.NET"] },
  { group: "Web and mobile", items: ["React", "Flutter", "HTML5", "CSS"] },
  { group: "Backend and APIs", items: [".NET", "Flask", "FastAPI", "REST APIs", "CRUD operations", "State management"] },
  { group: "Databases", items: ["MySQL", "SQL Server", "SQLite", "Firebase", "Supabase"] },
  { group: "AI and data", items: ["Gemini API", "T5", "BART", "Sentence-BERT", "NumPy", "Pandas"] },
  { group: "Quality and tools", items: ["Manual testing", "Automated testing", "Debugging", "Git", "GitHub", "Jira", "Bitbucket", "VS Code", "PyCharm"] },
];

export const education = [
  { name: "Vidya Academy of Science and Technology, Thrissur", detail: "B.Tech in Computer Science and Engineering, CGPA 7.18", period: "2022 to 2026" },
  { name: "GMBHSS, Kunnamkulam, Thrissur", detail: "Class XII (Science), 94%", period: "2020 to 2022" },
  { name: "St. Mary's GHS, Chowannur, Thrissur", detail: "Class X, 100%", period: "2020" },
];

export const certifications = [
  "Young Innovators Programme (YIP) Certification",
  "Advanced Python Programming, Manifold",
  "Java, Python and LaTeX, IIT Bombay",
  "SQL Programming, Oracle Academy",
  "AI Foundations, Infosys Springboard",
  "C Programming Workshop, Vidya Academy",
];

export const achievements = [
  "District Winner, Young Innovators Programme 7.0 (K-DISC)",
  "State-level Scout and Guide Certificate for training, teamwork and service",
];
