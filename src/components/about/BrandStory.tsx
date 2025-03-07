"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function BrandStory() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                Founded in 2020, Axadiata Jewelry emerged from a passion for
                creating timeless pieces that celebrate both tradition and
                innovation. Our journey began in a small Istanbul workshop,
                where centuries-old craftsmanship met contemporary design.
              </p>
              <p>
                Each Axadiata piece tells a story of dedication to excellence,
                combining precious metals and stones with innovative design
                techniques. We believe jewelry should be more than accessories –
                they should be personal statements that last generations.
              </p>
              <p>
                Our commitment to sustainability and ethical sourcing guides
                every decision we make. We work closely with responsible
                suppliers and craftsmen who share our values of quality,
                integrity, and environmental consciousness.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-neutral-100"
          >
            <Image
              src="/images/about/brand-story.jpg"
              alt="Axadiata Jewelry Workshop"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
