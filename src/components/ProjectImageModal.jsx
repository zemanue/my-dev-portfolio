import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaArrowLeft, FaXmark } from "react-icons/fa6";

export default function ProjectImageModal({ images, currentIndex, onClose, onPrev, onNext }) {
    // Refs y efectos para manejar eventos de teclado, scroll y touch
    const touchStartX = useRef(null);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        // Handler para teclas y scroll
        function handleKeyDown(e) {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        }
        function handleWheel(e) {
            if (e.deltaY > 0) onNext();
            if (e.deltaY < 0) onPrev();
        }
        function handleTouchStart(e) {
            if (e.touches && e.touches.length === 1) {
                touchStartX.current = e.touches[0].clientX;
            }
        }
        function handleTouchEnd(e) {
            if (touchStartX.current !== null && e.changedTouches && e.changedTouches.length === 1) {
                const deltaX = e.changedTouches[0].clientX - touchStartX.current;
                if (deltaX < -50) onNext(); // swipe izquierda a derecha (avanzar)
                if (deltaX > 50) onPrev(); // swipe derecha a izquierda (retroceder)
                touchStartX.current = null;
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
            document.body.classList.remove('overflow-hidden');
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [onClose, onNext, onPrev]);

    if (!images || images.length === 0) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
            <div
                className="relative max-w-3xl w-full flex flex-col items-center"
                onClick={e => e.stopPropagation()}
            >
                {/* Contenedor fijo para imagen y navegación */}
                <div className="relative flex items-center justify-center w-full" style={{ minHeight: '60vh', minWidth: '320px' }}>
                    {/* Botón Cerrar en la esquina superior derecha del contenedor */}
                    <button
                        className="absolute top-0 right-0 text-white text-2xl bg-black/50 rounded-full p-2 hover:bg-black/70 transition z-20 shadow-lg"
                        onClick={onClose}
                        aria-label="Cerrar"
                    >
                        <FaXmark />
                    </button>
                    {/* Botón anterior */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-2xl px-4 py-2 bg-black/50 rounded-full hover:bg-black/70 transition disabled:opacity-30 z-10 shadow-lg"
                        onClick={onPrev}
                        disabled={currentIndex === 0}
                        aria-label="Anterior"
                    >
                        <FaArrowLeft />
                    </button>
                    {/* Imagen */}
                    <img
                        src={images[currentIndex]}
                        alt={`Imagen ${currentIndex + 1}`}
                        className="rounded-lg shadow-lg max-h-[60vh] object-contain bg-white dark:bg-zinc-900 mx-auto"
                        style={{ maxWidth: '80vw' }}
                    />
                    {/* Botón siguiente */}
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-2xl px-4 py-2 bg-black/50 rounded-full hover:bg-black/70 transition disabled:opacity-30 z-10 shadow-lg"
                        onClick={onNext}
                        disabled={currentIndex === images.length - 1}
                        aria-label="Siguiente"
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
