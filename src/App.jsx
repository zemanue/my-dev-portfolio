import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

export default function App() {
  // Tema inicial desde localStorage o preferencia del sistema
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-500 ease-in-out">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Education />
        <WorkExperience />
        <Projects />
      </main>
    </div>
  );
}
