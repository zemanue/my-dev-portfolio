import { TypeAnimation } from "react-type-animation";

import SocialIcon from "./SocialIcon";

import { socialLinks } from "../constants/socialLinks";

export default function Hero() {

    return (
        <section
            id="about"
            className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-4"
        >
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
                    <div>
                        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                            José Manuel Redondo
                        </h1>

                        {/* Typing Animation */}
                        <div className="mt-4 text-xl font-semibold text-zinc-600 dark:text-zinc-300">
                            <TypeAnimation
                                sequence={[
                                    "De Maestro a Desarrollador de Aplicaciones", 2000,
                                    "Entusiasta de la enseñanza y la tecnología", 2000
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                </div>
                {/* Botones Descargar CV */}
                <div className="mt-6 flex gap-4 justify-center">
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
                            size={9}
                            href={href}
                            label={label}
                            icon={icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}