"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ChefHat,
  Leaf,
  Clock3,
  Star,
} from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Expert Chefs",
    desc: "Crafted by chefs blending timeless Indian flavors with modern finesse.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "Locally sourced produce, premium spices, and ingredients prepared daily.",
  },
  {
    icon: Sparkles,
    title: "Authentic Recipes",
    desc: "Traditional techniques elevated through thoughtful presentation and balance.",
  },
  {
    icon: Clock3,
    title: "Fast Delivery",
    desc: "Carefully packed and delivered fresh without compromising quality.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] py-24 md:py-32 px-6 md:px-20 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,120,60,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,180,80,0.08),transparent_35%)]" />

      <div className="absolute top-24 left-10 w-64 h-64 bg-orange-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10"
        >
          {/* Section Label */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <p className="text-sm tracking-[0.2em] uppercase text-orange-200">
              Our Story
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-xl"
          >
            Modern Indian dining,
            <span className="block text-orange-300">
              rooted in authenticity.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-7 text-base sm:text-lg leading-8 text-neutral-300 max-w-xl"
          >
            At <span className="text-white font-semibold">The Spice Table</span>,
            every dish is designed to feel familiar yet unforgettable. From
            hand-ground spices to carefully balanced flavors, we bring together
            tradition, warmth, and modern presentation in every experience.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-5 text-base sm:text-lg leading-8 text-neutral-400 max-w-xl"
          >
            Whether you're dining in with family or ordering a late-night meal,
            our focus stays the same: honest ingredients, rich flavors, and food
            that feels crafted with care.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-wrap gap-4"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-5 py-4 min-w-[150px] shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-300 fill-orange-300" />
                <p className="text-2xl font-bold">4.9</p>
              </div>
              <p className="text-sm text-neutral-400 mt-1">
                Rated by food lovers
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-5 py-4 min-w-[150px] shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm text-neutral-400 mt-1">
                Signature dishes
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-5 py-4 min-w-[150px] shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-sm text-neutral-400 mt-1">
                Happy customers
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="grid sm:grid-cols-2 gap-4 mt-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:border-orange-300/20 hover:bg-white/[0.06]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-400/10 to-transparent" />

                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-orange-400/10 border border-orange-300/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-orange-300" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-neutral-400">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Visual Composition */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[560px]">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <img
                src="/images/about.jpg"
                alt="The Spice Table restaurant interior and food"
                className="w-full h-[620px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-5 shadow-2xl"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-orange-200 mb-2">
                  The Spice Table
                </p>

                <h3 className="text-2xl font-semibold leading-snug">
                  Crafted flavors.
                  <br />
                  Warm hospitality.
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  An immersive dining experience inspired by India’s rich culinary heritage.
                </p>
              </motion.div>
            </div>

            {/* Decorative Floating Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              viewport={{ once: true }}
              className="hidden md:block absolute -bottom-10 -left-10 w-44 h-56 rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <img
                src="/images/food-detail.jpg"
                alt="Signature Indian dish"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}