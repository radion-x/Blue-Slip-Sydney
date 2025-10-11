# Blue Slip Sydney – Landing Page

A conversion-optimised, single-page Next.js 14 website for **Blue Slip Sydney** (Advanced Auto Centre), specialising in AUVIS blue slip inspections in Sydney.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 2. Configure Pricing

**Important:** Before launching, edit `site.config.ts` and replace `<REPLACE_PRICE>` with your actual inspection fee:

```typescript
// site.config.ts
export const SITE = {
  // ...
  PRICE_FROM: '150', // ← Update this!
  // ...
}
```

### 3. Run Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production

```bash
pnpm build
pnpm start
```

## 📋 Features

- **Next.js 14 App Router** – Modern React framework with server components
- **TypeScript** – Type-safe code
- **Tailwind CSS** – Blue-themed design system
- **Responsive Design** – Mobile-first, looks great on all devices
- **SEO Optimised** – Metadata, JSON-LD schema, sitemap, robots.txt
- **Accessibility** – WCAG AA contrast, semantic HTML, keyboard navigation
- **Quote Form** – Client-side validation with Zod + React Hook Form
- **Sticky Mobile CTAs** – Persistent call/SMS buttons on mobile
- **Trust Signals** – Reviews, AUVIS badge, service areas

## 📁 Project Structure

```
blue-slip-sydney/
├── app/
│   ├── (site)/
│   │   └── page.tsx          # Main landing page
│   ├── api/
│   │   └── quote/
│   │       └── route.ts      # Quote form API endpoint
│   └── layout.tsx            # Root layout with SEO metadata
├── components/
│   ├── Button.tsx            # Reusable button component
│   ├── Feature.tsx           # Feature card
│   ├── Faq.tsx              # Accordion FAQ
│   ├── QuoteForm.tsx        # Quote form with validation
│   ├── ServiceAreas.tsx     # Service area grid
│   ├── StickyBar.tsx        # Mobile sticky CTA bar
│   ├── Testimonial.tsx      # Customer review card
│   └── TrustStrip.tsx       # Trust badges
├── lib/
│   └── utils.ts             # Utility functions (cn)
├── public/
│   ├── robots.txt           # Search engine instructions
│   └── sitemap.xml          # Sitemap for SEO
├── styles/
│   └── globals.css          # Global styles & Tailwind
├── site.config.ts           # Business details & config
├── tailwind.config.ts       # Tailwind theme (blue palette)
└── package.json
```

## ⚙️ Configuration

### Update Business Details

All business information is centralized in `site.config.ts`:

```typescript
export const SITE = {
  PHONE: '(02) 9516 3366',
  MOBILE: '0412 785 767',
  ADDRESS: '63–65 Campbell Street, St Peters NSW 2044',
  ABN: '13 580 382 185',
  PRICE_FROM: '<REPLACE_PRICE>', // ← Update this!
  // ... see file for all options
}
```

### Update Service Areas

To add or remove suburbs, edit the `SERVICE_AREAS` array in `site.config.ts`:

```typescript
export const SERVICE_AREAS = [
  'St Peters',
  'Newtown',
  'Alexandria',
  // Add more suburbs here
]
```

### Update SEO Metadata

SEO settings are in `app/layout.tsx`. Update the title, description, and Open Graph tags as needed.

### Configure Quote Form API

The quote form currently logs submissions to the console. To add email/SMS notifications:

1. Open `app/api/quote/route.ts`
2. Find the `// TODO: Add integrations here` comment
3. Add your integration code (e.g., SendGrid, Twilio, database save)

Example:

```typescript
// app/api/quote/route.ts
await sendEmailNotification(validatedData)
await sendSMS(validatedData.mobile, 'Thanks for your quote!')
```

## 🎨 Customization

### Brand Colors

Blue palette is defined in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    600: '#0A63D8',
    700: '#084FB0',
    800: '#073D8A',
  },
  accent: '#0EA5E9',
}
```

### Copy & Content

All page copy is in `app/(site)/page.tsx`. Edit headings, paragraphs, and CTAs directly in this file.

### Components

All UI components are in `/components`:

- `Button.tsx` – Primary, outline, and ghost variants
- `QuoteForm.tsx` – Form fields and validation rules
- `Faq.tsx` – FAQ accordion items
- `Testimonial.tsx` – Customer review cards

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

Vercel will automatically detect Next.js and configure everything.

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`

### Deploy to Other Hosts

Build the site:

```bash
pnpm build
```

Then deploy the `.next` folder and run:

```bash
pnpm start
```

## 📊 SEO & Schema

The site includes:

- **Title & Meta Tags** – Optimised for "blue slip sydney"
- **Open Graph & Twitter Cards** – Social sharing previews
- **JSON-LD Schema**:
  - `LocalBusiness` – Business details, location, hours
  - `Service` – Blue slip (AUVIS) service
  - `FAQPage` – Structured FAQ data
- **Sitemap** – `/public/sitemap.xml`
- **Robots.txt** – `/public/robots.txt`

## 🧪 Testing

### Check Accessibility

Run Lighthouse in Chrome DevTools:

1. Right-click → Inspect
2. Click "Lighthouse" tab
3. Select "Accessibility" and "SEO"
4. Click "Generate report"

Aim for 90+ scores.

### Validate Schema

Test JSON-LD schema at [schema.org validator](https://validator.schema.org/)

### Mobile Testing

Test on real devices or use Chrome DevTools Device Mode (Cmd+Shift+M).

## 📞 Support

For questions about this codebase, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## 📝 License

Proprietary – © 2025 Advanced Auto Centre

---

**Created for Blue Slip Sydney** – St Peters, NSW • AUVIS-authorised blue slip inspections

