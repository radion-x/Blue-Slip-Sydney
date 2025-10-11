'use client'

import { Phone, MessageSquare } from 'lucide-react'
import { SITE, SMS_BODY } from '@/site.config'
import { useEffect, useState } from 'react'

export function StickyBar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const currentScroll = window.scrollY
      // Hide on scroll down, show on scroll up
      setIsVisible(currentScroll < lastScroll || currentScroll < 100)
      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white border-t-2 border-gray-200 shadow-2xl p-3 flex gap-3">
        <a
          href={SITE.PHONE_LINK}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-brand-700 active:bg-brand-800 transition-colors shadow-md"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href={`${SITE.SMS_LINK}?&body=${SMS_BODY}`}
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-semibold py-3 px-4 rounded-lg hover:bg-sky-600 active:bg-sky-700 transition-colors shadow-md"
        >
          <MessageSquare className="w-5 h-5" />
          SMS Quote
        </a>
      </div>
    </div>
  )
}
