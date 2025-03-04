'use client'

import { useState } from 'react'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // API entegrasyonu burada yapılacak
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-4 rounded-lg hover:bg-neutral-800 transition-colors"
      >
        Send Message
      </button>
    </form>
  )
}