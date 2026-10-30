// All site content lives here. Anything in [square brackets] is a placeholder
// that still needs real info before the site goes live.
// Content below comes from the resume and the READMEs in your public GitHub repos.
// The phone number is intentionally left out, because this page is public and
// scrapers harvest numbers.

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  summary: string;
  role?: string;
  tech: string[];
  links?: ProjectLink[];
};

export type ExperienceEntry = {
  title: string;
  org: string;
  dates: string;
  points: string[];
};

export const profile = {
  name: "Abraham Meshesha",
  tagline: "B.S. in Computer Science · Gonzaga University ('28)",
  subtagline: "ColorStack & NSBE · Seattle, WA",
  seeking: "Software engineering internships",
  posterStatus: "REMOTE OR ON-SITE",
  bounty: "1,000,000,000",
  about:
    "I'm a Computer Science junior at Gonzaga University focused on full-stack product engineering, backend APIs, and AI developer tools. Whether shipping an iOS app to the App Store, building live crowdsourced web apps for students, or researching LLM code filtering, I like taking software from early idea to production.",
  links: [
    { label: "Resume", href: "/resume.pdf" },
    { label: "GitHub", href: "https://github.com/Abe0Mesh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abemeshesha" },
    { label: "Email", href: "mailto:abe.meshesha@gmail.com" },
  ],
};

export const projects: Project[] = [
  {
    name: "Yenesow",
    summary:
      "An AI mobile app on the Apple App Store that helps people stay connected with their friends.",
    role: "Architected the Node.js REST API and PostgreSQL schema to track per-contact outreach cadences, feeding relationship history into AWS Bedrock to generate personal check-in prompts instead of generic templates. Containerized and deployed the backend on AWS ECS with teammates using Git, CI/CD, and Docker, debugging live production edge cases reported by early App Store users.",
    tech: [
      "TypeScript",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS Bedrock",
      "AWS ECS",
      "Docker",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/yenesow/id6760930535",
      },
    ],
  },
  {
    name: "Jan's Line",
    summary:
      "A web app that calculates live bar wait times from crowdsourced student check-ins.",
    role: "Built the mobile-first web interface in React, Next.js, TypeScript, and Tailwind CSS, backed by a Python and Django REST API with PostgreSQL on Amazon RDS. Implemented OOP wait-time aggregation and PyTest validation suites to filter out stale or false troll check-ins, iterating with student testers to make live line updates clearer.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "PostgreSQL",
      "AWS RDS",
      "PyTest",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Abe0Mesh/Jans-Line" }],
  },
  {
    name: "Plant Health Monitor",
    summary:
      "A full-stack system that collects plant sensor data, stores it in a cloud PostgreSQL database, and shows live readings on a dashboard.",
    role: "Built the end-to-end pipeline: Arduino C++ firmware streams serial sensor readings into a Java Spring Boot REST API, which persists time-series records in PostgreSQL on AWS RDS and serves live polling updates to a React dashboard.",
    tech: [
      "Arduino",
      "C++",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AWS RDS",
      "React",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Abe0Mesh/Plant-Health-Monitoring-System",
      },
    ],
  },
];

export const moreProjects: Project[] = [
  {
    name: "AbePL",
    summary:
      "A dynamically typed programming language and tree-walk interpreter built from scratch in Java, featuring a lexical scanner, recursive-descent parser, nested lexical scoping, control flow, and first-class functions.",
    tech: [
      "Java",
      "Recursive-Descent Parser",
      "AST Interpreter",
      "JUnit 5",
      "Maven",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Abe0Mesh/AbePL" }],
  },
  {
    name: "CheaperToHurt",
    summary:
      "An interactive D3.js data story and US choropleth map analyzing how emergency room and ambulance costs impact household budgets across all 50 states using US Census ACS and Federal Reserve CPI data.",
    tech: ["JavaScript", "D3.js", "TopoJSON", "Python", "Vercel"],
    links: [
      { label: "Live Site", href: "https://cheapertohurt.abemeshesha.com" },
      { label: "GitHub", href: "https://github.com/Abe0Mesh/CheaperToHurt" },
    ],
  },
  {
    name: "Tobour",
    summary:
      "A 2D top-down RPG in Java where you explore a tile map, talk to NPCs, and fight slimes with weapons and a health system.",
    tech: ["Java", "Maven"],
    links: [{ label: "GitHub", href: "https://github.com/Abe0Mesh/Tobour" }],
  },
];

export const education: ExperienceEntry = {
  title: "B.S. in Computer Science",
  org: "Gonzaga University",
  dates: "Expected May 2028",
  points: [
    "GPA: 3.5",
    "Active member of ColorStack and the National Society of Black Engineers (NSBE)",
  ],
};

export const experience: ExperienceEntry[] = [
  {
    title: "Computer Science Teaching Assistant",
    org: "Gonzaga University",
    dates: "Aug 2026 – Present",
    points: [
      "Taught students how to write Python code using object-oriented programming, data structures, and algorithms.",
      "Graded projects using unit testing, debugging, and code reviews to help students fix bugs.",
      "Applied weekly professor feedback to improve grading rubrics and student tutoring.",
    ],
  },
  {
    title: "AI Research Assistant",
    org: "University of Hawaii Hilo",
    dates: "Jun 2026 – Jul 2026",
    points: [
      "Developed a Python AI coding assistant using OOP and PyTest that filters noisy LLM suggestions to help developers write software faster.",
      "Engineered a web code editor with Flask, JavaScript, HTML, and CSS, plus REST API endpoints that record live developer interactions.",
      "Collaborated with engineers using Git, continuous integration, and Docker, acting on supervisor code reviews to improve the filtering.",
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "HTML/CSS"],
  },
  {
    category: "Frameworks & Web",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Django",
      "Spring Boot",
      "Flask",
      "Tailwind CSS",
      "D3.js",
    ],
  },
  {
    category: "Cloud, Data & Tools",
    items: [
      "PostgreSQL",
      "AWS (ECS, RDS, Bedrock)",
      "Docker",
      "Git & CI/CD",
      "PyTest",
      "Maven",
      "Vercel",
    ],
  },
];
