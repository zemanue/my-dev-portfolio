import React from "react";

export default function TimelineCard({ element }) {
    return (
        <div className="rounded-2xl text-zinc-900 dark:text-zinc-100  bg-white/80 dark:bg-zinc-800/80 shadow-lg p-7 flex flex-col mb-0 border border-zinc-200 dark:border-zinc-700">
            <div className="mr-4 mt-1 text-2xl flex-shrink-0">
                {element.icon}
            </div>
            <div>
                <h3 className="text-xl font-bold mb-1">{element.title}</h3>
                {element.place && (
                    <p className="text-sm font-medium text-blue-400 dark:text-blue-500 mb-1">{element.place}</p>
                )}
                <p className="text-base text-zinc-800 dark:text-zinc-100 leading-relaxed">
                    {element.description}
                </p>
            </div>
        </div>
    );
}
