"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, guests, time } = formData;
    const msg = `Hi! I'd like to reserve a table at *The Spice Table*.\n\nName: ${name}\nGuests: ${guests}\nTime: ${time}`;
    window.open(`https://wa.me/917795116095?text=${encodeURIComponent(msg)}`);
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gray-50 dark:bg-[#0d0d0d] text-center text-gray-900 dark:text-gray-100 px-6 md:px-20 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/40 dark:from-red-950/20 to-transparent pointer-events-none"></div>

      <motion.h2
        className="text-4xl font-bold mb-6 text-red-600 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact & Reservations
      </motion.h2>

      <motion.p
        className="text-lg mb-10 text-gray-700 dark:text-gray-300 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We’d love to serve you! Reserve a table or reach out directly below.
      </motion.p>

      {/* Contact Info */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-10 mb-12 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md border border-white/20 w-full md:w-1/3">
          <p className="font-semibold">📍 Address</p>
          <p>123 MG Road, Bangalore, India</p>
        </div>
        <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md border border-white/20 w-full md:w-1/3">
          <p className="font-semibold">📞 Phone</p>
          <p>+91 98765 43210</p>
        </div>
        <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md border border-white/20 w-full md:w-1/3">
          <p className="font-semibold">🕒 Timings</p>
          <p>11:00 AM – 11:00 PM</p>
        </div>
      </motion.div>

      {/* Reservation Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white/70 dark:bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 max-w-lg mx-auto rounded-2xl p-8 text-left relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-center mb-6">
          Reserve a Table 🍽️
        </h3>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Number of Guests"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
            value={formData.guests}
            onChange={(e) =>
              setFormData({ ...formData, guests: e.target.value })
            }
          />
          <input
            type="time"
            placeholder="Time"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            required
            value={formData.time}
            onChange={(e) =>
              setFormData({ ...formData, time: e.target.value })
            }
          />
          <button
            type="submit"
            className="mt-4 w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-all"
          >
            Reserve on WhatsApp
          </button>
        </div>
      </motion.form>

      {/* Google Map */}
      <motion.div
        className="mt-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4453785330874!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f4a00a7f%3A0x6d1e3e450d6813b9!2sMG%20Road!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          className="rounded-2xl shadow-2xl border border-white/20"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </section>
  );
}
