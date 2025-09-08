import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPhp, FaReact, FaBootstrap, FaUnity, FaGitAlt, FaGithub } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { SiAndroidstudio, SiGithubcopilot, SiMysql, SiMongodb, SiSpringboot, SiTailwindcss, SiPhpmyadmin, SiOpenai, SiGooglegemini, SiPostman, SiClaude } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";


export const techSkills = {
    "Lenguajes de Programación": [
        { name: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500 text-5xl" /> },
        { name: "C#", icon: <TbBrandCSharp className="text-purple-500 text-5xl" /> },
    ],
    "Frameworks y Librerías": [
        { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-5xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-5xl" /> },
        { name: "Unity", icon: <FaUnity className="text-black-900 text-5xl" /> },
    ],
    "Bases de Datos": [
        { name: "MySQL", icon: <SiMysql className="text-blue-800 text-5xl" /> },
        { name: "phpMyAdmin", icon: <SiPhpmyadmin className="text-orange-400 text-5xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
    ],
    "Control de Versiones": [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-black-400 text-5xl" /> },
    ],
    "Entornos y Herramientas": [
        { name: "Visual Studio Code", icon: <BiLogoVisualStudio className="text-blue-500 text-5xl" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500 text-5xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-5xl" /> },
    ],
    "IA y Asistentes": [
        { name: "ChatGPT", icon: <SiOpenai className="text-black-400 text-5xl" /> },
        { name: "Gemini", icon: <SiGooglegemini className="text-blue-400 text-5xl" /> },
        { name: "GitHub Copilot", icon: <SiGithubcopilot className="text-indigo-400 text-5xl" /> },
        { name: "Claude", icon: <SiClaude className="text-yellow-400 text-5xl" /> },
    ]
};

export const softSkills = [
    "Resolución de problemas",
    "Comunicación",
    "Trabajo en equipo",
    "Proactividad",
    "Pensamiento crítico",
    "Auto-aprendizaje",
    "Adaptabilidad",
    "Resiliencia",
    "Creatividad",
    "Aprendizaje continuo",
    "Orientación al detalle"
];
