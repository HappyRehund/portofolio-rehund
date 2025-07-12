import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

export const projects = [
  {
    title: "PowerTOBK",
    description:
      "A tryout platform representing Computer Science UGM developed as a group project. I worked on the frontend for the aptitude test, which helps users determine which of the seven fields (FE, BE, Mobapps, UI/UX, Cybersecurity, Data Science, Game Development) best suits them based on their quiz results.",
    image: project3,
    tech:  [
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
