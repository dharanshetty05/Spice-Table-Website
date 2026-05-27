"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Flame,
  Leaf,
  ShoppingBag,
  Sparkles,
  Clock3,
} from "lucide-react";

export default function Menu() {
  const categories = [
    "All",
    "Starters",
    "Main Course",
    "Sides",
    "Desserts",
  ];

  const allMenuItems = [
    {
      name: "Butter Chicken",
      price: "₹320",
      desc: "Slow-cooked creamy tomato curry with smoky tandoori chicken.",
      type: "Main Course",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1200&auto=format&fit=crop",
      badge: "Bestseller",
      spicy: true,
      featured: true,
    },
    {
      name: "Paneer Tikka",
      price: "₹280",
      desc: "Char-grilled cottage cheese infused with royal Indian spices.",
      type: "Starters",
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop",
      badge: "Chef Special",
      veg: true,
    },
    {
      name: "Veg Biryani",
      price: "₹250",
      desc: "Layered saffron rice with aromatic vegetables and herbs.",
      type: "Main Course",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop",
      badge: "Most Ordered",
      veg: true,
    },
    {
      name: "Tandoori Roti",
      price: "₹40",
      desc: "Freshly baked whole wheat flatbread from the clay oven.",
      type: "Sides",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
      badge: "Fresh",
    },
    {
      name: "Gulab Jamun",
      price: "₹120",
      desc: "Soft milk dumplings soaked in warm cardamom sugar syrup.",
      type: "Desserts",
      image:
        "https://images.unsplash.com/photo-1605197161470-5d4d0e5b1e9f?q=80&w=1200&auto=format&fit=crop",
      badge: "Customer Favorite",
    },
    {
      name: "Masala Papad",
      price: "₹60",
      desc: "Crispy roasted papad topped with spicy onion-tomato salsa.",
      type: "Starters",
      image:
        "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1200&auto=format&fit=crop",
      badge: "Classic",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu =
    activeCategory === "All"
      ? allMenuItems
      : allMenuItems.filter((item) => item.type === activeCategory);

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#0b0b0b] py-24 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_30%)]" />
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-red-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gray-300">
              Signature Selection
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Crafted To Make You
            <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
              {" "}
              Crave Every Bite
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
            Authentic Indian flavors elevated with premium ingredients,
            slow-cooked spices, and unforgettable presentation.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            {
              icon: Star,
              title: "4.9 Rating",
              subtitle: "Loved by foodies",
            },
            {
              icon: ShoppingBag,
              title: "10k+ Orders",
              subtitle: "Served fresh daily",
            },
            {
              icon: Leaf,
              title: "Fresh Ingredients",
              subtitle: "Prepared every day",
            },
            {
              icon: Clock3,
              title: "Fast Delivery",
              subtitle: "Hot & delicious",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
            >
              <item.icon className="mb-4 h-5 w-5 text-red-400" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{item.subtitle}</p>
            </div>
          ))}
        </motion.div>

        {/* Categories */}
        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 md:text-base ${
                activeCategory === cat
                  ? "border-red-500 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-[0_10px_40px_rgba(239,68,68,0.35)]"
                  : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-red-500/40 hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Card */}
        {activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative mb-16 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[340px] overflow-hidden lg:h-full">
                <img
                  src={allMenuItems[0].image}
                  alt={allMenuItems[0].name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-red-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                    Chef’s Signature
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="mb-4 flex items-center gap-2 text-red-400">
                  <Flame className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.25em]">
                    Most Loved Dish
                  </span>
                </div>

                <h3 className="text-4xl font-bold">
                  Butter Chicken Royale
                </h3>

                <p className="mt-5 max-w-xl text-gray-300">
                  Creamy tomato gravy, smoky tandoori chicken, slow-roasted
                  spices, and buttery richness that keeps guests coming back.
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Starting From</p>
                    <h4 className="text-3xl font-bold text-red-400">₹320</h4>
                  </div>

                  <button className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-7 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(239,68,68,0.35)] transition-all duration-300 hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Menu Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredMenu.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-xl ${
                  item.featured ? "xl:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      item.featured ? "h-[420px]" : "h-[280px]"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Badge */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-xl">
                      {item.badge}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 font-bold text-black shadow-xl">
                    {item.price}
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute bottom-5 left-5 right-5 flex translate-y-10 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg">
                      Order Now
                    </button>

                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white backdrop-blur-xl">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      4.9
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    {item.spicy && (
                      <span className="flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-300">
                        <Flame className="h-3 w-3" />
                        Spicy
                      </span>
                    )}

                    {item.veg && (
                      <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
                        <Leaf className="h-3 w-3" />
                        Fresh
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-red-400">
                        {item.name}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 text-center backdrop-blur-xl md:p-12"
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Hungry Yet?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Experience rich Indian flavors crafted fresh by our chefs and
            delivered straight to your table.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(239,68,68,0.35)] transition-all duration-300 hover:scale-105">
              Order Online
            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.06] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/[0.1]">
              View Full Menu
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}