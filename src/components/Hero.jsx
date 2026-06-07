import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import SocialIcon from "./SocialIcon";
import ScrollDownIndicator from "./ScrollDownIndicator";

import { socialLinks } from "../constants/socialLinks";

export default function Hero() {

    const [descriptionExpanded, setDescriptionExpanded] = useState(false);

    return (
        <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
            <div className="mx-auto max-w-4xl text-center">
                {/* About Section */}
                <div className="flex items-center justify-center gap-8 flex-wrap">
                    {/* Image */}
                    <div className="rounded-full w-[150px] h-[150px] overflow-hidden">
                        <img
                            src="Foto 2025.jpeg"
                            alt="José Manuel Redondo"
                            className="rounded-full"
                        />
                    </div>
                    {/* Content */}
                    <div className="max-w-2xl text-center">
                        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                            José Manuel Redondo
                        </h1>

                        <p className="mt-3 text-2xl font-medium text-zinc-700 dark:text-zinc-300">
                            Desarrollador de software
                        </p>

                        {/* Typing Animation */}
                        <div className="mt-4 text-lg font-semibold text-zinc-600 dark:text-zinc-300">
                            <TypeAnimation
                                sequence={[
                                    "Comencé enseñando,", 500,
                                    "Comencé enseñando, aprendí a programar", 500,
                                    "Comencé enseñando, aprendí a programar y ahora hago ambas cosas", 2000,
                                    "Construyo aplicaciones útiles de manera rápid", 250,
                                    "Construyo aplicaciones útiles de manera sólida", 2000
                                ]}
                                speed={60}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto mt-6">
                        <div className={`space-y-4 mx-3 text-lg font-normal text-justify leading-7 text-zinc-800 dark:text-zinc-200 sm:text-lg transition-max-height duration-500 overflow-hidden ${descriptionExpanded ? "max-h-screen" : "max-h-40 md:max-h-32"}`}>
                            <p>¡Hola! Soy José Manuel, desarrollador de software y profesor de programación de niños y adolescentes en Málaga, España.</p>
                            <p>Actualmente, me enfoco en el desarrollo de aplicaciones web fullstack con React y TypeScript, y en la enseñanza de programación a jóvenes con bloques y Python.</p>
                            <p>Mi perfil se complementa con experiencia en desarrollo backend con Java y Spring Boot, bases de datos SQL y NoSQL y el uso de agentes de IA para acelerar procesos de aprendizaje, experimentación y desarrollo.</p>
                            <p>Además, mi nivel C1 de inglés me capacita para dar clases bilingües e integrarme perfectamente en equipos internacionales.</p>
                            <p>Sobre mí:</p>
                            <ul className="list-disc list-inside ml-6">
                                <li>Me apasiona aprender con sentido, emoción y creatividad, y buscar la manera en que otros también lo hagan.</li>
                                <li>Disfruto enfrentarme a desafíos complejos y convertirlos en soluciones simples que hagan la vida más fácil.</li>
                            </ul>
                        </div>
                        <button
                            onClick={() => setDescriptionExpanded(!descriptionExpanded)}
                            className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                            {descriptionExpanded ? "Ver menos" : "Más sobre mí"}
                        </button>
                    </div>

                </div>
                {/* Botones Descargar CV */}
                <div translate="no" className="mt-6 flex gap-4 justify-center">
                    <a
                        href="CV ESP José Manuel Redondo 2025.pdf"
                        download
                        className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Descargar CV (Español)
                    </a>
                    <a
                        href="CV ENG José Manuel Redondo 2025.pdf"
                        download
                        className="inline-block rounded-lg bg-gray-600 px-6 py-3 text-white font-semibold hover:bg-gray-700 transition"
                    >
                        Download CV (English)
                    </a>
                </div>

                {/* Social Icons */}
                <div className="mt-8 flex items-center justify-center gap-10">
                    {socialLinks.map(({ href, label, icon }) => (
                        <SocialIcon
                            key={label}
                            size="text-4xl"
                            href={href}
                            label={label}
                            icon={icon}
                        />
                    ))}
                </div>
                <ScrollDownIndicator targetId="skills" />
            </div>

        </section>
    );
}