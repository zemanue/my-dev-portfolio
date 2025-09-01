import { FaGraduationCap } from "react-icons/fa6";

import TitleH2 from "./TitleH2";
import Timeline from "./Timeline";

const education = [
    {
        id: 3,
        title: "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        place: "DigitechFP",
        date: "Sept. 2023 - Jun. 2025",
        description: "Formación oficial centrada en desarrollo de software multiplataforma: aplicaciones de escritorio, móviles y web. Aprendizaje de lenguajes como Java, JavaScript y PHP, desarrollo de apps móviles con Android Studio, diseño de interfaces, acceso a bases de datos, etc.",
        icon: <FaGraduationCap />
    },
    {
        id: 2,
        title: "Máster en Competencias Docentes Avanzadas",
        place: "Universidad Camilo José Cela, Madrid",
        date: "Sept. 2020 - Jun. 2021",
        description: "Aprendizaje de nuevas corrientes pedagógicas y metodologías activas, educación digital, neurociencia aplicada al aprendizaje, técnicas de creatividad, coaching educativo, gestión de centros, investigación educativa, etc.",
        icon: <FaGraduationCap />
    },
    {
        id: 1,
        title: "Graduado en Educación Primaria",
        place: "Universidad de Málaga",
        date: "Sept. 2015 - Jun. 2019",
        description: "Formación en pedagogía, didáctica de distintas áreas (Lengua Castellana, Matemáticas, Ciencias, etc.), atención a la diversidad, etc. Mención en Educación Física.",
        icon: <FaGraduationCap />
    }
];

export default function Education() {
    return (
        <section id="education" className="py-16 px-4 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
            <TitleH2>Educación</TitleH2>
            <Timeline timelineElements={education} />
        </section>
    )
}