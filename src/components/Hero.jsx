import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import SocialIcon from "./SocialIcon";
import ScrollDownIndicator from "./ScrollDownIndicator";

import { socialLinks } from "../constants/socialLinks";

export default function Hero() {
    return (
        <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 bg-gradient-to-b from-white via-zinc-200 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
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
                <ScrollDownIndicator targetId="about-me" />
            </div>

        </section>
    );
}