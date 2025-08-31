import React from "react";

export default function TimelineCard({ element }) {
    return (
        <div className="flex items-start p-6 rounded-lg bg-gray-800 shadow-lg text-white">
            <div className="mr-4 mt-1 text-2xl flex-shrink-0">
                {element.icon}
            </div>
            <div>
                <h3 className="text-xl font-bold mb-1">{element.title}</h3>
                {element.place && (
                    <p className="text-sm font-medium text-gray-400 mb-1">{element.place}</p>
                )}
                {element.date && (
                    <p className="text-xs text-gray-400 mb-2">{element.date}</p>
                )}
                <p className="text-base text-gray-100 leading-relaxed">
                    {element.description}
                </p>
            </div>
        </div>
    );
}
