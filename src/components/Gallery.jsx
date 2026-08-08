import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiPlay, HiPause, HiMagnifyingGlassPlus, HiXMark } from "react-icons/hi2";

// Dynamically import all images from the achievements folder
const images = import.meta.glob(
  "../assets/achievements/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true, as: "url" }
);
const galleryImages = Object.values(images);

export default function AchievementsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Autoplay functionality (5 seconds interval)
  useEffect(() => {
    if (!isPlaying || galleryImages.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleSelectThumbnail = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  if (galleryImages.length === 0) return null;

  return (
    <section id="certificates" className="py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white shadow-subtle-pill mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-status-pulse"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
              FEATURED ACHIEVEMENTS & MILESTONES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight">
            Achievements Gallery.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mt-3 font-normal">
            A curated interactive showcase of proud accomplishments, awards, and milestones.
          </p>
        </div>

        {/* Neo-Brutalist Interactive Carousel Stage */}
        <div className="relative bg-white/90 backdrop-blur-xs border-2 border-slate-900 rounded-3xl p-4 sm:p-8 shadow-brutalist overflow-hidden">
          
          {/* Top Carousel Bar: Navigation Counter & Autoplay Controls */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 px-2">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-extrabold text-slate-900">
              <span className="px-3 py-1 rounded-full bg-slate-950 text-white font-mono">
                {String(currentIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
              </span>
              <span className="hidden sm:inline text-slate-500 font-semibold uppercase">
                ACHIEVEMENT STAGE
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 bg-slate-100 font-mono text-xs font-bold text-slate-800 hover:bg-slate-950 hover:text-white transition-all cursor-pointer"
                title={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
              >
                {isPlaying ? <HiPause className="text-sm" /> : <HiPlay className="text-sm" />}
                <span className="hidden sm:inline">{isPlaying ? "PAUSE" : "AUTOPLAY"}</span>
              </button>

              <button
                onClick={() => setLightboxImage(galleryImages[currentIndex])}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-900 bg-slate-950 text-white font-mono text-xs font-bold hover:bg-slate-800 transition-all cursor-pointer"
                title="View Fullscreen"
              >
                <HiMagnifyingGlassPlus className="text-sm" />
                <span className="hidden sm:inline">ZOOM</span>
              </button>
            </div>
          </div>

          {/* Main Carousel Display Box */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-300 flex items-center justify-center group">
            
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 cursor-pointer"
                onClick={() => setLightboxImage(galleryImages[currentIndex])}
              >
                <img
                  src={galleryImages[currentIndex]}
                  alt={`Achievement ${currentIndex + 1}`}
                  className="w-full h-full object-contain drop-shadow-md rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Arrow Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-950 border-2 border-slate-900 shadow-brutalist-sm flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all hover:scale-110 cursor-pointer"
              aria-label="Previous Slide"
            >
              <HiChevronLeft className="text-xl" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-950 border-2 border-slate-900 shadow-brutalist-sm flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all hover:scale-110 cursor-pointer"
              aria-label="Next Slide"
            >
              <HiChevronRight className="text-xl" />
            </button>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-slate-950/90 backdrop-blur-md text-white font-mono text-xs font-bold px-4 py-1.5 rounded-full border border-slate-700 shadow-lg pointer-events-none">
              ✦ CLICK TO ENLARGE PHOTO ✦
            </div>
          </div>

          {/* Thumbnail Ribbon Strip */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {galleryImages.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectThumbnail(idx)}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    idx === currentIndex
                      ? "border-slate-950 shadow-brutalist-sm scale-105 ring-2 ring-slate-950/30"
                      : "border-slate-300 opacity-60 hover:opacity-100 hover:border-slate-600"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {idx === currentIndex && (
                    <div className="absolute inset-0 border-2 border-slate-950 rounded-xl pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in-down">
          <div className="relative max-w-5xl max-h-[90vh] w-full bg-white border-2 border-slate-900 rounded-2xl p-4 shadow-brutalist-lg flex flex-col items-center">
            
            <div className="w-full flex justify-between items-center pb-3 border-b border-slate-200 mb-3 font-mono text-xs font-bold text-slate-900">
              <span>ACHIEVEMENT PREVIEW</span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1 rounded-lg border border-slate-300 hover:bg-slate-950 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <HiXMark className="text-xl" />
              </button>
            </div>

            <div className="w-full max-h-[78vh] flex items-center justify-center overflow-hidden">
              <img
                src={lightboxImage}
                alt="Achievement Fullscreen Preview"
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
