# Spectro Landing Page

A modern marketing landing page built with Next.js 14, TypeScript, and CSS Modules.

## Features

- ✨ Modern, responsive design with purple gradient background
- 🎨 Clean white content card layout
- 📱 Fully responsive for all screen sizes
- ⚡ Optimized with Next.js Image component
- 🔤 Google Fonts integration (Inter)
- 🎯 Semantic HTML structure
- ♿ Accessibility best practices

## Project Structure

```
spectro/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Main landing page
│   ├── page.module.css    # Page styles
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Header with logo and navigation
│   ├── Header.module.css
│   ├── Hero.tsx           # Hero section with headline and CTA
│   ├── Hero.module.css
│   ├── ImageSection.tsx   # Circular image with decorative shapes
│   └── ImageSection.module.css
├── public/                # Static assets
│   └── hero-placeholder.svg  # Placeholder image (replace with your design)
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Replace the placeholder image:

Replace `/public/hero-placeholder.svg` with your design image. The image should be:
- Square aspect ratio (recommended: 500x500px or larger)
- Named `hero-image.jpg` (or update the path in `components/ImageSection.tsx`)

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Customization

### Colors

The landing page uses a purple gradient theme. To customize colors, update the gradient values in:
- `app/page.module.css` - Main background gradient
- `components/Header.module.css` - Logo gradient
- `components/Hero.module.css` - Highlight text and button gradient
- `components/ImageSection.module.css` - Decorative shapes

### Content

Edit the content in:
- `components/Hero.tsx` - Headline, subtext, and CTA button text
- `components/Header.tsx` - Logo text and navigation links

### Typography

The project uses Inter font from Google Fonts. To change the font, update `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
const yourFont = YourFont({ subsets: ['latin'] })
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

For other deployment platforms, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Performance

- Images are optimized using Next.js Image component
- CSS Modules for scoped styling
- Server-side rendering for better SEO
- Code splitting and lazy loading built-in

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

