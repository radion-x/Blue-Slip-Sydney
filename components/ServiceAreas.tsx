import { SERVICE_AREAS } from '@/site.config'

export function ServiceAreas() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
        {SERVICE_AREAS.map((area) => (
          <div
            key={area}
            className="text-center p-3 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-600 hover:text-brand-700 transition-colors"
          >
            {area}
          </div>
        ))}
      </div>
      <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 text-center">
        <p className="text-gray-700">
          <strong className="text-brand-800">Looking for blue slip inspections near you?</strong>{' '}
          We're based in St Peters and serve Sydney's Inner West and surrounding areas. 
          Can't see your suburb listed? Give us a call on{' '}
          <a href="tel:+61295163366" className="text-brand-700 underline hover:text-brand-800 font-semibold">
            (02) 9516 3366
          </a>
          {' '}— we'll let you know if we can help.
        </p>
      </div>
    </div>
  )
}
