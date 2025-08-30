# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with dark/light mode toggle, smooth animations, and comprehensive sections showcasing professional experience, projects, and skills.

## ✨ Features

- **Modern Design**: Clean, minimalist design inspired by hugo-profile.netlify.app
- **Responsive**: Mobile-first responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Built with Next.js for optimal performance
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## 🚀 Sections

1. **Hero Section** - Introduction with call-to-action buttons
2. **About Me** - Professional bio and skills
3. **Experience** - Work history and responsibilities
4. **Education** - Academic background and achievements
5. **Projects** - Portfolio of projects with tech stack
6. **Achievements** - Awards, certifications, and recognition
7. **Blog** - Latest blog posts and articles
8. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Netlify/Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Personal Information
Update the following files with your personal information:

- `app/page.tsx` - Main page content
- `components/Hero.tsx` - Hero section details
- `components/About.tsx` - About section content
- `components/Experience.tsx` - Work experience
- `components/Education.tsx` - Educational background
- `components/Projects.tsx` - Project portfolio
- `components/Achievements.tsx` - Awards and certifications
- `components/Blog.tsx` - Blog posts
- `components/Contact.tsx` - Contact information

### Social Links
Update social media links in:
- `components/Hero.tsx`
- `components/Footer.tsx`

### Google Analytics
1. Get your Google Analytics measurement ID
2. Update `components/Analytics.tsx` with your ID
3. Replace `G-XXXXXXXXXX` with your actual ID

### Resume
1. Add your resume PDF to the `public/` folder
2. Name it `resume.pdf` or update the links in the code

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Vercel
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### GitHub Pages
1. Update `next.config.js` for static export
2. Add `export` script to `package.json`
3. Build and deploy

## 📱 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary color palette
  }
}
```

### Fonts
Change fonts in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
```

### Animations
Modify animations in `tailwind.config.js` and component files using Framer Motion.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
