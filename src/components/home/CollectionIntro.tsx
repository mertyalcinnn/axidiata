"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CollectionIntro = () => {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sand text-lg">/10</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-brown text-4xl sm:text-5xl md:text-6xl mb-12 sm:mb-16 md:mb-24"
        >
          SYMMETRY
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/founder.jpeg"
              alt="Founder"
              fill
              className="object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute inset-0 bg-black/10 flex items-center justify-center"
            ></motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-700 font-light leading-relaxed"
            >
              THE NEW SYMMETRY LINE IS MADE TO INSPIRE WOMEN ALL AROUND THE
              WORLD TO REMEMBER THEIR WHOLENESS.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-gray-700 font-light leading-relaxed"
            >
              THE TEAM OF JEWELERS AND DESIGNERS CREATED ONLY LIMITED NUMBER OF
              ITEMS. THE FEATURE OF THE COLLECTION IS THE UNUSUAL GEOMETRIC
              SHAPE JEWELRY THAT WILL CERTAINLY BECOME PART OF ANY FASHIONABLE
              LOOK.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-12"
            >
              <h3 className="font-serif text-brown text-2xl mb-2">
                Founder&apos;s Name
              </h3>
              <p className="text-sand text-sm mb-6">THE FOUNDER</p>
              <p className="text-gray-700 font-light leading-relaxed italic">
                IT IS A SHAME THAT WOMEN FORGET THEIR WHOLENESS, THEIR BEAUTY,
                THEIR POWER. THAT IS WHY I HAVE CREATED THIS COLLECTION – TO
                REMIND WOMEN HOW MAGNIFICENT THEY ARE.
              </p>
            </motion.div>
          </motion.div>

          {/* Ring Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative aspect-square rounded-full overflow-hidden"
          >
            <Image
              src="/images/collection/ring-detail.jpg"
              alt="Ring Detail"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollectionIntro;
