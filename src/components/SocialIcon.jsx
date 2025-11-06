import React from "react";
import PropTypes from "prop-types";

SocialIcon.propTypes = {
    size: PropTypes.string,
    scale: PropTypes.string,
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
};

export default function SocialIcon({ size = "", scale = "", label, href, icon }) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            className={`inline-flex items-center justify-center ${size} ${scale} text-zinc-700 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300`}
        >
            {icon}
        </a>
    );
}