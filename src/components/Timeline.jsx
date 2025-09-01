import TimelineCard from "./TimelineCard";

export default function Timeline({ timelineElements }) {
    return (
        <div className="relative pl-10">
            {/* Línea vertical */}
            <div className="absolute left-4 top-0 w-1 h-full bg-blue-400 dark:bg-blue-500 rounded-full" style={{ zIndex: 0 }} />
            <div className="flex flex-col gap-8">
                {timelineElements.map((element) => (
                    <div key={element.id} className="relative flex items-start">
                        {/* Fecha */}
                        <div className="flex flex-col items-end justify-center min-w-[90px] pr-4 pt-2">
                            {element.date && (
                                <span className="text-s font-semibold text-zinc-600 dark:text-zinc-200 whitespace-nowrap">{element.date}</span>
                            )}
                        </div>
                        {/* Card desplazada a la derecha */}
                        <div className="flex-1">
                            <TimelineCard element={element} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
