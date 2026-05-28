"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock3,
  Star,
  MessageCircle,
  Users,
  ShieldCheck,
  Flame,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 MG Road, Bangalore",
    sub: "Luxury Indian dining in the heart of the city",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    sub: "Instant assistance & reservations",
  },
  {
    icon: Clock3,
    title: "Opening Hours",
    value: "11:00 AM – 11:00 PM",
    sub: "Open daily for lunch & dinner",
  },
];

const trustItems = [
  {
    icon: Star,
    text: "4.9 Average Rating",
  },
  {
    icon: Users,
    text: "10k+ Happy Guests",
  },
  {
    icon: Flame,
    text: "Fresh Ingredients Daily",
  },
  {
    icon: ShieldCheck,
    text: "Instant WhatsApp Confirmation",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, guests, time } = formData;

    const msg = `Hi! I'd like to reserve a table at *The Spice Table*.

Name: ${name}
Guests: ${guests}
Preferred Time: ${time}`;

    window.open(
      `https://wa.me/917795116095?text=${encodeURIComponent(msg)}`
    );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0b0b] py-24 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* Top Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-red-300 backdrop-blur-xl">
            <Sparkles size={16} />
            Limited Tables Tonight
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Reserve Your
            <span className="bg-gradient-to-r from-red-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
              {" "}
              Premium Dining{" "}
            </span>
            Experience
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
            From handcrafted Indian flavors to warm luxury ambience, every
            reservation at The Spice Table is designed to feel memorable from
            the very first moment.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-8"
          >
            {/* Floating Badge */}
            <div className="absolute right-6 top-6 hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Fast Reservations
                  </p>
                  <p className="text-xs text-gray-400">
                    Avg response under 5 mins
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white">
                Book Your Table
              </h3>

              <p className="mt-3 max-w-lg text-gray-400">
                Reserve instantly through WhatsApp and receive quick
                confirmation from our team.
              </p>
            </div>

            {/* Trust Pills */}
            <div className="mb-8 flex flex-wrap gap-3">
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur-xl"
                  >
                    <Icon size={16} className="text-red-400" />
                    {item.text}
                  </motion.div>
                );
              })}
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-[28px] border border-white/10 bg-black/30 p-5 backdrop-blur-xl md:p-7"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Your Name</label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-red-400/50 focus:bg-white/10 focus:ring-4 focus:ring-red-500/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">
                    Number of Guests
                  </label>

                  <input
                    type="number"
                    required
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guests: e.target.value,
                      })
                    }
                    placeholder="2 Guests"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-red-400/50 focus:bg-white/10 focus:ring-4 focus:ring-red-500/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-300">
                  Preferred Time
                </label>

                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      time: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-red-400/50 focus:bg-white/10 focus:ring-4 focus:ring-red-500/10"
                />
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative mt-3 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-[0_10px_40px_rgba(239,68,68,0.35)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <MessageCircle size={22} />

                <span className="relative z-10">
                  Reserve on WhatsApp
                </span>

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              <p className="text-center text-sm text-gray-500">
                Instant confirmation • No waiting • Open until 11 PM
              </p>
            </form>

            {/* Bottom Mini Cards */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {contactCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    whileHover={{ y: -5 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-red-500/20 hover:bg-white/10"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-300">
                      <Icon size={22} />
                    </div>

                    <h4 className="font-semibold text-white">
                      {card.title}
                    </h4>

                    <p className="mt-2 text-sm font-medium text-gray-200">
                      {card.value}
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      {card.sub}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            {/* Overlay */}
            <div className="absolute left-5 top-5 z-20 rounded-2xl border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm text-red-300">
                <MapPin size={16} />
                Prime City Location
              </div>

              <p className="mt-2 text-lg font-semibold text-white">
                The Spice Table
              </p>

              <p className="text-sm text-gray-400">
                MG Road, Bangalore
              </p>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-[28px] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4453785330874!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f4a00a7f%3A0x6d1e3e450d6813b9!2sMG%20Road!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
                width="100%"
                height="720"
                allowFullScreen=""
                loading="lazy"
                className="h-[420px] w-full grayscale-[0.15] md:h-[720px]"
              />
            </div>

            {/* Bottom Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-red-300">
                    Fine Dining Experience
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-white">
                    Authentic Indian Flavors
                  </h4>

                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-400">
                    Elegant ambience, handcrafted dishes, and warm hospitality
                    curated for unforgettable evenings.
                  </p>
                </div>

                <div className="hidden rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-4 shadow-2xl md:block">
                  <Star className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}