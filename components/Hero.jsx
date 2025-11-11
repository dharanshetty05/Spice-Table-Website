"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center bg-[url('/images/hero-bg.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          The Spice Table
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Authentic Flavors. Modern Taste.
        </motion.p>

        <motion.a
          href="https://wa.me/917795116095?text=Hi! I'd like to order from The Spice Table."
          target="_blank"
          className="bg-red-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-red-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Order on WhatsApp
        </motion.a>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 text-white text-3xl animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        ↓
      </motion.div>
    </section>
  );
}
