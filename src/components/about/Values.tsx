'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Craftsmanship',
    description: 'Every piece is handcrafted with meticulous attention to detail by skilled artisans.'
  },
  {
    title: 'Sustainability',
    description: 'We use ethically sourced materials and embrace sustainable practices in our production.'
  },
  {
    title: 'Innovation',
    description: 'Blending traditional techniques with modern design approaches for unique pieces.'
  },
  {
    title: 'Quality',
    description: 'Only the finest materials are selected to ensure lasting beauty and value.'
  }
]

export function Values() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
                {/* Icon placeholder - replace with actual icons */}
                <div className="w-8 h-8 bg-neutral-300" />
              </div>
              <h3 className="text-lg font-medium mb-2">{value.title}</h3>
              <p className="text-neutral-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}