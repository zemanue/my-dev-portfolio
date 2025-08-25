import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
];

export default function Navbar({ theme, onToggleTheme }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200/50 dark:border-zinc-800/60 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-zinc-900/70">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                {/* Logo (placeholder) */}
                <a href="#" className="flex items-center gap-2">
                    <span className="inline-block h-6 w-6 rounded-sm bg-rose-500" />
                    <span className="text-lg font-semibold tracking-tight">Lorem</span>
                </a>

                {/* Links (desktop) */}
                <ul className="hidden items-center gap-6 md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    {/* Toggle tema */}
                    <button
                        onClick={onToggleTheme}
                        aria-label="Cambiar tema"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition"
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
                                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
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
