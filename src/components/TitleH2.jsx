import React from "react";
import PropTypes from "prop-types";

TitleH2.propTypes = {
    children: PropTypes.node.isRequired,
};

export default function TitleH2( { children } ) {
    return (
        <h2 className="text-4xl font-extrabold text-center mb-14 text-zinc-900 dark:text-zinc-100 tracking-tight">{children}</h2>
    );
}