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
import { motion } from 'framer-motion'
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
  Sparkles,
  Zap,
  Car,
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-br from-accent-400/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-to-tr from-brand-500/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
              >
                <Sparkles className="w-4 h-4 text-accent-400" />
                <span className="text-sm font-semibold">AUVIS Authorised Inspections</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  Blue Slip Sydney
                </span>
                <br />
                <span className="text-accent-400">Same-Day Service</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Fast, compliant AUVIS inspections by certified professionals. Get your unregistered vehicle on the road with zero hassle.
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href={SITE.PHONE_LINK} className="group">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-white text-brand-700 hover:bg-gray-50 shadow-2xl w-full hover:shadow-glow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Call {SITE.PHONE}
                  </Button>
                </a>
                <a href={`${SITE.SMS_LINK}?&body=${SMS_BODY}`} className="group">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white w-full"
                  >
                    <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    SMS for Quick Quote
                  </Button>
                </a>
              </motion.div>

              {/* Trust Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <TrustStrip />
              </motion.div>
            </motion.div>

            {/* Right: Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:sticky md:top-8"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-brand-500 rounded-3xl blur-2xl opacity-20 animate-pulse-slow" />
                <div className="relative">
                  <QuoteForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
            <path
              fill="#F9FAFB"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* How Blue Slips Work */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-800 via-brand-600 to-brand-800 mb-4">
              How Blue Slip Inspections Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A blue slip (AUVIS inspection) checks your vehicle&apos;s safety and identity before registration in NSW. Here&apos;s the process:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: 1,
                title: 'Book Your Inspection',
                desc: "Call or SMS us with your suburb and vehicle details. We'll find a time that suits you—often the same day.",
                icon: Calendar,
              },
              {
                step: 2,
                title: 'We Inspect Your Vehicle',
                desc: 'Our AUVIS-authorised inspector checks safety systems, lights, brakes, tyres, and verifies your VIN and ownership documents.',
                icon: ShieldCheck,
              },
              {
                step: 3,
                title: 'Get Your Report',
                desc: "You'll receive your blue slip certificate (if passed) on the spot. Take it to Service NSW to complete your registration.",
                icon: FileCheck,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-brand-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <item.icon className="w-8 h-8 text-accent-500" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>

                  {/* Arrow Connector (except last item) */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2">
                      <Zap className="w-8 h-8 text-brand-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-2xl border-2 border-brand-200 p-8 max-w-4xl mx-auto shadow-lg"
          >
            <h4 className="font-bold text-gray-900 mb-6 text-xl flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-brand-600" />
              When You Need a Blue Slip:
            </h4>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                'Vehicle has never been registered in NSW (new imports, interstate transfers)',
                'Registration has been expired for more than 3 months',
                'Vehicle has been written off or had major structural repairs',
                'Building a custom or modified vehicle',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-6 italic bg-white/50 p-3 rounded-lg">
              💡 Note: A blue slip is valid for 42 days from the date of inspection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 -z-10" />

        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-800 via-accent-600 to-brand-800 mb-4">
              Why Choose Blue Slip Sydney?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make blue slip inspections simple, fast, and hassle-free.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              description="No surprises. We&apos;ll quote you a clear price before you book—government fees separate."
            />
            <Feature
              icon={ShieldCheck}
              title="AUVIS-Authorised Inspectors"
              description="All our inspectors are fully authorised by Transport for NSW to conduct blue slip inspections."
            />
            <Feature
              icon={Users}
              title="Friendly, Helpful Team"
              description="We explain the process, answer your questions, and help you understand what&apos;s needed."
            />
            <Feature
              icon={FileCheck}
              title="Fast Digital Paperwork"
              description="Get your certificate quickly—often on the day—so you can register your vehicle without delay."
            />
          </div>

          {/* Micro-CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="service-areas" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-200 rounded-full blur-3xl opacity-20 -z-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-20 -z-10" />

        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4 inline mr-2" />
              Coverage Area
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-800 via-brand-600 to-brand-800 mb-4">
              Blue Slip Sydney – Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re proud to serve Sydney&apos;s Inner West and nearby suburbs. Find your area below:
            </p>
          </motion.div>
          <ServiceAreas />
        </div>
      </section>

      {/* Pricing & What to Bring */}
      <section id="pricing" className="py-20 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-b from-brand-50 to-transparent -z-10" />

        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-800 via-brand-600 to-brand-800 mb-4">
              Blue Slip Pricing & Requirements
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-brand-50 to-white border-2 border-brand-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Blue Slip Pricing</h2>
                </div>
                <div className="mb-6">
                  <p className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-800 mb-2">
                    From ${SITE.PRICE_FROM}
                  </p>
                  <p className="text-gray-600 text-lg">for light vehicles (government fees separate)</p>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our fee covers the AUVIS inspection and certificate. Service NSW registration fees and stamp duty are additional. 
                  Call for a precise quote based on your vehicle type.
                </p>
                <a href={SITE.PHONE_LINK} className="block">
                  <Button variant="primary" size="lg" className="w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Get a Quote Now
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* What to Bring */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What to Bring</h2>
              </div>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Photo ID',
                    desc: "Driver's licence or passport",
                    icon: FileText,
                  },
                  {
                    title: 'Proof of Ownership',
                    desc: 'Bill of sale, receipt, or import documents',
                    icon: FileText,
                  },
                  {
                    title: 'Your Vehicle',
                    desc: 'Clean, accessible, and in safe working order',
                    icon: Car,
                  },
                ].map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                  >
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{item.title}</p>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-6 italic bg-brand-50 p-4 rounded-lg border border-brand-100">
                💡 We also inspect trailers and motorcycles. Call to confirm your requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Have Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-800 via-brand-600 to-brand-800 mb-4">
              Blue Slip FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about AUVIS inspections in Sydney
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/30 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 -z-10" />

        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
              ⭐⭐⭐⭐⭐ 5-Star Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-800 via-brand-600 to-brand-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from Sydney drivers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'James',
                suburb: 'Newtown',
                text: 'Needed a blue slip urgently and they fit me in same day. Super helpful team, explained everything clearly. Got my certificate and registered my car the next day.',
              },
              {
                name: 'Sarah',
                suburb: 'Marrickville',
                text: 'Really professional and friendly. They walked me through the whole blue slip process and made it stress-free. Highly recommend!',
              },
              {
                name: 'David',
                suburb: 'Alexandria',
                text: 'Fair price, quick turnaround, and great communication. Used them for my interstate transfer and couldn&apos;t be happier.',
              },
              {
                name: 'Emma',
                suburb: 'Redfern',
                text: 'I was worried my older vehicle wouldn&apos;t pass, but they gave honest advice and helped me fix the minor issues. Passed on the second inspection. Thanks guys!',
              },
              {
                name: 'Michael',
                suburb: 'St Peters',
                text: 'Local, reliable, and know their stuff. Best blue slip service in the Inner West.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Testimonial
                  name={testimonial.name}
                  suburb={testimonial.suburb}
                  text={testimonial.text}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Banner */}
      <section className="py-20 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-float" />
          <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-lg animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Need a Blue Slip Today?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Call us now or send a quick SMS to book your AUVIS inspection. We&apos;re here to help you get on the road fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={SITE.PHONE_LINK}>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-brand-700 hover:bg-gray-100 hover:scale-105 transition-all w-full shadow-2xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {SITE.PHONE}
                </Button>
              </a>
              <a href={`${SITE.SMS_LINK}?&body=${SMS_BODY}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-700 transition-all w-full shadow-2xl"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  SMS {SITE.MOBILE}
                </Button>
              </a>
            </div>
          </motion.div>
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
