import React from "react";

const SocialIcon = ({ size, label, href, icon }) => (
    <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        aria-label={label}
        className={`inline-flex h-${size} w-${size} items-center justify-center rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition`}
    >
        {React.cloneElement(icon, {
            className: `h-6 w-6 text-zinc-700 dark:text-zinc-100`
        })}
    </a>
);

export default SocialIcon;