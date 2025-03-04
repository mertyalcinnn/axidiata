import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type ProductDetailsProps = {
  isOpen: boolean
  onClose: () => void
  product: {
    title: string
    description: string
    price: string
    image: string
    category: string
  } | null
}

export function ProductDetails({ isOpen, onClose, product }: ProductDetailsProps) {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-[500px] bg-white shadow-lg z-50"
          >
            <div className="relative h-full overflow-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 p-2 hover:bg-neutral-100 rounded-full"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-6">
                {/* Product Image */}
                <div className="relative w-[280px] h-[280px] mx-auto rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="mt-6 space-y-4">
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">
                    {product.category}
                  </div>
                  
                  <h2 className="text-2xl font-medium">{product.title}</h2>
                  
                  <p className="text-neutral-600">{product.description}</p>
                  
                  <div className="text-xl font-medium">{product.price}</div>

                  <div className="pt-4 space-y-3">
                    <button className="w-full py-3 bg-black text-white hover:bg-neutral-800 transition-colors">
                      Add to Cart
                    </button>
                    
                    <button className="w-full py-3 border border-black hover:bg-neutral-50 transition-colors">
                      Add to Wishlist
                    </button>
                  </div>

                  {/* Additional Details */}
                  <div className="pt-8 space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Product Details</h3>
                      <ul className="space-y-2 text-sm text-neutral-600">
                        <li>Material: Premium 18K Gold</li>
                        <li>Weight: 3.5g</li>
                        <li>Size: Adjustable</li>
                        <li>Origin: Handcrafted in Turkey</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Shipping & Returns</h3>
                      <p className="text-sm text-neutral-600">
                        Free shipping worldwide. Easy returns within 30 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}