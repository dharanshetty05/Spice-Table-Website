"use client";

import { motion } from "framer-motion";
import {
  Star,
  Clock3,
  Flame,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
          }}
        />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* Ambient Glow */}
      <div className="absolute top-[-120px] right-[-80px] h-[320px] w-[320px] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-80px] h-[280px] w-[280px] rounded-full bg-red-600/20 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-16 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Left Content */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl"
          >
            <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
            <span className="text-sm font-medium tracking-wide text-white/90">
              Rated 4.9 by 2,000+ food lovers
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="max-w-xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            Indian flavors that feel{" "}
            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 bg-clip-text text-transparent">
              unforgettable
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            Crafted with authentic spices, slow-cooked recipes, and a modern
            dining experience designed to satisfy every craving from the very
            first bite.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <motion.a
              href="https://wa.me/917795116095?text=Hi! I'd like to order from The Spice Table."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(255,80,0,0.35)] transition-all duration-300 hover:shadow-[0_15px_50px_rgba(255,80,0,0.55)]"
            >
              Order on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#menu"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              Explore Menu
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/65"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-orange-400" />
              <span>30 min delivery</span>
            </div>

            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-400" />
              <span>Freshly prepared daily</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
              <span>Authentic premium recipes</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Cards / Right Side */}
        <motion.div
          className="relative mt-16 hidden h-[520px] w-full max-w-xl lg:block"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Featured Dish Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-10 w-[340px] rounded-[32px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/hero-bg.png"
                alt="Featured Dish"
                className="h-[240px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Butter Chicken Deluxe
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Slow-cooked richness with signature spices
                </p>
              </div>

              <div className="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-300">
                Popular
              </div>
            </div>
          </motion.div>

          {/* Floating Rating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-24 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-orange-500/20 p-3">
                <Star className="h-5 w-5 fill-orange-400 text-orange-400" />
              </div>

              <div>
                <p className="text-lg font-bold text-white">4.9 Rating</p>
                <p className="text-sm text-white/60">
                  Loved by repeat customers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Delivery Card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-12 left-16 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-red-500/20 p-3">
                <Clock3 className="h-5 w-5 text-red-300" />
              </div>

              <div>
                <p className="text-lg font-bold text-white">
                  Fast Delivery
                </p>
                <p className="text-sm text-white/60">
                  Hot meals at your doorstep
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1.2,
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/20 p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-orange-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}