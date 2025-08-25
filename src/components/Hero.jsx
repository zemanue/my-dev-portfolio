import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {

    

    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-4"
        >
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                    Your Name
                </h1>
                <p className="mt-4 text-xl font-semibold text-zinc-600 dark:text-zinc-300">
                    I&apos;m a Developer
                </p>

                {/* Social */}
                <div className="mt-8 flex items-center justify-center gap-5">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
                    >
                        <Github />
                    </a>
                    <a
                        href="mailto:youremail@example.com"
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
