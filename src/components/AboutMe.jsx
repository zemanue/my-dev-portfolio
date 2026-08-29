import React, { useState } from "react";
import TitleH2 from "./TitleH2";
import { FiCode, FiBookOpen, FiGlobe, FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AboutMe() {
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);

    return (
        <section id="about-me" className="py-16 px-4 bg-gradient-to-b from-white via-zinc-200 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
            <TitleH2>Sobre mí</TitleH2>

            <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8 bg-white dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                    {/* Contenedor del texto con máscara de gradiente cuando está colapsado */}
                    <div className="relative">
                        <div
                            className={`space-y-4 text-zinc-800 dark:text-zinc-300 text-base sm:text-lg leading-relaxed text-justify transition-all duration-500 ease-in-out overflow-hidden ${descriptionExpanded
                                ? "max-h-[1000px] opacity-100"
                                : "max-h-90 md:max-h-68 opacity-90 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
                                }`}
                        >
                            <p>
                                ¡Hola! Soy <span className="font-bold text-zinc-900 dark:text-white">José Manuel</span>, <span className="font-bold text-zinc-900 dark:text-white">desarrollador</span> de software y <span className="font-bold text-zinc-900 dark:text-white">profesor de programación</span> de niños y adolescentes en Málaga, España.
                            </p>
                            <p>
                                Actualmente, me enfoco en el desarrollo de aplicaciones web fullstack con <span className="text-blue-600 dark:text-blue-400 font-medium">React y TypeScript</span>, y en la enseñanza de programación a jóvenes con bloques y Python.
                            </p>
                            <p>
                                Mi perfil se complementa con experiencia en desarrollo backend con <span className="text-emerald-600 dark:text-emerald-400 font-medium">Java y Spring Boot</span>, <span className="text-amber-600 dark:text-amber-400 font-medium">bases de datos SQL</span> y el uso de <span className="text-fuchsia-600 dark:text-fuchsia-400 font-medium">agentes de IA</span> para acelerar procesos de aprendizaje, experimentación y desarrollo.
                            </p>
                            <p>
                                Además, mi nivel <span className="font-bold text-zinc-900 dark:text-white">C1 de inglés</span> me capacita para dar clases bilingües e integrarme perfectamente en equipos internacionales.
                            </p>

                            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/60 mt-4">
                                <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Lo que me mueve:</p>
                                <ul className="space-y-2 list-none pl-0">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✦</span>
                                        <span>Me apasiona aprender con sentido, emoción y creatividad, y buscar la manera en que otros también lo hagan.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1">✦</span>
                                        <span>Disfruto enfrentarme a desafíos complejos y convertirlos en soluciones simples que hagan la vida más fácil.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Botón de expansión */}
                        <div className="mt-4 pt-2">
                            <button
                                onClick={() => setDescriptionExpanded(!descriptionExpanded)}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none group"
                            >
                                <span>{descriptionExpanded ? "Ver menos" : "Más sobre mí"}</span>
                                {descriptionExpanded ? (
                                    <FiChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                                ) : (
                                    <FiChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Columna lateral: Highlights tipo Bento */}
                <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

                    {/* Card 1: Stack & Dev */}
                    <div className="bg-white dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                                <FiCode className="w-5 h-5" />
                            </div>
                            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Desarrollo Fullstack</h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {["React", "TypeScript", "Java", "Spring Boot", "SQL", "AI Agents"].map((tech) => (
                                <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Docencia */}
                    <div className="bg-white dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                                <FiBookOpen className="w-5 h-5" />
                            </div>
                            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Educación IT</h4>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Formando a las nuevas generaciones en Málaga mediante lógica con bloques y Python.
                        </p>
                    </div>

                    {/* Card 3: Idiomas / Ubicación */}
                    <div className="bg-white dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                                <FiGlobe className="w-5 h-5" />
                            </div>
                            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Internacional</h4>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Inglés C1 Advanced. Preparado para equipos globales y docencia bilingüe.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}