"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const allMenuItems = [
    { name: "Butter Chicken", price: "₹320", desc: "Creamy tomato curry with tender chicken.", type: "Main Course" },
    { name: "Paneer Tikka", price: "₹280", desc: "Char-grilled cottage cheese in spices.", type: "Starters" },
    { name: "Veg Biryani", price: "₹250", desc: "Fragrant rice with vegetables & saffron.", type: "Main Course" },
    { name: "Tandoori Roti", price: "₹40", desc: "Classic Indian flatbread.", type: "Sides" },
    { name: "Gulab Jamun", price: "₹120", desc: "Soft milk dumplings in sugar syrup.", type: "Desserts" },
    { name: "Masala Papad", price: "₹60", desc: "Crispy papad topped with tangy salad.", type: "Starters" },
  ];

  const categories = ["All", "Starters", "Main Course", "Sides", "Desserts"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu =
    activeCategory === "All"
      ? allMenuItems
      : allMenuItems.filter((item) => item.type === activeCategory);

  return (
    <section
      id="menu"
      className="py-20 bg-gray-50 dark:bg-[#0d0d0d] text-center dark:text-gray-100 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-red-600">Our Menu</h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border backdrop-blur-md transition-all duration-300 text-sm md:text-base
              ${
                activeCategory === cat
                  ? "bg-red-600 text-white border-red-600 shadow-lg"
                  : "bg-white/10 dark:bg-white/5 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-red-600 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AnimatePresence mode="wait">
          {filteredMenu.map((item, i) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{item.desc}</p>
              <p className="text-red-600 font-bold">{item.price}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
