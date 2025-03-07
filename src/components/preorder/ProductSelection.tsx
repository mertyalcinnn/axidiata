import Image from "next/image";

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  availableDate: string;
}

interface ProductSelectionProps {
  products: Product[];
  onSelect: (product: Product) => void;
  selectedProduct: Product | null;
}

export const ProductSelection = ({ products, onSelect, selectedProduct }: ProductSelectionProps) => {
  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Select Your Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`border p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedProduct?.id === product.id
                ? "border-black bg-black/5"
                : "border-gray-200 hover:border-gray-300 hover:shadow-md"
            }`}
            onClick={() => onSelect(product)}
          >
            {/* Ürün Görseli */}
            <div className="aspect-square relative mb-4 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Ürün Bilgileri */}
            <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{product.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{product.description}</p>
            <div className="flex justify-between items-center mt-2 sm:mt-4">
              <span className="font-semibold">{product.price}</span>
              <span className="text-xs text-gray-500">
                Available: {product.availableDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
