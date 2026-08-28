import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { cn } from "../utils";

TimelineCard.propTypes = {
    element: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        place: PropTypes.string,
        dateStart: PropTypes.string,
        dateEnd: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.element,
    }).isRequired,
};

export default function TimelineCard({ element }) {
    const [expanded, setExpanded] = useState(false);

    // Filtramos líneas vacías si las hubiera
    const descriptionLines = (element.description || "")
        .split("\n")
        .filter((line) => line.trim() !== "");

    return (
        <div
            onClick={() => setExpanded((prev) => !prev)}
            className="group relative element-to-reveal cursor-pointer rounded-xl sm:rounded-2xl text-zinc-900 dark:text-zinc-100 bg-white/80 dark:bg-zinc-900/80 backdrop-blur p-4 sm:p-6 border border-zinc-200 dark:border-zinc-800 shadow-xs shadow-zinc-300 dark:shadow-none transition-all duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-zinc-500/25 hover:border-zinc-700/25 dark:hover:border-zinc-300/25 focus:shadow-xl focus:shadow-zinc-800/25 dark:focus:shadow-zinc-200/25 focus:border-indigo-400/25"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                    {element.icon && (
                        <div className="flex-shrink-0 text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 pt-0.5 group-hover:scale-110 transition-transform duration-300">
                            {element.icon}
                        </div>
                    )}

                    <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-100 break-words">
                            {element.title}
                        </h3>

                        {element.place && (
                            <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5 break-words">
                                {element.place}
                            </p>
                        )}

                        {element.dateStart && (
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 sm:hidden">
                                {element.dateStart} {element.dateEnd && `- ${element.dateEnd}`}
                            </p>
                        )}
                    </div>
                </div>

                {/* Botón desplegable */}
                <button
                    aria-label="Toggle details"
                    className="flex-shrink-0 p-1 rounded-lg text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors"
                >
                    {expanded ? (
                        <FaAngleUp className="w-4 h-4" />
                    ) : (
                        <FaAngleDown className="w-4 h-4" />
                    )}
                </button>
            </div>

            {/* Descripción desplegable */}
            {descriptionLines.length > 0 && (
                <div
                    className={cn("grid transition-all duration-300 ease-in-out",
                        expanded
                            ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80"
                            : "grid-rows-[0fr] opacity-0"
                    )}
                >
                    <div className="overflow-hidden">
                        <div className="space-y-2.5">
                            {descriptionLines.map((line, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500/80 dark:bg-indigo-400 mt-2" />
                                    <span className="flex-1 break-words">{line}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}