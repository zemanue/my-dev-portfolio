import { useState } from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


export default function TimelineCard({ element }) {
    const [expanded, setExpanded] = useState(false);
    const descriptionLines = (element.description || "").split('\n');

    return (
        <div
            className="rounded-2xl text-zinc-900 dark:text-zinc-100 bg-blue-50 dark:bg-zinc-800/50 shadow-lg p-7 flex flex-col mb-0 border border-zinc-200 dark:border-zinc-700 hover:bg-blue-100 dark:hover:bg-zinc-800 transition-colors"
            
        >
            <div className="flex flex-row gap-3 mr-4 mt-1 text-2xl flex-shrink-0">
                <div className="flex items-start w-7 h-7">{element.icon}</div>
                <div>
                    <h3 className="flex-1 text-xl font-bold mb-1 cursor-pointer" onClick={() => setExpanded((prev) => !prev)}>
                        {element.title}
                        <button
                            className="ms-5 text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition inline-flex items-center justify-center"
                            tabIndex={-1}
                            style={{ pointerEvents: "none" }}
                        >
                            {expanded ? <FaAngleUp className="inline mb-1" /> : <FaAngleDown className="inline mb-1" />}
                        </button>
                    </h3>
                    {element.place && (
                        <p className="text-sm font-medium text-blue-400 dark:text-blue-500 mb-1">{element.place}</p>
                    )}
                    {element.dateStart && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-2">
                            {element.dateStart} {element.dateEnd && `- ${element.dateEnd}`}
                        </p>
                    )}

                    <div
                        className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <ul className="text-base text-zinc-800 dark:text-zinc-100 leading-relaxed list-disc pl-5">
                            {descriptionLines.map((line, idx) => (
                                <li key={idx}>{line}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
