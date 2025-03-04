import { useState } from 'react'

type OrderFormProps = {
  onSubmit: (formData: FormData) => void
  selectedProduct: {
    name: string
    price: string
  } | null
}

type FormData = {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  zipCode: string
  notes: string
}

export function OrderForm({ onSubmit, selectedProduct }: OrderFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (!selectedProduct) return null

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-neutral-50 p-4 rounded-lg">
        <h3 className="font-medium">Selected Product</h3>
        <p className="text-neutral-600 mt-1">{selectedProduct.name}</p>
        <p className="text-neutral-600">{selectedProduct.price}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border-neutral-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-neutral-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border-neutral-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border-neutral-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border-neutral-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm mb-1">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full border-neutral-200 rounded-lg p-2"
          />
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm mb-1">
            ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
            className="w-full border-neutral-200 rounded-lg p-2"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="notes" className="block text-sm mb-1">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border-neutral-200 rounded-lg p-2 h-24"
          />
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-neutral-800 transition-colors"
        >
          Submit Pre-order
        </button>
      </div>
    </form>
  )
}