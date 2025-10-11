'use client'

import { SERVICE_AREAS } from '@/site.config'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function ServiceAreas() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
        {SERVICE_AREAS.map((area, index) => (
          <motion.div
            key={area}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.01 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="group"
          >
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-500 hover:shadow-lg hover:bg-gradient-to-br hover:from-brand-50 hover:to-white transition-all duration-300 cursor-default h-full flex items-center justify-center">
              <MapPin className="w-3 h-3 mr-1.5 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              {area}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-brand-50 via-white to-brand-50 border-2 border-brand-200 rounded-2xl p-8 text-center shadow-lg"
      >
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong className="text-brand-800">Looking for blue slip inspections near you?</strong>{' '}
          We&apos;re based in St Peters and serve Sydney&apos;s Inner West and surrounding areas. 
          Can&apos;t see your suburb listed? Give us a call on{' '}
          <a 
            href="tel:+61295163366" 
            className="text-brand-700 underline hover:text-brand-900 font-bold hover:scale-105 inline-block transition-all"
          >
            (02) 9516 3366
          </a>
          {' '}— we&apos;ll let you know if we can help.
        </p>
      </motion.div>
    </div>
  )
}

