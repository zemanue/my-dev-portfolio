import React from "react";
import { FaBriefcase } from "react-icons/fa6";

import TitleH2 from "./TitleH2";
import TimelineCard from "./TimelineCard";

import { jobs } from "../constants/jobs";

export default function WorkExperience() {
    return (
        <section id="experience" className="max-w-7xl mx-auto py-16 px-4 bg-gradient-to-b from-white via-zinc-100 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
            <TitleH2>Experiencia reciente</TitleH2>
            <div className="mt-10 flex flex-col gap-8">
                {jobs.map((job, i) => (
                    <TimelineCard key={i} element={{ ...job, icon: <FaBriefcase /> }} showDatesInline />
                ))}
            </div>
        </section>
    );
}
