import { Quote } from 'lucide-react'

interface TestimonialProps {
  name: string
  suburb: string
  text: string
}

export function Testimonial({ name, suburb, text }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <Quote className="w-8 h-8 text-brand-600/20 mb-3" />
      <p className="text-gray-700 mb-4 italic">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-brand-600/10 flex items-center justify-center">
          <span className="text-brand-700 font-semibold text-sm">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{suburb}</p>
        </div>
      </div>
    </div>
  )
}
