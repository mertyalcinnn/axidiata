"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const DivinityCollection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-sand/10 to-white overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* Left Side - Apollo Rings */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            variants={{
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
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] mb-8 group">
              <Image
                src="/images/apollo-rings.jpg"
                alt="Apollo Rings Collection"
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
                <h2 className="text-5xl font-light text-brown leading-tight mb-6">
                  The Light of <br />
                  <span className="font-medium">Divine Sun</span>
                </h2>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl text-darkGray mb-4 font-medium">
                    Apollo Collection
                  </h3>
                  <p className="text-sand text-lg leading-relaxed">
                    These 14K yellow gold rings capture the radiant essence of
                    Apollo, god of light and arts. Each piece reflects the
                    sun&lsquos brilliance, combining fluid forms with bold
                    geometry to create a statement of divine creativity and
                    power.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Venera Ring */}
          <motion.div
            variants={{
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
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] mb-8 group">
              <Image
                src="/images/venera-ring.webp"
                alt="Venera Ring Collection"
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
                <h2 className="text-5xl font-light text-brown leading-tight mb-6">
                  The Grace of <br />
                  <span className="font-medium">Divine Love</span>
                </h2>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl text-darkGray mb-4 font-medium">
                    Venera Collection
                  </h3>
                  <p className="text-sand text-lg leading-relaxed">
                    This exquisite 14K yellow gold ring embodies Venus&lsquos
                    divine grace and beauty. The sculptural profile captures the
                    essence of love and harmony, creating a piece that
                    celebrates the eternal feminine spirit.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{
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
          }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-sand text-white rounded-full hover:bg-darkGray transition-all duration-300 shadow-xl hover:shadow-2xl text-lg font-medium tracking-wide"
          >
            Discover the Collection
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
