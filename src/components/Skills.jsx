import React from "react";

import TitleH2 from "./TitleH2";
import TitleH3 from "./TitleH3";

import { techSkills, softSkills } from "../constants/skills";

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
            className="flex flex-col items-center p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 shadow transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
        >
            <span className="mb-2">{skill.icon}</span>
            <span className="mt-1 text-base font-medium tracking-tight text-center break-words w-full">{skill.name}</span>
        </div>
    );
}

export default function Skills() {
    const skillEntries = Object.entries(techSkills);
    // Agrupar categorías de 2 en 2
    const grouped = [];
    for (let i = 0; i < skillEntries.length; i += 2) {
        grouped.push(skillEntries.slice(i, i + 2));
    }

    return (
        <section id="skills" className="py-16 px-4 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto">
                <TitleH2>Habilidades</TitleH2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {grouped.map((pair, idx) => (
                        <React.Fragment key={idx}>
                            {pair.map(([category, items]) => (
                                <div key={category} className="rounded-2xl bg-white/80 dark:bg-zinc-800/80 shadow-lg p-7 flex flex-col mb-0 border border-zinc-200 dark:border-zinc-700">
                                    {/* <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                                        <span className="inline-block w-2 h-6 bg-blue-500 dark:bg-blue-400 rounded-full mr-2" />
                                        {category}
                                    </h3> */}
                                    <TitleH3 color="blue">{category}</TitleH3>
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
                    {/* <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-300 flex items-center gap-2">
                        <span className="inline-block w-2 h-6 bg-green-500 dark:bg-green-400 rounded-full mr-2" />
                        Soft Skills
                    </h3> */}
                    <TitleH3 color="green">Habilidades blandas</TitleH3>
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