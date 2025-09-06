import { FaBriefcase } from "react-icons/fa6";

import TitleH2 from "./TitleH2";
import TimelineCard from "./TimelineCard";

const jobs = [
    {
        title: "Docente Programa CODI",
        dateStart: "ago. 2025",
        dateEnd: "actualidad",
        place: "Mainjobs (Marbella)",
        description: `Enseñanza de competencias digitales a niños/as y adolescentes.\nPrograma estatal gratuito y a través de proyectos gamificados.`
    },
    {
        title: "Maestro de programación",
        dateStart: "jun. 2025",
        dateEnd: "actualidad",
        place: "Logiscool (Marbella)",
        description: `Talleres digitales bilingües (inglés y español).\nDesarrollo de videojuegos con Roblox Studio y creación de apps con Thunkable.\nProducción de contenido digital: imágenes y video con aplicaciones como Krita y CapCut, e IA generativa con ChatGPT, Gemini, etc.`
    },
    {
        title: "Desarrollador de videojuegos",
        dateStart: "mar. 2025",
        dateEnd: "jun. 2025",
        place: "Bimfloat, Málaga (Prácticas DAM)",
        description: `Desarrollo de novelas visuales infantiles con Unity y la extensión Naninovel.\nConfiguración de prefabs, escenas, scripts en C#, etc.\nUso de IA Generativa para historias e imágenes (ChatGPT, Gemini, extensión Stable Difussion en Krita).`
    },
    {
        title: "Profesor particular",
        dateStart: "sept. 2015",
        dateEnd: "jun. 2025",
        place: "Autónomo",
        description: `Ed. Primaria y ESO: Matemáticas, Lengua, Inglés...\nExperiencia con necesidades educativas: discapacidad visual, dislexia, discalculia, TDAH...\nCreación y uso de materiales manipulativos y digitales, metodologias activas, etc.\nClases de español a alumnado extranjero.`
    }
];

export default function WorkExperience() {
    return (
        <section id="experience" className="max-w-7xl mx-auto py-16 px-4 bg-white dark:bg-zinc-900 transition-colors duration-500">
            <TitleH2>Experiencia reciente</TitleH2>
            <div className="mt-10 flex flex-col gap-8">
                {jobs.map((job, i) => (
                    <TimelineCard key={i} element={{ ...job, icon: <FaBriefcase /> }} />
                ))}
            </div>
        </section>
    );
}
