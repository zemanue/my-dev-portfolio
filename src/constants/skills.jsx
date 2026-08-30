import React from "react";
import { FaJava, FaPhp, FaPython, FaReact, FaUnity, FaGitAlt, FaGithub } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { SiAndroidstudio, SiClaudecode, SiCursor, SiGithubcopilot, SiMongodb, SiMysql, SiShadcnui, SiPostman, SiSpringboot, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

export const techSkills = {
    "Lenguajes Principales": [
        { name: "JavaScript / Typescript", icon: <SiTypescript className="text-blue-500 text-5xl" />, description: "Lenguajes de desarrollo web full-stack, tipado estático y lógica cliente/servidor" },
        { name: "Java", icon: <FaJava className="text-red-500 text-5xl" />, description: "Lenguaje orientado a objetos para desarrollo de aplicaciones multiplataforma" },
        { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl" />, description: "Lenguaje versátil para crear aplicaciones, automatizar tareas, analizar datos y desarrollar inteligencia artificial" },
        { name: "PHP", icon: <FaPhp className="text-indigo-500 text-5xl" />, description: "Lenguaje de servidor para desarrollo web dinámico" },
        { name: "C#", icon: <TbBrandCSharp className="text-purple-500 text-5xl" />, description: "Lenguaje orientado a objetos para desarrollo de software y lógica de videojuegos" },
    ],
    "Frontend & Frameworks Web": [
        { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" />, description: "Librería para crear interfaces de usuario modulares y dinámicas" },
        { name: "Next.js", icon: <RiNextjsLine className="text-black-900 text-5xl" />, description: "Framework de React para sitios web de alto rendimiento, optimizadas y rápidas" },
        { name: "Vite", icon: <SiVite className="text-purple-500 text-5xl" />, description: "Herramienta de desarrollo front-end ultrarrápida, con recarga en caliente y compilación optimizada" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" />, description: "Framework CSS utility-first para diseño de sistemas UI modernos" },
        { name: "Shadcn UI", icon: <SiShadcnui className="text-black-400 text-5xl" />, description: "Kit de componentes UI accesibles y personalizables para React" },],
    "Backend y Bases de Datos": [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-5xl" />, description: "Framework de Java para desarrollo rápido de aplicaciones empresariales" },
        { name: "MySQL", icon: <SiMysql className="text-blue-800 text-5xl" />, description: "Sistema de gestión de bases de datos relacionales" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" />, description: "Base de datos NoSQL orientada a documentos" },
    ],
    "Control de Versiones": [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" />, description: "Sistema de control de versiones distribuido" },
        { name: "GitHub", icon: <FaGithub className="text-black-400 text-5xl" />, description: "Plataforma para alojar y colaborar en proyectos con Git" },
    ],
    "Entornos y Herramientas": [
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500 text-5xl" />, description: "IDE oficial para desarrollo de aplicaciones Android" },
        { name: "Unity", icon: <FaUnity className="text-black-900 text-5xl" />, description: "Motor de videojuegos para desarrollo 2D y 3D multiplataforma" },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" />, description: "Herramienta para probar y documentar APIs REST" },
    ],
    "IA y Asistentes": [
        { name: "GitHub Copilot", icon: <SiGithubcopilot className="text-indigo-400 text-5xl" />, description: "Asistente de IA que sugiere código en tiempo real" },
        { name: "Cursor", icon: <SiCursor className="text-black-400 text-5xl" />, description: "Asistente de IA que sugiere código en tiempo real" },
        { name: "Claude Code", icon: <SiClaudecode className="text-orange-400 text-5xl" />, description: "Asistente de IA de Anthropic para conversación y análisis" },
    ]
};

export const softSkills = [
    "Comunicación",
    "Trabajo en equipo",
    "Pensamiento crítico",
    "Aprendizaje continuo",
    "Adaptabilidad",
    "Creatividad",
    "Orientación al detalle"
];
