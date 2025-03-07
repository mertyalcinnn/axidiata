"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const MissionSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-sand/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div className="space-y-2 sm:space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brown mb-3 sm:mb-6">
                AXADiATA
              </h2>
              <p className="text-xl sm:text-2xl text-sand/80 font-light">
                IS TIMELESS
              </p>
            </motion.div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="prose prose-lg max-w-none text-base sm:text-lg"
              >
                <p className="text-base sm:text-lg text-sand leading-relaxed">
                  Our mission transcends traditional jewelry making. We create
                  unique pieces that are deeply connected to your personal
                  journey, crafting not just accessories, but meaningful symbols
                  of your individual story.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-4 sm:p-6 md:p-8 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl text-darkGray mb-2 sm:mb-4 font-medium">
                  Personalized Divine Creation
                </h3>
                <p className="text-sand text-base sm:text-lg leading-relaxed">
                  Each piece is thoughtfully designed considering your personal
                  astrology, character traits, and philosophical perspective. We
                  blend ancient wisdom with modern aesthetics, creating jewelry
                  that resonates with your spiritual journey and enhances your
                  natural energy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="p-4 sm:p-6 md:p-8 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl text-darkGray mb-2 sm:mb-4 font-medium">
                  Beyond Aesthetics
                </h3>
                <p className="text-sand text-base sm:text-lg leading-relaxed">
                  Our design process integrates astrological insights,
                  psychological understanding, and philosophical elements to
                  create pieces that not only complement your physical
                  appearance but also align with your inner essence and life
                  path.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/mission.png"
                alt="AXADIATA Timeless Beauty"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/30 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl"
            >
              <p className="text-brown text-base sm:text-lg font-light text-center">
                Our timeless jewelry pieces are made to complement every
                woman&lsquos unique beauty and empower their divine feminine
                energy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
