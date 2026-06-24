<<<<<<< HEAD
# pahanmi-Hire
Pahanmi Hire - AI-Powered Recruitment &amp; Career Intelligence Platform.
=======
# Pahanmi Hire - AI-Powered Recruitment & Career Intelligence Platform

A modern, responsive React.js website built with Vite, Tailwind CSS, Framer Motion, and React Icons.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

The application will be available at `http://localhost:5173/`

## 📁 Project Structure

```
pahanmi-hire/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with mobile menu
│   │   ├── Hero.jsx             # Hero section with statistics
│   │   ├── About.jsx            # About section with mission/vision
│   │   ├── Features.jsx         # 13 AI modules display
│   │   ├── Technology.jsx       # Technology stack section
│   │   ├── Roadmap.jsx          # Commercialization roadmap
│   │   ├── CompetitiveAdvantage.jsx  # Why Pahanmi Hire
│   │   ├── CTA.jsx              # Call-to-action section
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer with links
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Vite entry point
│   └── index.css                # Tailwind CSS styles
├── public/
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # This file
```

## 🎨 Features

### Design & UX
- **Modern SaaS Design**: Clean, professional interface inspired by Bigspring template
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Professional Color Palette**: Modern AI/tech colors (blue, purple accents)
- **Hover Effects**: Interactive elements with smooth transitions

### Sections

1. **Navbar** - Sticky navigation with mobile menu toggle
2. **Hero** - AI platform headline with animated statistics counters
3. **About** - Mission, vision, and core innovation overview
4. **Features** - 13 AI-powered modules with icons and descriptions
5. **Technology** - Tech stack and architecture information
6. **Roadmap** - Timeline with 3 phases of development
7. **Competitive Advantage** - Why Pahanmi Hire stands out
8. **CTA** - Call-to-action section for conversions
9. **Contact** - Contact form with validation
10. **Footer** - Links, social media, and copyright info

## 🛠️ Technology Stack

- **React.js 18.2** - UI library
- **Vite 5.0** - Build tool and dev server
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **React Icons 4** - Icon library
- **React Router DOM 6** - Routing (prepared for future use)

## 📦 Key Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4",
  "react-icons": "^4.12.0",
  "tailwindcss": "^3.3.6",
  "vite": "^5.0.2"
}
```

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { /* Blue shades */ },
  accent: { /* Purple shades */ },
  secondary: { /* Gray shades */ }
}
```

### Content
Update component files in `src/components/` to modify:
- Text content
- Section titles
- Feature descriptions
- Contact information
- Social media links

### Animations
Modify Framer Motion configurations in components:
- Initial/animate/exit states
- Transition timings
- Variant definitions

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (lg, xl)

All sections are optimized for each breakpoint.

## 🔄 Smooth Scroll Navigation

The navbar and CTA buttons feature smooth scroll navigation:
- Click any nav link to smoothly scroll to that section
- Mobile menu auto-closes when a link is clicked
- Scroll-to-top button in footer

## 📝 Form Handling

The contact form includes:
- Field validation (name, email, subject, message required)
- Company field (optional)
- Success message on submission
- Form reset after 3 seconds

To integrate with backend:
1. Modify `Contact.jsx` handleSubmit function
2. Add API endpoint for form submission
3. Implement error handling

## 🚀 Production Build

```bash
# Create optimized production build
npm run build

# Preview production version
npm run preview
```

Build output will be in the `dist/` folder.

## 📊 Performance Optimization

- Code splitting by routes (ready for implementation)
- Image optimization recommendations
- Lazy loading for sections
- CSS-in-JS with Tailwind (no runtime overhead)

## 🔐 Best Practices Implemented

✅ Semantic HTML
✅ Accessibility considerations
✅ Mobile-first responsive design
✅ Component reusability
✅ Clean code structure
✅ Performance optimized
✅ SEO-friendly structure
✅ Smooth user experience

## 📄 License

© 2026 Pahanmi Hire. All rights reserved.

Presented by: Suchith Gunarathna
Company: Pahanmi (Pvt) Ltd / Astakon Labs
Website: https://astakonlabs.com

## 🎯 Tagline

**Empowering Talent. Evolving Recruitment. Enabling Futures.**

---

## Support

For support, contact: hello@pahanmihire.com

Happy coding! 🚀
>>>>>>> 5a3adef (updode)
