import { Globe, Server, Database, Code } from "lucide-react";

export const techCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-8 w-8" />,
      color: "text-primary",
      skills: [
        { name: "React", level: 5 },
        { name: "Tanstack", level: 2 },
        { name: "Tailwind CSS", level: 5 },
        { name: "Next.js", level: 4 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8" />,
      color: "text-secondary",
      skills: [
        { name: "FastAPI", level: 3 },
        { name: "Node.js & Express.js", level: 3 },
        { name: "SpringBoot", level: 4 },
      ]
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8" />,
      color: "text-accent",
      skills: [
        { name: "PostgreSQL", level: 4 },
        { name: "MongoDB", level: 2 },
        { name: "Redis", level: 3 },
        { name: "MySQL", level: 4 }
      ]
    },
    {
      title: "Cloud Computing & DevOps",
      icon: <Code className="h-8 w-8" />,
      color: "text-warning",
      skills: [
        { name: "Docker", level: 3 },
        { name: "AWS", level: 1 },
        { name: "GCP", level: 3 },
        { name: "Git", level: 5 },
        { name: "Linux", level: 4 }
      ]
    },
]