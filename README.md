# Tims Jetski Hire - Gold Coast

A comprehensive local SEO-optimized service website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📊 Website Statistics

- **Total Pages**: 590+
- **Services**: 12 jetski services
- **Locations**: 44 Gold Coast suburbs
- **Service + Location Combinations**: 528 unique pages
- **Core Pages**: 6 (Home, About, Contact, Services Index, Locations Index, Blog)
- **Dynamic Service Pages**: 12
- **Dynamic Location Pages**: 44

## 🎯 SEO Features

- Unique meta titles and descriptions for every page
- Local SEO optimization with service + location combinations
- Schema markup for LocalBusiness
- Mobile-responsive design
- Fast page load times with Next.js optimization
- Clean URL structure

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                    # Homepage
│   ├── about/page.tsx              # About page
│   ├── contact/page.tsx            # Contact page
│   ├── services/
│   │   ├── page.tsx                # Services index
│   │   └── [service]/page.tsx      # Individual service pages (12)
│   ├── locations/
│   │   ├── page.tsx                # Locations index
│   │   └── [location]/page.tsx     # Individual location pages (44)
│   ├── [slug]/page.tsx             # Service+Location combos (528)
│   └── blog/
│       ├── page.tsx                # Blog index
│       └── [slug]/page.tsx         # Individual blog posts
├── components/
│   ├── Header.tsx                  # Navigation header with mobile menu
│   ├── Footer.tsx                  # Site footer
│   ├── ContactForm.tsx             # Lead capture form
│   ├── ServiceCard.tsx             # Service display component
│   ├── LocationCard.tsx            # Location display component
│   └── BlogCard.tsx                # Blog post preview
├── lib/
│   ├── services.ts                 # Service data utilities
│   ├── locations.ts                # Location data utilities
│   ├── blog.ts                     # Blog utilities
│   ├── markdown.ts                 # Markdown to HTML converter
│   └── images.ts                   # Image URL management
├── content/
│   └── blog/                       # Blog posts (JSON format)
├── public/
│   └── images/                     # Static images
├── services.json                   # Service definitions
└── locations.json                  # Location definitions
```

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **React** - UI library

## 📞 Contact Integration

The contact form integrates with the EasyGrow API:
- Business ID: `cmjxwtlg80002gzar40gd2owu`
- API Endpoint: `https://www.easygrow.contractors/api/leads/submit`

## 🎨 Design Features

- Professional blue color scheme
- Mobile-first responsive design
- Click-to-call buttons on all pages
- Trust signals (reviews, years in business, certifications)
- High-quality images from Unsplash
- Clear call-to-action buttons

## 📱 Pages Overview

### Core Pages
- **Homepage**: Hero, services overview, locations, testimonials
- **About**: Company story, team, values, certifications
- **Contact**: Contact form, business hours, FAQs
- **Services Index**: Grid of all 12 services
- **Locations Index**: Grid of all 44 locations
- **Blog**: Blog posts and categories

### Dynamic Pages
- **Service Pages**: Detailed info for each of 12 services
- **Location Pages**: Local info for each of 44 locations
- **Service+Location Pages**: 528 unique combinations for maximum SEO

## 🚢 Deployment

This site is ready to deploy to Vercel:

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

No additional configuration needed - Next.js handles SSR natively.

## 📈 SEO Strategy

Each service+location page targets keywords like:
- "jetski rental in surfers paradise"
- "guided jetski tours in broadbeach"
- "jetski lessons in main beach"

This creates 528+ entry points for search engines, maximizing local SEO coverage across the Gold Coast.

## 📝 Adding Blog Posts

Create JSON files in `content/blog/`:

```json
{
  "slug": "your-post-slug",
  "title": "Your Post Title",
  "excerpt": "Brief description",
  "content": "Full markdown content",
  "date": "2024-01-01",
  "author": "Author Name",
  "featuredImage": "https://images.unsplash.com/...",
  "images": [],
  "keywords": ["keyword1", "keyword2"],
  "metaDescription": "SEO description"
}
```

## 📧 Support

For questions or support, contact the development team.

---

Built with ❤️ for Tims Jetski Hire
