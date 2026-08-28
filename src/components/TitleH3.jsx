import React from "react";
import PropTypes from "prop-types";

TitleH3.propTypes = {
    children: PropTypes.node.isRequired,
};

export default function TitleH3({ children }) {
    return (
        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 text-zinc-900 dark:text-zinc-100 element-to-reveal`}>
            {children}
        </h3>
    )
}
