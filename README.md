# Sahil's Notes

A minimalist personal blog built with Astro, inspired by clean, distraction-free design principles.

## Features

- ✨ **Minimalist Design**: Clean, readable typography with system fonts
- 🌙 **Dark Mode**: Automatic dark mode based on system preferences
- 📱 **Mobile-First**: Responsive design that works on all devices
- 🚀 **Fast**: Zero JavaScript by default, static site generation
- 📝 **Markdown Support**: Write posts in Markdown
- 🏷️ **Tags & Categories**: Organize posts with tags and categories
- 📡 **RSS Feed**: Available at `/rss.xml`
- ♿ **Accessible**: Semantic HTML and proper ARIA labels
- 🔍 **SEO-Friendly**: Proper meta tags and semantic structure

## Stack

- **Framework**: [Astro](https://astro.build) v5
- **Styling**: Plain CSS with CSS variables
- **Content**: Markdown files with frontmatter
- **Deployment**: Vercel-ready

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── content/
│   │   └── blog/       # Blog posts (Markdown)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── essays.astro     # All posts
│   │   ├── shelf.astro      # Recommended readings
│   │   ├── contact.astro    # Contact page
│   │   ├── blog/
│   │   │   └── [slug].astro # Individual post page
│   │   └── rss.xml.ts       # RSS feed
│   └── styles/
│       └── global.css       # Global styles
└── astro.config.mjs
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your blog.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Writing Posts

Create a new Markdown file in `src/content/blog/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2024-01-15
tags: ["tag1", "tag2"]
category: "tech" # Options: spirituality, finance, tech, misc
---

Your post content here in Markdown...
```

### Post Categories

- `spirituality`: Posts about meaning, purpose, and inner growth
- `finance`: Posts about money, investing, and financial independence
- `tech`: Posts about software, systems, and technology
- `misc`: Everything else

## Customization

### Site Name and Tagline

Edit `src/layouts/BaseLayout.astro` to change:
- Site name (currently "Sahil's Notes")
- Tagline (currently "Notes on spirit, money, and machines.")

### Colors and Typography

Edit `src/styles/global.css` to customize:
- Color scheme (light/dark mode colors)
- Typography (font sizes, line heights)
- Spacing (margins, padding)

### Site URL

Update `astro.config.mjs` with your actual domain:

```javascript
export default defineConfig({
  site: 'https://your-domain.vercel.app',
});
```

Also update the RSS feed in `src/pages/rss.xml.ts` if needed.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Astro and configure the build

The `vercel.json` file is included for optimal configuration.

### Other Platforms

Astro sites can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static host

## Design Philosophy

This blog follows minimalist principles:

- **Clarity over decoration**: No unnecessary visual elements
- **Content over complexity**: Focus on readability
- **Reading over distraction**: Minimal navigation, no ads, no tracking

The design is inspired by [bearblog.dev](https://bearblog.dev) and similar minimalist blog platforms.

## License

MIT
