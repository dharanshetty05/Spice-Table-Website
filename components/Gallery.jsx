"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative py-20 bg-white dark:bg-[#0d0d0d] text-center dark:text-gray-100 px-6 md:px-20 overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/40 dark:from-red-950/20 to-transparent pointer-events-none"></div>

      <h2 className="text-4xl font-bold mb-10 text-red-600 relative z-10">
        Gallery
      </h2>

      {/* Grid of images */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-lg font-medium tracking-wide">
              View Photo
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Enlarged"
              className="max-w-[90%] max-h-[80vh] rounded-2xl shadow-2xl border border-white/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
