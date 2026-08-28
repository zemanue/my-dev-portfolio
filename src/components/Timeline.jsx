import TimelineCard from "./TimelineCard";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Timeline.propTypes = {
    timelineElements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            dateStart: PropTypes.string,
            dateEnd: PropTypes.string,
            content: PropTypes.node,
        })
    ).isRequired,
};

export default function Timeline({ timelineElements }) {
    const [isMobile, setIsMobile] = useState(
        () => (typeof window !== "undefined" ? window.innerWidth < 640 : false)
    );

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 640);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative pl-5 sm:pl-10">
            {/* Línea vertical ajustada */}
            <div
                className="absolute left-2 sm:left-4 top-1.5 w-0.5 h-[calc(100%-12px)] bg-indigo-300 dark:bg-indigo-900/60 rounded-full element-to-reveal"
                style={{ zIndex: 0 }}
            />

            <div className="flex flex-col gap-6 sm:gap-8">
                {timelineElements.map((element) => (
                    <div key={element.id} className="relative flex items-start gap-3 sm:gap-6 element-to-reveal">
                        {/* Fecha a la izquierda solo en sm+ */}
                        {!isMobile && (
                            <div className="flex flex-col items-end justify-center min-w-[80px] max-w-[100px] pr-1 pt-2 flex-shrink-0">
                                {(element.dateEnd || element.dateStart) && (
                                    <div className="flex flex-col items-end text-xs font-medium">
                                        {element.dateEnd && (
                                            <span className="whitespace-nowrap">{element.dateEnd}</span>
                                        )}
                                        {element.dateStart && (
                                            <span className="whitespace-nowrap text-zinc-600 dark:text-zinc-400">
                                                {element.dateStart}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Card desplazada a la derecha */}
                        <div className="flex-1 min-w-0">
                            <TimelineCard
                                element={{
                                    ...element,
                                    dateStart: isMobile ? element.dateStart : undefined,
                                    dateEnd: isMobile ? element.dateEnd : undefined,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}