import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";

import course_project1 from "../assets/course-projects/course-project-1.webp";
import course_project2 from "../assets/course-projects/course-project-2.webp";
import course_project3 from "../assets/course-projects/course-project-3.webp";

export const projects = [
  {
    title: "GEMASTIK 2025 - Muffler Monitoring System",
    description:
      "An intelligent muffler noise detection system integrating IoT sensors, edge devices, and cloud automation. The platform enables real-time monitoring and ML-based license plate recognition, built with React, Firebase, and Google Cloud. National finalist of GEMASTIK 2025 in Smart Device, Embedded System & IoT category.",
    image: project5,
    tech:  [
      "ReactJs",
      "Vite",
      "Typescript",
      "FastApi",
      "Docker",
      "Firebase",
      "Firebase Storage",
      "Firestore",
      "Google Cloud Run Functions",
      "Google Cloud Run",
      "YOLOv8"
    ],
    demoUrl: "https://brong-system.web.app/",
  },
  {
    title: "GELEX 2025",
    description:
      "Official website for Gelanggang Expo 2025, an annual UGM event showcasing student clubs and communities. The platform also serves as an information hub introducing UGM`s diverse organizations and activities.",
    image: project4,
    tech:  [
      "NextJs",
      "Typescript",
      "Docker",
      "motion",
    ],
    demoUrl: "http://itit25.vercel.app/2025/gelex",
  },
  {
    title: "PowerTOBK",
    description:
      "Tryout platform representing Computer Science UGM developed as a group project. I worked on the frontend for the aptitude test, which helps users determine which of the seven fields (FE, BE, Mobapps, UI/UX, Cybersecurity, Data Science, Game Development) best suits them based on their quiz results.",
    image: project3,
    tech:  [
      "NextJs",
      "Typescript",
      "Golang",
      "Docker",
      "Gin",
      "Postgresql",
      "Shadcn",
      "motion",
    ],
    demoUrl: "https://omahtobk-static.vercel.app",
  },
  {
    title: "GDGOC Expense Tracker",
    description:
      "GDGOC's holiday study case : An expense tracker application that allows users to track their expenses and income, with a feature that displays the total balance.",
    image: project2,
    tech: [
      "NextJs",
      "Typescript",
      "Zod",
      "Prisma",
      "Postgresql",
      "Shadcn",
      "Clerk",
    ],
    demoUrl: "https://gdgoc-studycase.vercel.app/",
  },
  {
    title: "Malpres MIPA 2024 Web",
    description:
      "The Faculty of Science event website, 'MIPA Appreciation Night,' provides a platform for voting and offers information about the event.",
    image: project1,
    tech:  ["NextJs", "React", "motion", "Google Spreadsheet API"],
    demoUrl: "https://malpres2024.vercel.app/",
  },
];


export const course_projects = [
  {
    title: "E-commerce SpringBoot Backend",
    description:
      "Backend RESTful API for an e-commerce platform built with Spring Boot, implementing a comprehensive ERD covering users, products, orders, and payments. Integrated Xendit for online transactions, Flyway for schema migration, and Resilience4j for fault tolerance. The project also includes observability setup with Prometheus and Grafana, and message streaming via Kafka. Developed while learning best backend practices through FastCampus under Elanq’s mentorship.",
    image: course_project3,
    tech:  [
      "Springboot",
      "Flyway",
      "ElasticSearch",
      "Kafka",
      "Prometheus",
      "Grafana",
      "Xendit",
      "Resillience4j",
      "SendGrid",
      "Junit & Mockito",
      "Docker",
    ],
    demoUrl: "https://github.com/HappyRehund/ecommerce-java",
  },
  {
    title: "AgCyRAG: an Agentic Knowledge Graph based RAG Framework for Automated Security Analysis",
    description:
      "Hybrid Agentic RAG framework for cybersecurity analysis that combines Knowledge Graphs and vector-based retrieval to enhance factual grounding and interpretability. AgCyRAG enables adaptive agent reasoning across structured and unstructured data for more accurate threat insights. The paper was accepted at the RAGE Workshop, International Semantic Web Conference (ISWC) 2025 in Nara, Japan.",
    image: course_project2,
    tech:  [
      "Python",
      "Langchain & Langgraph",
      "GraphDB",
      "Neo4j",
      "Virtuoso",
      "ChatOpenAI",
      "TogetherAI"
    ],
    demoUrl: "https://ceur-ws.org/Vol-4079/paper11.pdf",
  },
  {
    title: "Search Engine Detik Sport Articles",
    description:
      "Mini search engine project applying information retrieval concepts such as indexing and ranking on Detik Sports articles. Built to demonstrate document preprocessing, tokenization, and relevance-based retrieval using PySerini and Sastrawi within a Streamlit interface.",
    image: course_project1,
    tech:  [
      "Streamlit",
      "Pandas",
      "PySerini",
      "Sastrawi",
      "Beautiful Soup"
    ],
    demoUrl: "https://github.com/HappyRehund/SearchEngine-BM25-SportArticle",
  }
]