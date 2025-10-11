'use client'

import { Button } from '@/components/Button'
import { TrustStrip } from '@/components/TrustStrip'
import { QuoteForm } from '@/components/QuoteForm'
import { Feature } from '@/components/Feature'
import { Testimonial } from '@/components/Testimonial'
import { Faq } from '@/components/Faq'
import { ServiceAreas } from '@/components/ServiceAreas'
import { StickyBar } from '@/components/StickyBar'
import { SITE, SMS_BODY } from '@/site.config'
import {
  Clock,
  MapPin,
  DollarSign,
  ShieldCheck,
  Users,
  FileCheck,
  Phone,
  MessageSquare,
  CheckCircle,
  Calendar,
  FileText,
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-700 via-brand-600 to-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Hero Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Blue Slip Sydney (AUVIS) – Same-Day Bookings
              </h1>
              <p className="text-xl md:text-2xl text-blue-50">
                Fast, compliant AUVIS inspections by friendly pros. Get your unregistered vehicle on the road, stress-free.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={SITE.PHONE_LINK}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-white text-brand-700 hover:bg-gray-100 active:bg-gray-200 shadow-xl w-full"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call {SITE.PHONE}
                  </Button>
                </a>
                <a href={`${SITE.SMS_LINK}?&body=${SMS_BODY}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 active:bg-white/20 w-full"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    SMS for Quick Quote
                  </Button>
                </a>
              </div>

              {/* Trust Strip */}
              <TrustStrip />
            </div>

            {/* Right: Quote Form */}
            <div className="md:sticky md:top-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* How Blue Slips Work */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Blue Slip Inspections Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A blue slip (AUVIS inspection) checks your vehicle's safety and identity before registration in NSW. Here's the process:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book Your Inspection</h3>
              <p className="text-gray-700">
                Call or SMS us with your suburb and vehicle details. We'll find a time that suits you—often the same day.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We Inspect Your Vehicle</h3>
              <p className="text-gray-700">
                Our AUVIS-authorised inspector checks safety systems, lights, brakes, tyres, and verifies your VIN and ownership documents.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Your Report</h3>
              <p className="text-gray-700">
                You'll receive your blue slip certificate (if passed) on the spot. Take it to Service NSW to complete your registration.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-4xl mx-auto">
            <h4 className="font-semibold text-gray-900 mb-3">When You Need a Blue Slip:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span>Vehicle has never been registered in NSW (new imports, interstate transfers)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span>Registration has been expired for more than 3 months</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span>Vehicle has been written off or had major structural repairs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span>Building a custom or modified vehicle</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-4 italic">
              Note: A blue slip is valid for 42 days from the date of inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Blue Slip Sydney?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make blue slip inspections simple, fast, and hassle-free.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Feature
              icon={Clock}
              title="Same-Day Appointments"
              description="Need it today? We typically have slots available for urgent inspections—just call or SMS."
            />
            <Feature
              icon={MapPin}
              title="Sydney-Wide Service"
              description="Based in St Peters, we serve the Inner West and surrounding Sydney suburbs with fast turnarounds."
            />
            <Feature
              icon={DollarSign}
              title="Fixed Upfront Pricing"
              description="No surprises. We'll quote you a clear price before you book—government fees separate."
            />
            <Feature
              icon={ShieldCheck}
              title="AUVIS-Authorised Inspectors"
              description="All our inspectors are fully authorised by Transport for NSW to conduct blue slip inspections."
            />
            <Feature
              icon={Users}
              title="Friendly, Helpful Team"
              description="We explain the process, answer your questions, and help you understand what's needed."
            />
            <Feature
              icon={FileCheck}
              title="Fast Digital Paperwork"
              description="Get your certificate quickly—often on the day—so you can register your vehicle without delay."
            />
          </div>

          {/* Micro-CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE.PHONE_LINK}>
              <Button variant="primary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call {SITE.PHONE}
              </Button>
            </a>
            <a href={`${SITE.SMS_LINK}?&body=${SMS_BODY}`}>
              <Button variant="outline" size="lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                SMS for Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-areas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blue Slip Sydney – Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to serve Sydney's Inner West and nearby suburbs. Find your area below:
            </p>
          </div>
          <ServiceAreas />
        </div>
      </section>

      {/* Pricing & What to Bring */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pricing */}
            <div className="bg-brand-50 border-2 border-brand-600 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Blue Slip Pricing</h2>
              <div className="mb-6">
                <p className="text-5xl font-bold text-brand-700 mb-2">
                  From ${SITE.PRICE_FROM}
                </p>
                <p className="text-gray-600">for light vehicles (government fees separate)</p>
              </div>
              <p className="text-gray-700 mb-4">
                Our fee covers the AUVIS inspection and certificate. Service NSW registration fees and stamp duty are additional. 
                Call for a precise quote based on your vehicle type.
              </p>
              <a href={SITE.PHONE_LINK} className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Get a Quote Now
                </Button>
              </a>
            </div>

            {/* What to Bring */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Bring</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-brand-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Photo ID</p>
                    <p className="text-gray-600 text-sm">Driver's licence or passport</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-brand-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Proof of Ownership</p>
                    <p className="text-gray-600 text-sm">
                      Bill of sale, receipt, or import documents
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-brand-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Your Vehicle</p>
                    <p className="text-gray-600 text-sm">
                      Clean, accessible, and in safe working order
                    </p>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-6 italic">
                We also inspect trailers and motorcycles. Call to confirm your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blue Slip FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about AUVIS inspections in Sydney
            </p>
          </div>

          <div className="space-y-4">
            <Faq
              question="What is a blue slip?"
              answer="A blue slip is an Authorised Unregistered Vehicle Inspection Scheme (AUVIS) certificate. It's a safety and identity check required in NSW when a vehicle has never been registered, has been unregistered for more than 3 months, or has had major repairs. It verifies your vehicle is roadworthy and matches its ownership documents."
            />
            <Faq
              question="How long is a blue slip valid?"
              answer="A blue slip is valid for 42 days from the date of inspection. You must use it to register your vehicle with Service NSW within that timeframe."
            />
            <Faq
              question="What's the difference between a blue slip and a pink slip?"
              answer="A pink slip (e-safety check) is an annual roadworthiness inspection for registered vehicles over 5 years old. A blue slip (AUVIS) is a one-time inspection for unregistered vehicles before they can be registered in NSW."
            />
            <Faq
              question="What do I need to bring to my blue slip inspection?"
              answer="Bring your photo ID (driver's licence or passport), proof of ownership (bill of sale, receipt, or import papers), and the vehicle itself. Make sure the vehicle is clean and accessible so we can inspect it properly."
            />
            <Faq
              question="How long does a blue slip inspection take?"
              answer="Most inspections take 30–60 minutes, depending on the vehicle type and any issues we need to check. If your vehicle passes, you'll typically get your certificate on the spot."
            />
            <Faq
              question="Do you inspect trailers and motorcycles?"
              answer="Yes, we conduct AUVIS inspections for a range of vehicle types, including trailers and motorbikes. Call us to discuss your specific requirements and confirm availability."
            />
            <Faq
              question="Can you do mobile blue slip inspections?"
              answer="Currently, all our blue slip inspections are conducted at our St Peters workshop. This ensures we have the proper equipment and facilities to meet AUVIS standards."
            />
            <Faq
              question="What if my vehicle fails the inspection?"
              answer="If your vehicle doesn't pass, we'll provide a detailed report of what needs fixing. Once you've made the repairs, you can book a re-inspection. We'll guide you through the process to help you get on the road."
            />
            <Faq
              question="What payment methods do you accept?"
              answer="We accept cash, EFTPOS, and most major credit cards. Payment is due at the time of inspection."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from Sydney drivers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
              name="James"
              suburb="Newtown"
              text="Needed a blue slip urgently and they fit me in same day. Super helpful team, explained everything clearly. Got my certificate and registered my car the next day."
            />
            <Testimonial
              name="Sarah"
              suburb="Marrickville"
              text="Really professional and friendly. They walked me through the whole blue slip process and made it stress-free. Highly recommend!"
            />
            <Testimonial
              name="David"
              suburb="Alexandria"
              text="Fair price, quick turnaround, and great communication. Used them for my interstate transfer and couldn't be happier."
            />
            <Testimonial
              name="Emma"
              suburb="Redfern"
              text="I was worried my older vehicle wouldn't pass, but they gave honest advice and helped me fix the minor issues. Passed on the second inspection. Thanks guys!"
            />
            <Testimonial
              name="Michael"
              suburb="St Peters"
              text="Local, reliable, and know their stuff. Best blue slip service in the Inner West."
            />
          </div>
        </div>
      </section>

      {/* Callout Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-700 to-brand-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Blue Slip Today?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Call us now or send a quick SMS to book your AUVIS inspection. We&apos;re here to help you get on the road fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE.PHONE_LINK}>
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-brand-700 hover:bg-gray-100 w-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {SITE.PHONE}
              </Button>
            </a>
            <a href={`${SITE.SMS_LINK}?&body=${SMS_BODY}`}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 w-full"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                SMS {SITE.MOBILE}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Blue Slip Sydney</h3>
              <p className="mb-4">
                AUVIS-authorised blue slip inspections for unregistered vehicles in Sydney.
              </p>
              <p className="text-sm text-gray-400">
                Trading name of {SITE.BUSINESS_NAME}
                <br />
                ABN: {SITE.ABN}
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={SITE.PHONE_LINK} className="hover:text-white transition-colors">
                    {SITE.PHONE}
                  </a>
                </li>
                <li>
                  <a href={SITE.MOBILE_LINK} className="hover:text-white transition-colors">
                    {SITE.MOBILE} (SMS quotes)
                  </a>
                </li>
                <li className="pt-2">{SITE.ADDRESS}</li>
                <li className="pt-2">
                  <strong>Hours:</strong><br />
                  {SITE.HOURS.WEEKDAY}<br />
                  {SITE.HOURS.SATURDAY}<br />
                  {SITE.HOURS.SUNDAY}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-white transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#service-areas" className="hover:text-white transition-colors">
                    Service Areas
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 text-center">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} {SITE.BUSINESS_NAME}. All rights reserved.
            </p>
            <p className="text-xs">
              Blue slip = AUVIS (Authorised Unregistered Vehicle Inspection Scheme) inspection for unregistered vehicles in NSW. 
              We are an independent service provider and are not affiliated with Transport for NSW or Service NSW.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <StickyBar />
    </>
  )
}
