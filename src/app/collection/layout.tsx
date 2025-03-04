import { motion } from "framer-motion";

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="relative h-[500px] bg-[url('/images/collection.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-6xl font-serif font-bold text-white tracking-wide">
            Luxury Collections
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover our carefully curated collection of exquisite jewelry
            pieces, each telling its own unique story of elegance and
            craftsmanship.
          </p>
          <div className="w-24 h-1 bg-gold-400" />
        </div>
      </div>
      {children}
    </div>
  );
}
