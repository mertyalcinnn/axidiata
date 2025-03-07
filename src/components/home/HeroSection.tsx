"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-screen bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-brown -translate-y-1/4 translate-x-1/4"
      />

      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        {/* Sol Taraf: Metin */}
        <div className="flex flex-col justify-center px-4 sm:px-8 md:px-16 z-10 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-sand tracking-[0.2em]">
              NEW COLLECTION 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown mb-6 md:mb-12 font-serif"
          >
            SYMMETRY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-6"
          >
            <p className="text-sand text-base sm:text-lg md:text-xl font-light leading-relaxed">
              DISCOVER THE ESSENCE OF MODERN LUXURY WITH OUR EXCLUSIVE GEOMETRIC
              JEWELRY COLLECTION
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-full md:max-w-lg">
              Each piece is meticulously crafted to inspire and empower,
              reflecting the inherent beauty and strength within every woman.
              Limited edition designs that speak to the soul.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-4 md:pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
            >
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-brown text-white tracking-wider hover:bg-sand transition-colors text-sm sm:text-base">
                EXPLORE COLLECTION
              </button>
              <span className="text-sand">LIMITED AVAILABILITY</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Sağ Taraf: Görsel */}
        <div className="relative h-[50vh] md:h-full mt-20 md:mt-0">
          {/* Ana Görsel */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero/model-dark.webp"
              alt="Collection Preview"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 bg-white/80 backdrop-blur-sm p-3 sm:p-6 max-w-xs hidden sm:block"
          >
            <p className="text-brown font-serif text-lg mb-2">
              Handcrafted Excellence
            </p>
            <p className="text-gray-600 text-sm">
              Every piece tells a story of sophistication, designed to become an
              essential part of your personal expression.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute top-6 right-6 sm:top-12 sm:right-12 bg-brown/90 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full"
          >
            <p className="text-sm font-light tracking-wider">01/10</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-2 sm:py-4 px-4 sm:px-8 md:px-16 flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 md:gap-12 mb-4 sm:mb-0">
          <div>
            <p className="text-brown font-serif">Exclusive Design</p>
            <p className="text-sand text-sm">Limited Edition of 50</p>
          </div>
          <div>
            <p className="text-brown font-serif">Ethical Crafting</p>
            <p className="text-sand text-sm">Sustainable Materials</p>
          </div>
          <div>
            <p className="text-brown font-serif">Worldwide Shipping</p>
            <p className="text-sand text-sm">Free Insured Delivery</p>
          </div>
        </div>
        <button className="text-brown hover:text-sand transition-colors text-sm sm:text-base">
          DISCOVER MORE →
        </button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
