"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const BrandStory = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-sand/5 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-7xl font-light text-brown mb-4">AXADiATA</h2>
          <p className="text-2xl text-sand/80 font-light">IS TIMELESS</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/story-left.png"
                alt="AXADiATA Jewelry Detail"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center px-4"
          >
            <div className="space-y-8">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <p className="text-xl text-darkGray font-light">
                  AXADIATA WAS FOUNDED IN ISTANBUL, TURKEY
                  <br />
                  IN AUGUST 2021
                </p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/40 backdrop-blur-sm p-8 rounded-xl shadow-lg"
              >
                <p className="text-sand text-lg leading-relaxed">
                  OUR FOUNDER AXANA ROY USED TO RECYCLE AND REDESIGN OLD WEDDING
                  RINGS INTO BEAUTIFUL EMPOWERING NEW JEWELRY PIECES.
                </p>
                <p className="text-sand text-lg leading-relaxed mt-4">
                  THIS IS WHERE HER IDEA TO REMIND WOMEN THAT THEY ARE WHOLE,
                  COMPLETE & WORTHY CAME FROM.
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
                src="/images/story-right.png"
                alt="AXADiATA Jewelry Elegance"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
