'use client'

import { Quote, Star } from 'lucide-react'
import { motion } from 'framer-motion'

interface TestimonialProps {
  name: string
  suburb: string
  text: string
}

export function Testimonial({ name, suburb, text }: TestimonialProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-brand-200 transition-all h-full relative group"
    >
      {/* Quote Icon Background */}
      <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Quote className="w-20 h-20 text-brand-600" />
      </div>

      {/* 5 Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 italic leading-relaxed relative z-10">
        &ldquo;{text}&rdquo;
      </p>
      
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <span className="text-white font-bold text-lg">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
            {suburb}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

