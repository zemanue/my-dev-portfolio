import React from "react";
import { TypeAnimation } from "react-type-animation";

import SocialIcon from "./SocialIcon";
import ScrollDownIndicator from "./ScrollDownIndicator";

import { socialLinks } from "../constants/socialLinks";

export default function Hero() {

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

                        <p className="mt-3 text-xl font-medium text-zinc-700 dark:text-zinc-300">
                            Desarrollador de software y profesor de programación
                        </p>

                        {/* Typing Animation */}
                        <div className="mt-4 text-lg font-semibold text-zinc-600 dark:text-zinc-300">
                            <TypeAnimation
                                sequence={[
                                    "Comencé enseñando,", 500,
                                    "Comencé enseñando, aprendí a programar", 500,
                                    "Comencé enseñando, aprendí a programar y ahora hago ambas cosas", 2000,
                                    "Construyo aplicaciones útiles de manera rápid", 250,
                                    "Construyo aplicaciones útiles de manera sólida", 2000,
                                    "Si no es fácil de entender, no está bien hecho", 2000
                                ]}
                                speed={60}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto space-y-4 mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg text-justify">
                        <p>Soy un desarrollador de software y profesor de programación para niños y adolescentes de Málaga, España.</p>
                        <p>Actualmente estoy enfocado en desarrollo web fullstack con React y TypeScript.</p>
                        <p>Mi perfil se complementa con el desarrollo backend con Java y Spring Boot, la enseñanza de programación con Python, acceso a bases de datos SQL y NoSQL, control de versiones con Git y desarrollo con agentes de IA como GitHub Copilot y Claude Code.</p>
                        <p>Además, mi nivel C1 de inglés me capacita para dar clases bilingües e integrarme perfectamente en equipos internacionales.</p>
                        <p>Me apasiona aprender con sentido, emoción y creatividad, y buscar la manera en que otros también lo hagan.</p>
                        <p>Disfruto enfrentarme a desafíos complejos y convertirlos en soluciones simples que hagan la vida más fácil.</p>
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