import { Globe, Server, Database, Code } from "lucide-react";

export const techCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-8 w-8" />,
      color: "text-primary",
      skills: [
        { name: "React", level: 5 },
        { name: "Vue.js", level: 4 },
        { name: "TypeScript", level: 4 },
        { name: "Tailwind CSS", level: 5 },
        { name: "Next.js", level: 4 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8" />,
      color: "text-secondary",
      skills: [
        { name: "Node.js", level: 4 },
        { name: "Python", level: 3 },
        { name: "Express", level: 4 },
        { name: "Django", level: 3 },
        { name: "GraphQL", level: 3 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8" />,
      color: "text-accent",
      skills: [
        { name: "PostgreSQL", level: 4 },
        { name: "MongoDB", level: 4 },
        { name: "Redis", level: 3 },
        { name: "MySQL", level: 4 },
        { name: "Supabase", level: 3 }
      ]
    },
    {
      title: "DevOps",
      icon: <Code className="h-8 w-8" />,
      color: "text-warning",
      skills: [
        { name: "Docker", level: 3 },
        { name: "AWS", level: 3 },
        { name: "CI/CD", level: 4 },
        { name: "Git", level: 5 },
        { name: "Linux", level: 4 }
      ]
    },
]