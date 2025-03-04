import { useState } from 'react'
import Image from 'next/image'

type Product = {
  id: string
  name: string
  image: string
  price: string
  description: string
  availableDate: string
}

type ProductSelectionProps = {
  products: Product[]
  onSelect: (product: Product) => void
  selectedProduct: Product | null
}

export function ProductSelection({ products, onSelect, selectedProduct }: ProductSelectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-light mb-6">Select Your Product</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => onSelect(product)}
            className={`group relative rounded-lg overflow-hidden border transition-all
              ${selectedProduct?.id === product.id 
                ? 'border-black ring-1 ring-black' 
                : 'border-neutral-200 hover:border-neutral-300'}`}
          >
            <div className="aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-4 text-left">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-neutral-600 mt-1">{product.price}</p>
              <p className="text-xs text-neutral-500 mt-2">
                Available from: {product.availableDate}
              </p>
            </div>
            
            {selectedProduct?.id === product.id && (
              <div className="absolute top-3 right-3 bg-black text-white p-1 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}