"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-neutral-900">
        <div className="absolute inset-0 bg-[url('/images/contact.jpg')] bg-cover bg-center opacity-40" />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-light mb-4">Contact Us</h1>
            <p className="max-w-xl mx-auto px-4">
              We&apos;re here to help and answer any questions you might have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ContactInfo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-neutral-50 p-8 rounded-lg"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-neutral-100">
        {/* Harita entegrasyonu burada yapılacak */}
        <div className="w-full h-full bg-neutral-200" />
      </section>
    </main>
  );
}
