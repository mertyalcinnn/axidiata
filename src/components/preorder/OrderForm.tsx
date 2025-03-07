interface OrderFormProps {
  onSubmit: (formData: { name: string; email: string }) => void;
  selectedProduct: {
    id: string;
    name: string;
    price: string;
    availableDate: string;
  };
}

export function OrderForm({ onSubmit, selectedProduct }: OrderFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-brown focus:border-brown"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-brown focus:border-brown"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-brown text-white py-2 px-4 text-sm sm:text-base rounded-md hover:bg-brown/90"
      >
        Pre-order {selectedProduct.name}
      </button>
    </form>
  );
}
