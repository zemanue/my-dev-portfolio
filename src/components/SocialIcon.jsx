import React from "react";

const sizeMap = {
    4: "h-4 w-4",
    5: "h-5 w-5",
    6: "h-6 w-6",
    7: "h-7 w-7",
    8: "h-8 w-8",
    9: "h-9 w-9",
    10: "h-10 w-10",
    11: "h-11 w-11",
    12: "h-12 w-12",
};

export default function SocialIcon({ size = 7, label, href, icon }) {
    if (!sizeMap[size]) {
        console.log(`Tamaño inválido para SocialIcon: ${size}. 
            Usa uno de los siguientes tamaños: ${Object.keys(sizeMap).join(", ")}, o configura en SocialIcon.jsx uno nuevo.
            Utilizando valor por defecto 7.`);
        size = 7; // Valor por defecto si el tamaño es inválido
    }

    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            className={`inline-flex items-center justify-center`}
        >
            {React.cloneElement(icon, {
                className: `${sizeMap[size]} text-zinc-700 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300`,
            })}
        </a>
    );
}