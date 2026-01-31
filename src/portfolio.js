/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

// Base URLs
const backendBaseURL = "https://deployer.sharankonda.com";
const hostedURL = "http://project.sharankonda.com";
const githubStatsURL = `${backendBaseURL}/v1/github/getReposMetadata/`;

//SEO Related settings
const seo = {
  title: "Phalguna's Portfolio",
  description:
    "Software Engineer with expertise in full-stack development, cloud technologies, and building scalable enterprise applications. Experienced in Java, Spring Boot, Angular, React, AWS, and microservices architecture.",
  og: {
    title: "Phalguna Peravali's Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Phalguna Peravali",
  logo_name: "Phalguna Peravali",
  nickname: "",
  subTitle:
    "Software Engineer specializing in full-stack development with Java, Spring Boot, Angular, and React. Passionate about building scalable enterprise applications, microservices architecture, and cloud solutions using AWS and Azure.",
  resumeLink: "/Phalguna_Resume.pdf",
  portfolio_repository: "https://github.com/phalgunaperavali",
  githubProfile: "https://github.com/phalgunaperavali",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/phalgunaperavali",
    fontAwesomeIcon: "fa-brands fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/phalguna",
    fontAwesomeIcon: "fa-brands fa-linkedin", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:phalgunaperavali@gmail.com",
    fontAwesomeIcon: "fa-solid fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "phone",
    link: "tel:+13527406349",
    fontAwesomeIcon: "fa-solid fa-phone", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Java 11, Python, C++, Golang, and JavaScript for building robust backend and frontend solutions.",
        "⚡ Extensive experience with Spring Boot, Angular, React, and Node.js for developing enterprise-grade web applications.",
        "⚡ Skilled in microservices architecture, RESTful APIs, GraphQL, and gRPC for scalable distributed systems.",
        "⚡ Experienced with SQL (PostgreSQL, MySQL) and NoSQL databases, implementing optimized queries and caching mechanisms.",
        "⚡ Practiced Agile methodologies (Scrum, Kanban), TDD, BDD, and performance tuning for high-quality software delivery.",
      ],
      softwareSkills: [
        {
          skillName: "JAVA",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#00b4e0",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#00b4e0",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "skill-icons:golang",
          style: {
            color: "#00b4e0",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            backgroundColor: "#ffffff",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "devicon:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "devicon:react-wordmark",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "devicon:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
    {
      title: "Cloud and DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in AWS services including EC2, RDS, S3, DynamoDB, SQS, API Gateway, and IAM for cloud-native applications.",
        "⚡ Experience with Azure cloud services for building scalable enterprise solutions.",
        "⚡ Skilled in containerization with Docker and orchestration with Kubernetes for microservices deployment.",
        "⚡ Experienced in CI/CD pipelines using Jenkins, GitHub Actions, and Bamboo for automated deployment workflows.",
        "⚡ Practiced DevSecOps principles and performance tuning for secure, high-performance systems.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "devicon:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "devicon:apachekafka",
          style: {
            color: "#231F20",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "mdi:git",
          style: {
            color: "#f34f29",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/phalgunaperavali",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/phalguna",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Florida",
      subtitle: "M.S. in Computer and Information Science - GPA: 3.73/4.0",
      logo_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzBN8M-Is3ScTthW9PatpkKz6iq5Nrqq_NCc8BKM9-A&s",
      alt_name: "UFL",
      duration: "Aug 2023 - May 2025",
      descriptions: [
        "⚡ Data Structures & Algorithms: Mastered advanced algorithmic techniques including dynamic programming, graph algorithms, and optimization methods for solving complex computational problems.",
        "⚡ Database Management Systems: Gained expertise in designing and optimizing relational databases, SQL query optimization, and managing large-scale data systems.",
        "⚡ Deep Learning: Explored neural network architectures, PyTorch, and Scikit-learn for building machine learning models and understanding AI fundamentals.",
        "⚡ Operating Systems: Studied process management, memory management, file systems, and concurrent programming concepts.",
      ],
      website_link: "https://www.ufl.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Certified Java SE 8 Developer",
      subtitle: "- Associate Level",
      logo_path: "oracle.png",
      certificate_link: "",
      alt_name: "Oracle_Java",
      color_code: "#00000099",
      body: [
        "Demonstrated proficiency in Java SE 8 fundamentals including object-oriented programming, exception handling, and Java APIs.",
        "Expertise in Java collections framework, lambda expressions, streams, and functional programming concepts.",
        "Strong understanding of Java best practices for building robust, maintainable enterprise applications.",
      ],
    },
    {
      title: "Certified SAFe 5 Practitioner",
      subtitle: "- Scaled Agile Framework",
      logo_path: "safe.png",
      certificate_link: "",
      alt_name: "SAFe5",
      color_code: "#00000099",
      body: [
        "Certified in applying the Scaled Agile Framework (SAFe) for lean-agile development at enterprise scale.",
        "Skilled in collaborating effectively in Agile Release Trains (ARTs) and contributing to program increment planning.",
        "Practiced in implementing lean-agile principles to deliver value in large-scale software development environments.",
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "Software Engineer with 5+ years of experience at Fidelity Investments, Intersect Healthcare, UFIT, Brillio (Verizon), and Capgemini (MetLife). Specialized in full-stack development with Java, Spring Boot, Angular, and cloud technologies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Fidelity Investments",
          company_url: "https://www.fidelity.com/",
          logo_path: "fidelity.png",
          duration: "November 2025 - Present",
          location: "Boston, MA",
          description: [
            "Enhanced modernization of critical wealth management digital modules within the Digital Experience Team, engineering high-impact features using Angular 17 and Spring Boot, which elevated client interaction speed and platform reliability by 35%.",
            "Redesigned complex data retrieval pipelines by migrating APIs from GraphQL to RESTful services, eliminating redundant queries and cutting average API latency by 40%, while maintaining seamless integration with downstream systems.",
            "Partnered with UX architects and backend teams to build scalable, reusable UI micro-frontends and responsive data visualization components, driving consistent digital experiences across Fidelity's investment and advisory applications.",
          ],
          color: "#00875A",
        },
        {
          title: "Software Engineer",
          company: "Intersect Healthcare Systems",
          company_url: "",
          logo_path: "healthcare.png",
          duration: "August 2025 - October 2025",
          location: "Gainesville, FL",
          description: [
            "Collaborated with clinicians and product leads in an Agile environment to modernize a legacy healthcare portal into a responsive Angular + Spring Boot web app, enhancing accessibility for 5K+ daily users.",
            "Developed modular, reusable UI components and implemented comprehensive unit tests (Jest, JUnit) to ensure high code quality and maintainability across feature releases.",
            "Integrated secure RESTful APIs with JWT-based authentication and backend services on AWS using S3, DynamoDB, SQS, and API Gateway for asynchronous communication.",
            "Optimized SQL and caching mechanisms to cut data retrieval latency by 30%, ensuring real-time synchronization and a smoother user experience.",
            "Streamlined CI/CD pipelines using Jenkins and Docker, accelerating deployment cycles and reducing manual intervention.",
          ],
          color: "#0066CC",
        },
        {
          title: "Software Developer",
          company: "UFIT",
          company_url: "https://www.it.ufl.edu/",
          logo_path: "ufl.png",
          duration: "August 2024 - August 2025",
          location: "Gainesville, FL",
          description: [
            "Orchestrated modular Android components with lazy loading, reducing latency by 30% and improving scalability.",
            "Implemented reactive state management using Angular, RxJS, and NgRx with Spring Boot APIs, accelerating data rendering by 35%.",
            "Hardened authentication & authorization with OAuth2 and Spring Security, safeguarding sensitive university data.",
          ],
          color: "#FA4616",
        },
        {
          title: "Software Engineer-II",
          company: "Brillio (Client: Verizon)",
          company_url: "https://www.brillio.com/",
          logo_path: "brillio.png",
          duration: "October 2021 - July 2023",
          location: "Bangalore, India",
          description: [
            "Engineered and scaled high-throughput RESTful APIs and gRPC services with Java 8, Spring Boot, and Kafka, supporting 1M+ monthly transactions with sub-second latency.",
            "Integrated Redis caching and event-driven Kafka pipelines, boosting system responsiveness by 35% and ensuring fault-tolerant, real-time updates across distributed services.",
            "Built full-stack dashboards with Angular, Material UI, and Ag-Grid, delivering real-time project analytics and improving decision-making speed by 30%.",
            "Spearheaded modularization of legacy codebase into reusable microservices, reducing code complexity by 40% and accelerating feature delivery timelines by 25%.",
          ],
          color: "#EE0000",
        },
        {
          title: "Software Engineer",
          company: "Capgemini (Client: MetLife)",
          company_url: "https://www.capgemini.com/",
          logo_path: "capgemini.png",
          duration: "October 2019 - October 2021",
          location: "Bangalore, India",
          description: [
            "Developed and deployed scalable Java 11 / Spring Boot microservices with Angular frontends, streamlining insurance claim workflows and improving processing efficiency by 30%.",
            "Streamlined SQL & MongoDB queries and automated procedures, containerized services with Docker/Kubernetes, and integrated AWS (EC2, RDS, S3, IAM), enhancing performance by 40%, strengthening scalability & disaster recovery.",
            "Automated test coverage with JUnit, Mockito, reducing post-release defects by 25% and improving QA efficiency.",
          ],
          color: "#0070AD",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects and Dev Work",
  description:
    "Passionate about building innovative applications across diverse domains. My projects span full-stack web development (Java Spring Boot, React, MERN), AI/ML solutions (LLMs, Deep Learning, RAG), and distributed systems (Go, gRPC). Each project demonstrates industry best practices and scalable architecture.",
  avatar_image_path: "projects_image.svg",
};

const repos = {
  show: true,
  repoURL: `${backendBaseURL}/v1/github/getReposList/`,
  languagesURL: `${backendBaseURL}/v1/github/getLanguagesList/`,
  deployURL: `${backendBaseURL}/v1/aws/publishSNS`,
  hostedURL: hostedURL,
  heading: "Projects",
  gitHubUsername: "phalgunaperavali",
  reposLength: 10,
  specificRepos: [],
};

const projectCredentials = {
  "go-reddit-clone": "<b> No credentials are required for this application. </b>",
  "online-banking": "<b> No credentials are required for this application. </b>",
  "gator-library": "<b> No credentials are required for this application. </b>",
  "plant-seedlings-classifier": "<b> No credentials are required for this application. </b>",
  "financial-advisor-llm": "<b> No credentials are required for this application. </b>",
  "wealthwise-robo-advisor": "<b> No credentials are required for this application. </b>",
  "mern-ecommerce": "<b> No credentials are required for this application. </b>",
  "multi-agent-diagnosis": "<b> No credentials are required for this application. </b>",
  "agentic-rag-crewai": "<b> No credentials are required for this application. </b>",
  "customer-churn-prediction": "<b> No credentials are required for this application. </b>",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo.png",
    description:
      "I am a Software Engineer with 5+ years of experience building scalable enterprise applications. My expertise spans full-stack development with Java, Spring Boot, Angular, and React, along with cloud technologies (AWS, Azure) and microservices architecture. I've contributed at Fidelity Investments, UFIT, Brillio (Verizon), and Capgemini (MetLife), delivering solutions that improved performance, streamlined workflows, and enhanced user experiences. I'm always open to connecting with fellow professionals and exploring new opportunities!",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  repos,
  projectCredentials,
  githubStatsURL,
};
