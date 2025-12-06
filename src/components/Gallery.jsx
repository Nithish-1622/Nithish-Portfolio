import React from "react";
import { motion } from "framer-motion";

// Dynamically import all images from the achievements folder
const images = import.meta.glob(
  "../assets/achievements/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true, as: "url" }
);
const galleryImages = Object.values(images);

export default function AchievementsGallery() {
  return (
    <div className="py-10 px-2 sm:py-16 sm:px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-gray-50 to-yellow-50 min-h-screen">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 sm:mb-6 tracking-tight">
        Achievements Gallery
      </h2>
      <p className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-16 max-w-3xl mx-auto">
        A curated showcase of my proudest accomplishments. Each image represents
        a meaningful milestone that has shaped my journey.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {galleryImages.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.04,
              boxShadow:
                "0 12px 24px rgba(0, 0, 0, 0.12), 0 4px 6px rgba(0, 0, 0, 0.08)",
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg group bg-white/60 border border-gray-200 hover:border-yellow-400 transition-all duration-400"
          >
            <div className="aspect-square min-h-[120px] sm:min-h-[180px] w-full ">
              <img
                src={src}
                alt={`Achievement ${idx + 1}`}
                className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-400" />
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white/80 text-yellow-800 font-medium px-2 py-0.5 sm:px-4 sm:py-1 rounded-full shadow text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition duration-400">
              Achievement
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
