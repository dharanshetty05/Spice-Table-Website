"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#0d0d0d] text-gray-900 dark:text-gray-100 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-red-600">About Us</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            At <strong>The Spice Table</strong>, we bring the vibrant flavors of
            India to your table with a modern twist. Every dish is crafted using
            fresh ingredients, authentic spices, and a touch of innovation.
            Whether it’s dine-in, takeaway, or online delivery, we aim to make
            every meal a memorable experience.
          </p>
          <p className="mt-6 text-gray-700 dark:text-gray-400">
            Our chefs blend tradition and creativity to offer a truly unique
            dining journey. Come, savor the spice of life.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about.jpg"
            alt="About The Spice Table"
            className="rounded-2xl shadow-2xl w-full md:w-4/5 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
