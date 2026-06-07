import React from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

ScrollDownIndicator.propTypes = {
    targetId: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default function ScrollDownIndicator({ targetId, text = "Ver más" }) {
    return (
        <a
            href={`#${targetId}`}
            className="my-4 flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
            aria-label="Scroll to next section"
        >
            <span className="text-sm font-medium">{text}</span>
            <FaChevronDown className="text-2xl animate-bounce" />
        </a>
    );
}
