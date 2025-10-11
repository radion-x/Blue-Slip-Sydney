'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FaqProps {
  question: string
  answer: string
}

export function Faq({ question, answer }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors focus-ring"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-600 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-700 border-t border-gray-100">
          <p className="pt-3">{answer}</p>
        </div>
      )}
    </div>
  )
}
