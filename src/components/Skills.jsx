import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPhp, FaReact, FaUnity, FaGitAlt, FaGithub } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { SiAndroidstudio, SiGithubcopilot, SiMysql, SiMongodb, SiSpringboot, SiPhpmyadmin, SiOpenai, SiGooglegemini } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi"

const skills = {
    "Lenguajes de Programación": [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
        { name: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
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
    ],
    "IA y Asistentes": [
        { name: "ChatGPT", icon: <SiOpenai className="text-black-400 text-5xl" /> },
        { name: "Gemini", icon: <SiGooglegemini className="text-blue-400 text-5xl" /> },
        { name: "GitHub Copilot", icon: <SiGithubcopilot className="text-indigo-400 text-5xl" /> },
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-6 bg-white dark:bg-zinc-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">Habilidades</h2>

                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="mb-10">
                        <h3 className="text-2xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {items.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center p-4 rounded-xl bg-zinc-800 dark:bg-zinc-800 text-zinc-100 hover:bg-zinc-700 dark:hover:bg-zinc-700 shadow-md hover:scale-105 transform transition duration-300"
                                >
                                    {skill.icon}
                                    <span className="mt-3 text-lg">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
