"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const SubscribeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreeToEmails: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-32 bg-[#ADA49B] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/subscribe-image.png"
                alt="AXADiATA Jewelry"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/images/rings-detail.png"
                  alt="Symmetry Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-light text-white mb-12"
            >
              AXADiATA
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 mb-8"
            >
              SUBSCRIBE TO GET NOTIFIED OF THE SYMMETRY LAUNCH
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border border-white/30 rounded-none px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="E-MAIL"
                  className="w-full bg-transparent border border-white/30 rounded-none px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  className="w-full bg-transparent border border-white/30 rounded-none px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-3"
              >
                <input
                  type="checkbox"
                  id="agree"
                  className="w-5 h-5 border-white/30"
                  checked={formData.agreeToEmails}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreeToEmails: e.target.checked,
                    })
                  }
                />
                <label htmlFor="agree" className="text-white/90">
                  I AGREE TO RECEIVE EMAILS FROM AXADIATA TEAM
                </label>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 text-2xl text-white hover:text-white/80 transition-colors"
              >
                SEND
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
