export default function TimelineCard({ element }) {
    return (
        <div className="rounded-2xl text-zinc-900 dark:text-zinc-100  bg-blue-50 dark:bg-zinc-800/80 shadow-lg p-7 flex flex-col mb-0 border border-zinc-200 dark:border-zinc-700">
            <div className="flex flex-row gap-3 mr-4 mt-1 text-2xl flex-shrink-0">
                <div className="flex items-start w-7 h-7">{element.icon}</div>
                <div>
                    <h3 className="flex-1 text-xl font-bold mb-1">{element.title}</h3>
                    {element.place && (
                        <p className="text-sm font-medium text-blue-400 dark:text-blue-500 mb-1">{element.place}</p>
                    )}
                    {element.dateStart && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-2">
                            {element.dateStart} {element.dateEnd && `- ${element.dateEnd}`}
                        </p>
                    )}
                    {element.description.split("\n").map((line, idx) => (
                        <p key={idx} className="text-base text-zinc-800 dark:text-zinc-100 leading-relaxed">
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
