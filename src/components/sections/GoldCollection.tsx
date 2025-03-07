"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export const GoldCollection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-sand/10 overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-10 sm:mb-16 md:mb-20" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brown mb-2 sm:mb-4">
            Divine Collections
          </h2>
          <p className="text-sand text-base sm:text-lg max-w-2xl mx-auto">
            Where ancient wisdom meets modern elegance, each piece tells a story
            of divine inspiration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left Content - Athena Rings */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-[4/5] mb-8 group">
              <Image
                src="/images/athena-rings.jpeg"
                alt="Athena Rings Collection"
                fill
                className="object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="space-y-6 relative">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute -left-4 top-0 w-1 h-full bg-sand/30"
              />

              <div className="pl-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-brown leading-tight mb-4 sm:mb-6">
                  The Power of <br />
                  <span className="font-medium">Divine Wisdom</span>
                </h2>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 sm:p-6 md:p-8 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl text-darkGray mb-2 sm:mb-4 font-medium">
                    Athena Collection
                  </h3>
                  <p className="text-sand text-base sm:text-lg leading-relaxed">
                    Crafted in 14K yellow gold, these geometric rings embody the
                    wisdom and strategic brilliance of Athena. Each angle
                    represents clarity of thought and divine intelligence,
                    creating a powerful symbol of intellectual strength and
                    feminine wisdom.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hathor Earrings */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-[4/5] mb-8 group">
              <Image
                src="/images/hathor-earrings.jpg"
                alt="Hathor Earrings Collection"
                fill
                className="object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="space-y-6 relative">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute -left-4 top-0 w-1 h-full bg-sand/30"
              />

              <div className="pl-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-brown leading-tight mb-4 sm:mb-6">
                  The Essence of <br />
                  <span className="font-medium">Divine Beauty</span>
                </h2>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 sm:p-6 md:p-8 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl text-darkGray mb-2 sm:mb-4 font-medium">
                    Hathor Collection
                  </h3>
                  <p className="text-sand text-base sm:text-lg leading-relaxed">
                    These statement earrings in 14K yellow gold channel the
                    essence of Hathor, goddess of beauty and love. Their bold
                    geometric design creates a harmonious balance of strength
                    and elegance, embodying the divine feminine energy in every
                    detail.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="text-center mt-10 sm:mt-16 md:mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-sand text-white rounded-full hover:bg-darkGray transition-all duration-300 shadow-xl hover:shadow-2xl text-base sm:text-lg font-medium tracking-wide"
          >
            Explore the Divine Collection
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
