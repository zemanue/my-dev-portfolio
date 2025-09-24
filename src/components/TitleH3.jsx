import React from "react";
import PropTypes from "prop-types";

TitleH3.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
};

export default function TitleH3({ children, color }) {
    return (
        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 text-${color}-700 dark:text-${color}-300`}>
            <span className={`inline-block w-2 h-6 bg-${color}-500 dark:bg-${color}-400 rounded-full mr-2`} />
            {children}
        </h3>
    )
}
