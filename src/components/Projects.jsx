import TitleH2 from "./TitleH2";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt, FaSearchPlus } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import React, { useState } from "react";
import PropTypes from "prop-types";
import ProjectImageModal from "./ProjectImageModal";
import { projects } from "../constants/projects";

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        tags: PropTypes.string.isRequired,
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
            mathEdu: "text-white bg-[#308479] hover:bg-[#056a60] border-0",
            nintendo: "bg-red-600 hover:bg-red-700 text-white border-red-600",
        };
        return styles[color] || styles.github;
    };

    const getLinkIcon = (color) => {
        if (color === "github") return <FaGithub className="inline mr-2 mb-1" />;
        if (color === "nintendo") return <BsNintendoSwitch className="inline mr-2 mb-1" />;
        return <FaExternalLinkAlt className="inline mr-2 mb-1" />;
    };

    return (
        <div
            key={project.title}
            className="flex flex-col gap-4 element-to-reveal rounded-xl sm:rounded-2xl text-zinc-900 dark:text-zinc-100 bg-white/80 dark:bg-zinc-900/80 backdrop-blur p-4 sm:p-6 border border-zinc-200 dark:border-zinc-800 shadow-xs shadow-zinc-300 dark:shadow-none transition-all duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-zinc-500/25 hover:border-zinc-700/25 dark:hover:border-zinc-300/25"
        >
            {/* Project Title */}
            <h3 className="mB-4 text-center text-xl sm:text-2xl font-bold tracking-tight leading-snug text-zinc-900 dark:text-zinc-100">
                {project.title}
            </h3>

            {/* Image with Overlay */}
            <div
                className="group relative cursor-pointer overflow-hidden rounded-xl"
                onClick={() => onImageClick(project.images, 0)}
            >
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <FaSearchPlus className="text-3xl mb-2" />
                    <span className="text-base font-semibold">Ver galería</span>
                    {project.images.length > 1 && (
                        <span className="text-sm mt-1 text-zinc-300">
                            {project.images.length} fotos
                        </span>
                    )}
                </div>
                {/* Image number badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1 group-hover:opacity-0 transition-opacity">
                    <FaSearchPlus className="text-sm" />
                    {project.images.length > 1 && (
                        <span>{project.images.length}</span>
                    )}
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 shadow-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.description}
            </p>

            {/* Skills */}
            <div translate="no" className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                    <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-700/40"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-2">
                {project.links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-fit inline-flex items-center gap-1.5 border rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${getLinkStyles(link.color)}`}
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
        <section id="projects" className="py-16 px-4 bg-gradient-to-b from-white via-zinc-200 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
            <TitleH2>Proyectos</TitleH2>
            <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
