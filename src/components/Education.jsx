import { FaGraduationCap } from "react-icons/fa6";


import TitleH2 from "./TitleH2";
import TitleH3 from "./TitleH3";

const education = [
    {
        id: 1,
        title: "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        place: "DigitechFP",
        date: "Sept. 2023 - Jun. 2025",
        description: "Formación oficial centrada en desarrollo de software multiplataforma: aplicaciones de escritorio, móviles y web. Aprendizaje de lenguajes como Java, JavaScript y PHP, desarrollo de apps móviles con Android Studio, diseño de interfaces, acceso a bases de datos, etc.",
        icon: <FaGraduationCap />
    },
    {
        title: "Agile Development Scrum Master",
        place: "Online Course",
        date: "November 2012",
        description: "Agile Development, Scrum",
        icon: <FaGraduationCap />
    }
];

export default function Education() {
    return (
        <section id="education" className="py-16 px-4 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
            <TitleH2 text="Educación" />
            <div>
                {education.map((edu, index) => (
                    <div key={index}>
                        <h3>{edu.title}</h3>
                        <h4>{edu.place}</h4>
                        <p>{edu.date}</p>
                        <p>{edu.description}</p>
                        {edu.icon}
                    </div>
                ))}
            </div>
        </section>
    )
}