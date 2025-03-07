"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const JewelrySpirit = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-sand/10 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left side - Visual */}
          <div className="relative">
            <div className="relative aspect-square">
              <Image
                src="/images/isis-necklace.webp"
                alt="ISIS Necklace - Spirit Connection"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-sand/20 to-transparent rounded-full" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-brown leading-tight">
              The Harmony of <br />
              <span className="font-medium">Soul and Body</span>
            </h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl text-darkGray mb-3 font-medium">
                  Astrological Connection
                </h3>
                <p className="text-sand">
                  The ISIS necklace awakens your life force through the Citrine
                  stone, representing the sun&lsquos energy. Drawing inspiration
                  from ancient Egyptian wisdom, this design strengthens your
                  spiritual balance and cosmic alignment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl text-darkGray mb-3 font-medium">
                  Physical Resonance
                </h3>
                <p className="text-sand">
                  The energy conductivity of 14K gold combined with the healing
                  properties of citrine harmonizes your physical and spiritual
                  balance. Each piece is meticulously placed to support your
                  body&lsquos natural energy flow.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 bg-white/50 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl text-darkGray mb-3 font-medium">
                  Spiritual Reflection
                </h3>
                <p className="text-sand">
                  The symmetric design symbolizes the harmony between your inner
                  world and external reality. Each layer represents different
                  aspects of your life, creating a holistic balance that
                  resonates with your spiritual journey.
                </p>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-sand text-white rounded-full hover:bg-darkGray transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Explore the Collection
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
