import { FaArrowRight, FaArrowLeft, FaXmark } from "react-icons/fa6";

export default function ProjectImageModal({ images, currentIndex, onClose, onPrev, onNext }) {
    if (!images || images.length === 0) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
            <div
                className="relative max-w-3xl w-full flex flex-col items-center"
                onClick={e => e.stopPropagation()}
            >
                {/* Cerrar */}
                <button
                    className="absolute -top-20 -right-30 text-white text-2xl bg-black/40 rounded-full p-2 hover:bg-black/70 transition z-10"
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    <FaXmark />
                </button>
                {/* Contenedor fijo para imagen y navegación */}
                <div className="relative flex items-center justify-center w-full" style={{ minHeight: '60vh', minWidth: '320px' }}>
                    {/* Botón anterior */}
                    <button
                        className="absolute -left-30 top-1/2 -translate-y-1/2 text-white text-2xl px-4 py-2 bg-black/40 rounded-full hover:bg-black/70 transition disabled:opacity-30 z-10"
                        onClick={onPrev}
                        disabled={currentIndex === 0}
                        aria-label="Anterior"
                        style={{ marginLeft: '8px' }}
                    >
                        <FaArrowLeft />
                    </button>
                    {/* Imagen */}
                    <img
                        src={images[currentIndex]}
                        alt={`Imagen ${currentIndex + 1}`}
                        className="rounded-lg shadow-lg max-h-[60vh] object-contain bg-white dark:bg-zinc-900 mx-auto transition-opacity duration-500 opacity-100"
                        style={{ maxWidth: '80vw' }}
                    />
                    {/* Botón siguiente */}
                    <button
                        className="absolute -right-30 top-1/2 -translate-y-1/2 text-white text-2xl px-4 py-2 bg-black/40 rounded-full hover:bg-black/70 transition disabled:opacity-30 z-10"
                        onClick={onNext}
                        disabled={currentIndex === images.length - 1}
                        aria-label="Siguiente"
                        style={{ marginRight: '8px' }}
                    >
                        <FaArrowRight />
                    </button>
                </div>
                {/* Indicador de imagen */}
                <div className="flex justify-center items-center w-full mt-4">
                    <span className="text-white text-sm">
                        {currentIndex + 1} / {images.length}
                    </span>
                </div>
            </div>
        </div>
    );
}
