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
  tagline: "Computer Science student at Gonzaga University",
  seeking: "Software engineering internships",
  bounty: "1,000,000 tokens",
  links: [
    { label: "GitHub", href: "https://github.com/Abe0Mesh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abemeshesha" },
    { label: "Email", href: "mailto:abe.meshesha@gmail.com" },
    // Resume link goes here once we decide whether to host the PDF (e.g. "/resume.pdf").
  ],
};

export const projects: Project[] = [
  {
    name: "Yenesow",
    summary:
      "An AI mobile app on the Apple App Store that helps people stay connected with their friends.",
    role: "Built REST APIs backed by PostgreSQL to track contact history, and used AWS Bedrock to generate outreach prompts. Deployed the backend on AWS ECS with teammates, using Git, CI/CD and Docker, and fixed production bugs reported by early users.",
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
    role: "Built the mobile web interface with Next.js, TypeScript and Tailwind CSS, and the REST API with Django and PostgreSQL on Amazon RDS. Used PyTest to block false wait reports, and worked with student testers to make wait-time updates clearer.",
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
    role: "End to end: Arduino sensors send readings to a Spring Boot API, which stores them in PostgreSQL on AWS RDS, and a React dashboard polls the REST API for the latest data.",
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
      "My own programming language and compiler. Source files use the .abe extension and compile with abec. The prototype is in C++ and development is moving to Java.",
    tech: ["C++", "Java"],
    links: [{ label: "GitHub", href: "https://github.com/Abe0Mesh/abe_PL" }],
  },
  {
    name: "Straw Hat Tycoon",
    summary:
      "A Roblox tycoon game set on a One Piece-inspired island, where each player claims one crew's tycoon and builds passive income.",
    tech: ["Lua", "Roblox", "Rojo"],
    links: [{ label: "GitHub", href: "https://github.com/Abe0Mesh/OneP-Tycoon" }],
  },
  {
    name: "Tobour",
    summary:
      "A top-down RPG in early development. Currently text-based, with player setup and an introduction.",
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
      "Teach students how to write Python code using object-oriented programming, data structures, and algorithms.",
      "Evaluate projects with unit testing, debugging, and code reviews to help students fix bugs.",
      "Apply weekly professor feedback to improve grading rubrics and student tutoring.",
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
