'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function DesignerInfo() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] bg-white"
          >
            <Image
              src="/images/about/designer.jpg"
              alt="Lead Designer"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-light mb-2">The Designer</h2>
              <p className="text-neutral-600">Ayşe Yılmaz, Lead Designer</p>
            </div>

            <div className="space-y-4 text-neutral-600">
              <p>
                With over 15 years of experience in jewelry design, Ayşe brings a unique 
                perspective that blends traditional Turkish artistry with contemporary 
                global influences. Her journey in jewelry making began at Istanbul's 
                prestigious Grand Bazaar, where she apprenticed under master craftsmen.
              </p>
              <p>
                Ayşe's designs are inspired by the rich cultural heritage of Istanbul, 
                sacred geometry, and the natural world. Each piece she creates is a 
                testament to her commitment to excellence and innovation in jewelry design.
              </p>
              <p>
                Her work has been featured in various international exhibitions and has 
                earned recognition for its distinctive blend of traditional craftsmanship 
                and modern aesthetics.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Awards & Recognition</h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-600">
                <li>International Jewelry Design Award, 2023</li>
                <li>Turkish Craftsmanship Excellence Award, 2022</li>
                <li>Featured in Vogue Magazine, 2021</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}