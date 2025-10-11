'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface FeatureProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export function Feature({ icon: Icon, title, description, index = 0 }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group backdrop-blur-sm bg-white/90"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-glow"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <h3 className="text-lg font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
