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
    desc: "Timeless Indian flavors with modern finesse.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "Locally sourced produce and premium spices.",
  },
  {
    icon: Sparkles,
    title: "Authentic Recipes",
    desc: "Traditional techniques with elevated presentation.",
  },
  {
    icon: Clock3,
    title: "Fast Delivery",
    desc: "Freshly packed meals delivered with care.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] py-16 md:py-20 px-5 md:px-12 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,120,60,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,180,80,0.06),transparent_35%)]" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10"
        >
          {/* Label */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <p className="text-[11px] tracking-[0.2em] uppercase text-orange-200">
              Our Story
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-lg"
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
            className="mt-5 text-sm sm:text-base leading-7 text-neutral-300 max-w-lg"
          >
            At <span className="text-white font-semibold">The Spice Table</span>,
            every dish blends tradition, warmth, and modern presentation to
            create memorable dining experiences.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-4 text-sm sm:text-base leading-7 text-neutral-400 max-w-lg"
          >
            From hand-ground spices to carefully balanced flavors, everything is
            crafted with care using honest ingredients and timeless recipes.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-7 flex flex-wrap gap-3"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 min-w-[120px]">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-300 fill-orange-300" />
                <p className="text-xl font-bold">4.9</p>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Food lovers
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 min-w-[120px]">
              <p className="text-xl font-bold">15+</p>
              <p className="text-xs text-neutral-400 mt-1">
                Signature dishes
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 min-w-[120px]">
              <p className="text-xl font-bold">10k+</p>
              <p className="text-xs text-neutral-400 mt-1">
                Happy customers
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="grid sm:grid-cols-2 gap-3 mt-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:border-orange-300/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-300/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-orange-300" />
                  </div>

                  <h3 className="text-sm font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-neutral-400">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[460px]">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src="/images/about.jpg"
                alt="The Spice Table restaurant interior and food"
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-5 left-5 right-5 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-orange-200 mb-2">
                  The Spice Table
                </p>

                <h3 className="text-xl font-semibold leading-snug">
                  Crafted flavors.
                  <br />
                  Warm hospitality.
                </h3>

                <p className="mt-2 text-xs leading-5 text-neutral-300">
                  Inspired by India’s rich culinary heritage.
                </p>
              </motion.div>
            </div>

            {/* Floating Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:block absolute -bottom-6 -left-6 w-32 h-40 rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src="/images/food-detail.jpg"
                alt="Signature Indian dish"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}