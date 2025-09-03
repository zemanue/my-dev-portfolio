import TitleH2 from "./TitleH2";

const projects = [
    {
        title: "Proyecto 1",
        description: "Descripción del proyecto 1",
        image: "/proyecto1.jpg",
        link: "https://github.com/zemanue/proyecto1"
    },
    {
        title: "Proyecto 2",
        description: "Descripción del proyecto 2",
        image: "/proyecto2.jpg",
        link: "https://github.com/zemanue/proyecto2"
    },
    {
        title: "Proyecto 3",
        description: "Descripción del proyecto 3",
        image: "/proyecto3.jpg",
        link: "https://github.com/zemanue/proyecto3"
    }
];

function ProjectCard({ project }) {
    return (
        <div key={project.title} className="rounded-lg border text-zinc-900 dark:text-zinc-100  bg-gray-200 dark:bg-zinc-800/80 shadow-2xl p-7 border-zinc-200 dark:border-zinc-700">
            <img src={project.image} alt={project.title} className="h-48 w-full rounded-md object-cover" />
            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Ver proyecto
            </a>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="max-w-7xl mx-auto py-16 px-4">
            <TitleH2>Proyectos</TitleH2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}
