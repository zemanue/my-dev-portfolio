import TitleH2 from "./TitleH2";
import { FaGithub } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import React, { useState } from "react";
import PropTypes from "prop-types";
import ProjectImageModal from "./ProjectImageModal";
import { projects } from "../constants/projects";

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        tag: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        links: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        })).isRequired,
    }).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

function ProjectCard({ project, onImageClick }) {

    const getLinkStyles = (color) => {
        const styles = {
            github: "bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-600",
            nintendo: "bg-red-600 hover:bg-red-700 text-white border-red-600",
        };
        return styles[color] || styles.github;
    };

    const getLinkIcon = (color) => {
        if (color === "github") return <FaGithub className="inline mr-2 mb-1" />;
        if (color === "nintendo") return <BsNintendoSwitch className="inline mr-2 mb-1" />;
        return null;
    };
    
    return (
        <div key={project.title} className="flex flex-col gap-4 border rounded-lg text-zinc-900 dark:text-zinc-100 bg-gray-100 dark:bg-zinc-800/80 shadow-2xl p-7 border-zinc-200 dark:border-zinc-700 element-to-reveal">
            {/* Project Title */}
            <h3 className="mt-4 text-center text-2xl font-bold rounded-lg">{project.title}</h3>
            {/* Image with Overlay */}
            <div
                className="relative group cursor-pointer overflow-hidden rounded-md"
                onClick={() => onImageClick(project.images, 0)}
            >
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <FaSearchPlus className="text-4xl mb-2" />
                    <span className="text-lg font-semibold">Ver galería</span>
                    {project.images.length > 1 && (
                        <span className="text-sm mt-1">
                            {project.images.length} {project.images.length === 1 ? 'foto' : 'fotos'}
                        </span>
                    )}
                </div>
                {/* Badge permanente para móvil (esquina inferior derecha) */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1 sm:opacity-0 sm:group-hover:opacity-0 transition-opacity">
                    <FaSearchPlus className="text-sm" />
                    {project.images.length > 1 && (
                        <span>{project.images.length}</span>
                    )}
                </div>
            </div>
            {/* Tag */}
            <p className={`inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full text-white shadow w-fit bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700`}>
                {project.tag}
            </p>
            {/* Description */}
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{project.description}</p>
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill) => (
                    <span key={skill} className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {skill}
                    </span>
                ))}
            </div>
            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-4">
                {project.links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-fit inline-block border rounded-md px-4 py-2 transition-colors duration-300 font-medium ${getLinkStyles(link.color)}`}
                    >
                        {getLinkIcon(link.color)}
                        {link.text}
                    </a>
                ))}
            </div>
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
