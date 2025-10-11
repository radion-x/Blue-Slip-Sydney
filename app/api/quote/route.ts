import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Quote form schema validation
const quoteSchema = z.object({
  name: z.string().min(2),
  mobile: z.string().regex(/^04\d{8}$/),
  suburb: z.string().min(1),
  vehicleType: z.string().min(1),
  preferredTime: z.enum(['today', 'tomorrow', 'this-week', 'flexible']),
  notes: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the input
    const validatedData = quoteSchema.parse(body)

    // Log the quote (in production, you'd send email/SMS/save to DB)
    console.log('📋 New Blue Slip Quote Request:', {
      timestamp: new Date().toISOString(),
      ...validatedData,
    })

    // TODO: Add integrations here
    // - Send email notification to business
    // - Send SMS to customer and/or business
    // - Save to database
    // - Add to CRM
    // Example:
    // await sendEmailNotification(validatedData)
    // await sendSMS(validatedData.mobile, 'Thanks for your quote request!')

    return NextResponse.json(
      {
        ok: true,
        message: 'Quote request received successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Quote API Error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Invalid form data',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        ok: false,
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}
