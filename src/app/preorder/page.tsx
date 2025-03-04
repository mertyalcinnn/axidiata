"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProductSelection } from "@/components/preorder/ProductSelection";
import { OrderForm } from "@/components/preorder/OrderForm";

// Örnek ürün verileri
const preorderProducts = [
  {
    id: "1",
    name: "Celestial Diamond Ring",
    image: "/images/preorder/ring-1.jpg",
    price: "$2,499",
    description: "Limited edition diamond ring with celestial design",
    availableDate: "March 2025",
  },
  {
    id: "2",
    name: "Pearl Essence Necklace",
    image: "/images/preorder/necklace-1.jpg",
    price: "$1,899",
    description: "Exclusive pearl necklace with gold accents",
    availableDate: "April 2025",
  },
  {
    id: "3",
    name: "Royal Sapphire Bracelet",
    image: "/images/preorder/bracelet-1.jpg",
    price: "$3,299",
    description: "Handcrafted sapphire bracelet with diamond details",
    availableDate: "May 2025",
  },
];

export default function PreorderPage() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof preorderProducts)[0] | null
  >(null);

  const handleProductSelect = (product: (typeof preorderProducts)[0]) => {
    setSelectedProduct(product);
  };

  const handleFormSubmit = async (formData: any) => {
    // API entegrasyonu burada yapılacak
    console.log("Form submitted:", { product: selectedProduct, formData });
    // TODO: API call to submit preorder
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div className="relative h-[400px] w-full mb-16">
        <div className="absolute inset-0">
          <img
            src="/images/preorder.jpg" // Banner görselinizi buraya ekleyin
            alt="Preorder Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />{" "}
          {/* Karanlık overlay */}
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-light mb-6"
          >
            Exclusive Pre-order Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-light max-w-2xl"
          >
            Be among the first to secure our upcoming masterpieces
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 max-w-6xl pb-20"
      >
        <div className="space-y-12">
          <ProductSelection
            products={preorderProducts}
            onSelect={handleProductSelect}
            selectedProduct={selectedProduct}
          />

          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-6 border border-neutral-200"
            >
              <h2 className="text-2xl font-light mb-6">Pre-order Details</h2>
              <OrderForm
                onSubmit={handleFormSubmit}
                selectedProduct={selectedProduct}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
