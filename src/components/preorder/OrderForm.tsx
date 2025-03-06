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
    <form onSubmit={handleSubmit} className="space-y-6">
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90"
      >
        Pre-order {selectedProduct.name}
      </button>
    </form>
  );
}
