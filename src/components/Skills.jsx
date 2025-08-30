import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPhp, FaReact, FaUnity, FaGitAlt, FaGithub } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { SiAndroidstudio, SiGithubcopilot, SiMysql, SiMongodb, SiSpringboot, SiPhpmyadmin, SiOpenai, SiGooglegemini, SiPostman, SiClaude } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = {
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
        { name: "Unity", icon: <FaUnity className="text-gray-400 text-5xl" /> },
    ],
    "Bases de Datos": [
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-5xl" /> },
        { name: "phpMyAdmin", icon: <SiPhpmyadmin className="text-orange-400 text-5xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
    ],
    "Control de Versiones": [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
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

const softSkills = [
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

function SkillsGrid({ children }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {children}
        </div>
    );
}

function SkillCard({ skill }) {
    return (
        <div
            key={skill.name}
            className="flex flex-col items-center p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 hover:bg-blue-50 dark:hover:bg-zinc-800 shadow transition-all duration-300 hover:scale-105 border border-zinc-200 dark:border-zinc-700"
        >
            <span className="mb-2">{skill.icon}</span>
            <span className="mt-1 text-base font-medium tracking-tight text-center break-words w-full">{skill.name}</span>
        </div>
    );
}

export default function Skills() {
    const skillEntries = Object.entries(skills);
    // Agrupar categorías de 2 en 2
    const grouped = [];
    for (let i = 0; i < skillEntries.length; i += 2) {
        grouped.push(skillEntries.slice(i, i + 2));
    }

    return (
        <section id="skills" className="py-16 px-4 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-14 text-zinc-900 dark:text-zinc-100 tracking-tight">Habilidades</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {grouped.map((pair, idx) => (
                        <React.Fragment key={idx}>
                            {pair.map(([category, items]) => (
                                <div key={category} className="rounded-2xl bg-white/80 dark:bg-zinc-800/80 shadow-lg p-7 flex flex-col mb-0 border border-zinc-200 dark:border-zinc-700">
                                    <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                        <span className="inline-block w-2 h-6 bg-blue-500 dark:bg-blue-400 rounded-full mr-2" />
                                        {category}
                                    </h3>
                                    <SkillsGrid>
                                        {items.map((skill) => (
                                            <SkillCard key={skill.name} skill={skill} />
                                        ))}
                                    </SkillsGrid>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>

                {/* Soft Skills */}
                <div className="mt-14">
                    <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-300 flex items-center gap-2">
                        <span className="inline-block w-2 h-6 bg-green-500 dark:bg-green-400 rounded-full mr-2" />
                        Soft Skills
                    </h3>
                    <div className="flex flex-row gap-[1%] flex-wrap">
                        {softSkills.map((skill) => (
                            <span
                                key={skill}
                                className="inline-block w-fit px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 font-medium text-base shadow-sm border border-green-200 dark:border-green-800 m-2"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}