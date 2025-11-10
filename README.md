# Graceful Pet Care Website

A modern, responsive website for Graceful Pet Care - a professional pet sitting business in Ashford, Kent.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Google Fonts** (Inter + Nunito)

## Brand Identity

- **Primary Color:** #B87078 (dusty rose/mauve)
- **Secondary Color:** #F5F5F0 (cream/off-white)
- **Typography:** Nunito for headings, Inter for body text
- **Design:** Warm, trustworthy, friendly but professional

## Project Structure

```
client-graceful-petcare/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Grace page
│   ├── contact/           # Contact page with form
│   ├── faq/               # FAQ page with accordion
│   ├── services/          # Services detail page
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Button.tsx
│   ├── ContactForm.tsx
│   ├── FAQItem.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   └── TrustBadge.tsx
├── data/                  # JSON data files
│   ├── faq.json
│   ├── services.json
│   └── testimonials.json
└── public/                # Static assets
    └── images/            # Logo and images go here
```

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Features

- Fully responsive design (mobile-first)
- SEO optimized with metadata
- Accessible (ARIA labels, keyboard navigation)
- Data-driven architecture (easy to update content)
- Modern UI with smooth transitions
- Contact form ready for EmailJS integration

## Pages

1. **Homepage** - Hero, services overview, testimonials, trust badges, CTAs
2. **Services** - Detailed breakdown of all pet care services
3. **About** - Grace's story, experience, and values
4. **FAQ** - Common questions with accordion UI
5. **Contact** - Contact form and contact information

## Assets Needed

- `heartpaw.png` - Logo (place in `/public/images/`)
- `Graceful_Pet_Care_flyer_page_1.png` - Reference
- `Graceful_Pet_Care_flyer_page_2.png` - Reference

## Next Steps

1. Upload logo (`heartpaw.png`) to `/public/images/`
2. Replace placeholder Pexels images with high-quality pet photos
3. Set up EmailJS for contact form functionality
4. Test on multiple devices and browsers
5. Deploy to Vercel or hosting platform

## Contact Information

- **Email:** hello@gracefulpetcare.co.uk
- **Location:** Ashford and surrounding villages, Kent
- **Experience:** 15+ years
- **Insurance:** Fully insured

## Git Workflow

- Signed commits required (`git commit -S`)
- Will push to `lawsonscreative/client-graceful-petcare` on GitHub

---

Built with care by Lawson's Creative
