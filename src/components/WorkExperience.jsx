import { FaBriefcase } from "react-icons/fa6";

import TitleH2 from "./TitleH2";
import TimelineCard from "./TimelineCard";

import { jobs } from "../constants/jobs";

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
