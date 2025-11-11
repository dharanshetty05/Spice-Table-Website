"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black dark:bg-[#0a0a0a] text-gray-400 py-10 mt-20 border-t border-gray-800">
      <motion.div
        className="container mx-auto text-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Logo / Title */}
        <h3 className="text-2xl font-semibold text-white">
          The Spice Table
        </h3>
        <p className="max-w-lg mx-auto text-sm text-gray-500">
          Authentic flavors. Modern dining experience. Visit us and make every meal memorable.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <Link href="#about" className="hover:text-red-400 transition">About</Link>
          <Link href="#menu" className="hover:text-red-400 transition">Menu</Link>
          <Link href="#gallery" className="hover:text-red-400 transition">Gallery</Link>
          <Link href="#contact" className="hover:text-red-400 transition">Contact</Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6 w-3/4 mx-auto"></div>

        {/* Bottom Line */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} The Spice Table | Designed by{" "}
          <span className="text-red-500 font-semibold">Dharan Shetty</span>
        </p>
      </motion.div>
    </footer>
  );
}
