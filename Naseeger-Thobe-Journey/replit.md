# NASEEGER — نَسِيجَر | Lavender Thobe House

## Project Overview

An immersive 3D e-commerce website for **NASEEGER** (نَسِيجَر), a premium Saudi Thobe brand. The site features deep 3D parallax effects, Najdi/Diriyah heritage aesthetics, interactive 3D fabric cards, and glass-morphism navigation.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design tokens
- **3D**: Three.js + React Three Fiber (@react-three/fiber@8, @react-three/drei@9, three@0.168)
- **Animation**: Framer Motion
- **Backend**: Express.js (minimal - no database, static site)
- **Routing**: Wouter

## Key Design Tokens

- **Forest Green** (#0d1f16, #1a3a2a, #1e4a30) - dominant background
- **Lavender Purple** (#7b52ab, #5a3b7d, #a07fd0) - buttons and accents
- **Lavender Gold** (#c9a84c) - headings and borders
- **Cream** (#f5f0e8) - primary text
- **Fonts**: Cinzel (headings), Cormorant Garamond (body), Amiri (Arabic), Montserrat (UI)

## Architecture

### Pages
- `client/src/pages/Home.tsx` - Single landing page

### Components
- `Navigation.tsx` - Sticky glass-morphism header
- `HeroSection.tsx` - Full-screen hero with floating logo, parallax, Diriyah patterns
- `CollectionsSection.tsx` - 3 seasonal collection cards with parallax
- `FabricCards3D.tsx` - 6 interactive 3D fabric cards with Three.js canvas (WebGL fallback)
- `HeritageSection.tsx` - Ad-Diriyah inspired heritage section with SVG skyline
- `TestimonialsSection.tsx` - Rotating testimonials from Saudi customers
- `AboutSection.tsx` - Brand story, craft process steps
- `Footer.tsx` - Full footer with navigation links
- `ScrollProgress.tsx` - Thin progress bar at top

## Assets
- Logo: `attached_assets/Gemini_Generated_Image_jlg20gjlg20gjlg2_1773193759708.png`
- Fabric texture: `attached_assets/8c476e39-fd37-4712-b181-3216b93b3148_1773193733604.jpg`

## Running

```bash
npm run dev
```

Serves on port 5000 (Express + Vite combined).

## Notes

- WebGL canvas has error boundary — gracefully falls back to CSS gradient cards if WebGL unavailable
- All sections have smooth scroll navigation
- Diriyah architectural patterns implemented as inline SVGs
- All interactive elements have `data-testid` attributes
- Custom scrollbar and selection highlight styles
