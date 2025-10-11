'use client'

import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqProps {
  question: string
  answer: string
}

export function Faq({ question, answer }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-brand-300 transition-colors shadow-sm hover:shadow-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gradient-to-r hover:from-brand-50 hover:to-transparent transition-all focus-ring group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 transition-colors">
            <HelpCircle className="w-5 h-5 text-brand-600" />
          </div>
          <span className="font-bold text-gray-900 pr-4 text-lg">{question}</span>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-brand-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-700 border-t-2 border-gray-100 bg-gradient-to-b from-gray-50 to-white">
              <p className="pt-5 leading-relaxed text-lg">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

