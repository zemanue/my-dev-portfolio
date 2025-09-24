import TimelineCard from "./TimelineCard";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Timeline.propTypes = {
    timelineElements: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        dateStart: PropTypes.string,
        dateEnd: PropTypes.string,
        content: PropTypes.node.isRequired,
    })).isRequired,
};

export default function Timeline({ timelineElements }) {
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 640 : false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 640);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative pl-10">
            {/* Línea vertical */}
            <div className="absolute left-4 top-0 w-1 h-full bg-blue-400 dark:bg-blue-500 rounded-full" style={{ zIndex: 0 }} />
            <div className="flex flex-col gap-8">
                {timelineElements.map((element) => (
                    <div key={element.id} className="relative flex items-start">
                        {/* Fecha a la izquierda solo en sm+ */}
                        {!isMobile && (
                            <div className="flex flex-col items-end justify-center min-w-0 pr-2 pt-2">
                                {(element.dateEnd || element.dateStart) && (
                                    <div className="flex flex-col gap-1">
                                        {element.dateEnd && (
                                            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-200 whitespace-nowrap">
                                                {element.dateEnd}
                                            </span>
                                        )}
                                        {element.dateStart && (
                                            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-200 whitespace-nowrap">
                                                {element.dateStart}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                        {/* Card desplazada a la derecha, con fecha dentro en móvil */}
                        <div className="flex-1">
                            <TimelineCard element={{
                                ...element,
                                dateStart: isMobile ? element.dateStart : undefined,
                                dateEnd: isMobile ? element.dateEnd : undefined
                            }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}