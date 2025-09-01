import { FaBriefcase } from "react-icons/fa6";

import TitleH2 from "./TitleH2";

const jobs = [
    {
        title: "Docente Programa CODI",
        date: "ago. 2025 - actualidad",
        place: "Mainjobs (Marbella)",
        description: `Enseñanza de competencias digitales a niños/as y adolescentes.\nPrograma estatal gratuito y a través de proyectos gamificados.`
    },
    {
        title: "Maestro de programación",
        date: "jun. 2025 - actualidad",
        place: "Logiscool (Marbella)",
        description: `Talleres digitales bilingües (inglés y español).\nDesarrollo de videojuegos con Roblox Studio y creación de apps con Thunkable.\nProducción de contenido digital: imágenes y video con aplicaciones como Krita y CapCut, e IA generativa con ChatGPT, Gemini, etc.`
    },
    {
        title: "Profesor particular",
        date: "sept. 2015 - jun. 2025",
        place: "Autónomo",
        description: `Ed. Primaria y ESO: Matemáticas, Lengua, Inglés...\nExperiencia con necesidades educativas: discapacidad visual, dislexia, discalculia, TDAH...\nCreación y uso de materiales manipulativos y digitales, metodologias activas, etc.\nClases de español a alumnado extranjero.`
    },
    {
        title: "Desarrollador de videojuegos",
        date: "mar. 2025 - jun. 2025",
        place: "Bimfloat, Málaga (Prácticas DAM)",
        description: `Desarrollo de novelas visuales infantiles con Unity y la extensión Naninovel.\nConfiguración de prefabs, escenas, scripts en C#, etc.\nUso de IA Generativa para historias e imágenes (ChatGPT, Gemini, extensión Stable Difussion en Krita).`
    }
];

export default function WorkExperience() {
    return (
        <section id="work" className="py-16 px-4 bg-white dark:bg-zinc-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <TitleH2>Experiencia reciente</TitleH2>
                <div className="mt-10 flex flex-col gap-8">
                    {jobs.map((job, i) => (
                        <div
                            key={i}
                            className="rounded-2xl text-zinc-900 dark:text-zinc-100 bg-white/80 dark:bg-zinc-800/80 shadow-lg p-7 flex flex-col mb-0 border border-zinc-200 dark:border-zinc-700"
                        >
                            <div className="mr-4 mt-1 text-2xl flex-shrink-0">
                                <FaBriefcase />
                                <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                            </div>
                            <div>
                                {job.place && (
                                    <p className="text-sm font-medium text-blue-400 dark:text-blue-500 mb-1">{job.place}</p>
                                )}
                                <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-2">{job.date}</p>
                                {job.description.split("\n").map((line, idx) => (
                                    <p key={idx} className="text-base text-zinc-800 dark:text-zinc-100 leading-relaxed">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
