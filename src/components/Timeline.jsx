import TimelineCard from "./TimelineCard";

export default function Timeline( { timelineElements } ) {
    return (
        <div className="space-y-5">
            {timelineElements.map((element) => (
                <TimelineCard key={element.id} element={element} />
            ))}
        </div>
    );
}
