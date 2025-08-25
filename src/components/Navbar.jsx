import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";

const links = [
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Educación", href: "#education" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Currículum", href: "#resume" },
];

export default function Navbar({ theme, onToggleTheme }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(links[0].href.replace("#", ""));

    // Detectar sección activa con Intersection Observer
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => sections.forEach((sec) => observer.unobserve(sec));
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200/50 dark:border-zinc-800/60 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-zinc-900/70">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                {/* Logo */}
                {/* <a href="#" className="flex items-center gap-2">
                    <span className="inline-block h-6 w-6 rounded-sm bg-rose-500" />
                    <span className="text-lg font-semibold tracking-tight">Lorem</span>
                </a> */}

                {/* Links desktop */}
                <ul className="hidden items-center gap-6 md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className={`text-sm font-medium transition-colors ${active === l.href.replace("#", "")
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                                    }`}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Botones */}
                <div className="flex items-center gap-2">
                    <a
                        href="https://linkedin.com/in/jose-manuel-redondo-conde/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-500"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://github.com/zemanue"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-500"
                    >
                        <Github />
                    </a>
                    <a
                        href="mailto:manureco.97@gmail.com"
                        aria-label="Email"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-500"
                    >
                        <Mail />
                    </a>


                    {/* Toggle tema */}
                    <button
                        onClick={onToggleTheme}
                        aria-label="Cambiar tema"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-500"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    {/* Menú móvil */}
                    <button
                        className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-label="Abrir menú"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Dropdown móvil */}
            {open && (
                <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800">
                    <ul className="mx-auto max-w-6xl px-4 py-3 space-y-2">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    className={`block rounded-md px-3 py-2 text-sm font-medium ${active === l.href.replace("#", "")
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                        }`}
                                    onClick={() => setOpen(false)}
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
