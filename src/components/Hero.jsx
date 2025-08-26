import { Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-4"
        >
            <div className="mx-auto max-w-4xl text-center">
                {/* About Section */}
                <div className="flex items-center justify-center gap-8 flex-wrap">
                    {/* Image */}
                    <div className="rounded-full w-[150px] h-[150px] overflow-hidden">
                        <img
                            src="/public/Foto 2025.jpeg"
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
                {/* Botón Descargar CV */}
                <div className="mt-6">
                    <a
                        href="/public/CV_Edu ESP José Manuel Redondo 2025.pdf"
                        download
                        className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
                    >
                        Descargar CV
                    </a>
                </div>

                {/* Social Icons */}
                <div className="mt-8 flex items-center justify-center gap-5">
                    <a
                        href="https://linkedin.com/in/jose-manuel-redondo-conde/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://github.com/zemanue"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
                    >
                        <Github />
                    </a>
                    <a
                        href="mailto:manureco.97@gmail.com"
                        aria-label="Email"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
                    >
                        <Mail />
                    </a>
                </div>
            </div>
        </section>
    );
}
