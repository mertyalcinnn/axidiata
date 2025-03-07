import Image from "next/image";

interface CollectionCardProps {
  title: string;
  image: string;
  id: string;
  price: string;
  category: string;
  onViewDetails: () => void;
}

export const CollectionCard = ({
  title,
  image,
  id,
  price,
  category,
  onViewDetails,
}: CollectionCardProps) => {
  return (
    <div
      className="relative group cursor-pointer"
      onClick={onViewDetails}
      data-id={id}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-auto"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        <p className="text-sm">{category}</p>
        <p className="text-base sm:text-lg font-bold">{price}</p>
      </div>
    </div>
  );
};
