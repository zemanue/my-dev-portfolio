import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPhp, FaReact, FaBootstrap, FaUnity, FaGitAlt, FaGithub, FaMasksTheater } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { SiAndroidstudio, SiGithubcopilot, SiMysql, SiMongodb, SiSpringboot, SiTailwindcss, SiPhpmyadmin, SiOpenai, SiGooglegemini, SiPostman, SiClaude } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";


export const techSkills = {
    "Lenguajes de Programación": [
        { name: "Java", icon: <FaJava className="text-red-500 text-5xl" />, description: "Lenguaje orientado a objetos para desarrollo de aplicaciones multiplataforma" },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" />, description: "Lenguaje de marcado para estructurar contenido web" },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, description: "Lenguaje de estilos para diseñar páginas web" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" />, description: "Lenguaje de programación para crear experiencias web interactivas" },
        { name: "PHP", icon: <FaPhp className="text-indigo-500 text-5xl" />, description: "Lenguaje de servidor para desarrollo web dinámico" },
        { name: "C#", icon: <TbBrandCSharp className="text-purple-500 text-5xl" />, description: "Lenguaje de programación orientado a objetos de Microsoft" },
    ],
    "Frameworks y Librerías": [
        { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" />, description: "Librería de JavaScript para crear interfaces de usuario dinámicas" },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-5xl" />, description: "Framework de Java para desarrollo rápido de aplicaciones empresariales" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" />, description: "Framework CSS utility-first para diseño rápido y personalizable" },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-5xl" />, description: "Framework CSS para desarrollo responsive y componentes predefinidos" },
        { name: "Playwright", icon: <FaMasksTheater className="text-pink-500 text-5xl" />, description: "Framework de automatización de tests end-to-end para aplicaciones web" },

    ],
    "Bases de Datos": [
        { name: "MySQL", icon: <SiMysql className="text-blue-800 text-5xl" />, description: "Sistema de gestión de bases de datos relacionales" },
        { name: "phpMyAdmin", icon: <SiPhpmyadmin className="text-orange-400 text-5xl" />, description: "Herramienta web para administrar bases de datos MySQL" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" />, description: "Base de datos NoSQL orientada a documentos" },
    ],
    "Control de Versiones": [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" />, description: "Sistema de control de versiones distribuido" },
        { name: "GitHub", icon: <FaGithub className="text-black-400 text-5xl" />, description: "Plataforma para alojar y colaborar en proyectos con Git" },
    ],
    "Entornos y Herramientas": [
        { name: "Visual Studio Code", icon: <BiLogoVisualStudio className="text-blue-500 text-5xl" />, description: "Editor de código multiplataforma con extensiones potentes" },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500 text-5xl" />, description: "IDE oficial para desarrollo de aplicaciones Android" },
        { name: "Unity", icon: <FaUnity className="text-black-900 text-5xl" />, description: "Motor de videojuegos para desarrollo 2D y 3D multiplataforma" },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" />, description: "Herramienta para probar y documentar APIs REST" },
    ],
    "IA y Asistentes": [
        { name: "ChatGPT", icon: <SiOpenai className="text-black-400 text-5xl" />, description: "Asistente de IA de OpenAI para generación de texto y código" },
        { name: "Gemini", icon: <SiGooglegemini className="text-blue-400 text-5xl" />, description: "Modelo de IA multimodal de Google para diversas tareas" },
        { name: "GitHub Copilot", icon: <SiGithubcopilot className="text-indigo-400 text-5xl" />, description: "Asistente de IA que sugiere código en tiempo real" },
        { name: "Claude", icon: <SiClaude className="text-yellow-400 text-5xl" />, description: "Asistente de IA de Anthropic para conversación y análisis" },
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
