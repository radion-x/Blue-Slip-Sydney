'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { SERVICE_AREAS } from '@/site.config'
import { Button } from './Button'
import { Loader2 } from 'lucide-react'

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  mobile: z.string().regex(/^04\d{8}$/, 'Enter a valid Australian mobile (04XX XXX XXX)'),
  suburb: z.string().min(1, 'Please select your suburb'),
  vehicleType: z.string().min(1, 'Please select a vehicle type'),
  preferredTime: z.enum(['today', 'tomorrow', 'this-week', 'flexible']),
  notes: z.string().optional(),
})

type QuoteFormData = z.infer<typeof quoteSchema>

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      preferredTime: 'flexible',
    },
  })

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    setSuccessMessage('')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSuccessMessage('Thanks! We\'ll contact you shortly to confirm your booking.')
        reset()
      } else {
        setSuccessMessage('Something went wrong. Please call us instead.')
      }
    } catch (error) {
      setSuccessMessage('Something went wrong. Please call us instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Quote Form</h3>
      
      {successMessage && (
        <div
          className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
          role="alert"
          aria-live="polite"
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-ring"
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile *
          </label>
          <input
            {...register('mobile')}
            type="tel"
            id="mobile"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-ring"
            placeholder="0412 345 678"
          />
          {errors.mobile && (
            <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-1">
            Your suburb *
          </label>
          <select
            {...register('suburb')}
            id="suburb"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-ring"
          >
            <option value="">Select suburb...</option>
            {SERVICE_AREAS.map((suburb) => (
              <option key={suburb} value={suburb}>
                {suburb}
              </option>
            ))}
          </select>
          {errors.suburb && (
            <p className="mt-1 text-sm text-red-600">{errors.suburb.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle type *
          </label>
          <select
            {...register('vehicleType')}
            id="vehicleType"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-ring"
          >
            <option value="">Select type...</option>
            <option value="car">Car/Sedan</option>
            <option value="suv">SUV/4WD</option>
            <option value="van">Van</option>
            <option value="ute">Ute</option>
            <option value="motorbike">Motorbike</option>
            <option value="trailer">Trailer</option>
            <option value="other">Other</option>
          </select>
          {errors.vehicleType && (
            <p className="mt-1 text-sm text-red-600">{errors.vehicleType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
            When do you need it?
          </label>
          <select
            {...register('preferredTime')}
            id="preferredTime"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-ring"
          >
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="this-week">This week</option>
            <option value="flexible">I'm flexible</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notes (optional)
          </label>
          <textarea
            {...register('notes')}
            id="notes"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-ring"
            placeholder="Any special requirements?"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            'Get My Quote'
          )}
        </Button>
      </form>
    </div>
  )
}
