import TitleH2 from "./TitleH2";
import { FaGithub } from "react-icons/fa6";
import React, { useState } from "react";
import ProjectImageModal from "./ProjectImageModal";
import { projects } from "../constants/projects";

function ProjectCard({ project, onImageClick }) {
    return (
        <div key={project.title} className="flex flex-col gap-4 border rounded-lg text-zinc-900 dark:text-zinc-100 bg-gray-100 dark:bg-zinc-800/80 shadow-2xl p-7 border-zinc-200 dark:border-zinc-700">
            <h3 className="mt-4 text-center text-2xl font-bold rounded-lg">{project.title}</h3>
            <img
                src={project.images[0]}
                alt={project.title}
                className="h-48 w-full rounded-md object-cover hover:scale-112 transition-transform duration-300 cursor-pointer"
                onClick={() => onImageClick(project.images, 0)}
            />
            {/* Tag */}
            <p className={`inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full text-white shadow w-fit bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700`}>
                {project.tag}
            </p>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{project.description}</p>
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill) => (
                    <span key={skill} className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {skill}
                    </span>
                ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-fit mt-4 inline-block border rounded-md bg-transparent px-4 py-2 text-zinc-900 hover:bg-zinc-200 dark:text-zinc-100 hover:dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600 transition-colors duration-300 font-medium">
                <FaGithub className="inline mr-2 mb-1" /> Ver en GitHub
            </a>
        </div>
    );
}

export default function Projects() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);

    const handleImageClick = (images, index) => {
        setModalImages(images);
        setModalIndex(index);
        setModalOpen(true);
    };
    const handleClose = () => setModalOpen(false);
    const handlePrev = () => setModalIndex((i) => (i > 0 ? i - 1 : i));
    const handleNext = () => setModalIndex((i) => (i < modalImages.length - 1 ? i + 1 : i));

    return (
        <section id="projects" className="max-w-7xl mx-auto py-16 px-4">
            <TitleH2>Proyectos</TitleH2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} onImageClick={handleImageClick} />
                ))}
            </div>
            {modalOpen && (
                <ProjectImageModal
                    images={modalImages}
                    currentIndex={modalIndex}
                    onClose={handleClose}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            )}
        </section>
    );
}
