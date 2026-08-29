import React from "react";
import TitleH2 from "./TitleH2";
import Timeline from "./Timeline";
import { qualifications } from "../constants/education";

export default function Education() {
    return (
        <section id="education" className="py-16 px-4 bg-gradient-to-b from-white via-zinc-200 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <TitleH2>Educación</TitleH2>
                <Timeline timelineElements={qualifications} />
            </div>
        </section>
    )
}