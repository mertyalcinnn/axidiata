import { motion } from 'framer-motion'
import Image from 'next/image'

type CollectionCardProps = {
  title: string
  description: string
  price: string
  image: string
  category: string
  onViewDetails: () => void
}

export function CollectionCard({
  title,
  description,
  price,
  image,
  category,
  onViewDetails
}: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group max-w-[280px] mx-auto"
    >
      <div className="relative w-[280px] h-[280px] rounded-lg overflow-hidden bg-neutral-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="280px"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <button 
          onClick={onViewDetails}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm 
            text-xs text-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 
            hover:bg-white"
        >
          View Details
        </button>
      </div>
      
      <div className="mt-3 text-center px-2">
        <p className="text-[11px] tracking-wider text-neutral-500 uppercase">
          {category}
        </p>
        <h3 className="text-sm font-medium mt-1 mb-0.5">{title}</h3>
        <p className="text-xs text-neutral-800">{price}</p>
      </div>
    </motion.div>
  )
}