import { useState, useEffect } from "react";
import { FaBars, FaXmark, FaRegSun, FaRegMoon } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";
import { socialLinks } from "../constants/socialLinks";

const links = [
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Educación", href: "#education" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
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

                {/* Menú móvil */}
                <button
                    className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label="Abrir menú"
                >
                    {open ? <FaXmark className="h-6 w-6 text-zinc-600 dark:text-zinc-300" /> : <FaBars className="h-6 w-6 text-zinc-600 dark:text-zinc-300" />}
                </button>


                {/* Botones */}
                <div className="flex items-center gap-4">
                    {socialLinks.map(({ href, label, icon }) => (
                        <SocialIcon
                            key={label}
                            size={6}
                            href={href}
                            label={label}
                            icon={icon}
                        />
                    ))}

                    {/* Toggle tema */}
                    <button
                        onClick={onToggleTheme}
                        aria-label="Cambiar tema"
                        className="inline-flex items-center justify-center rounded-full p-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-100 hover:text-blue-800 dark:hover:text-yellow-300 transition-colors duration-300"
                    >
                        {theme === "dark" ? <FaRegSun className="animate-rotate-in animate-duration-normal" /> : <FaRegMoon className="animate-rotate-in duration" />}
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
