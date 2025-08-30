# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS. Features smooth animations, dark/light theme toggle, and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Framer Motion powered animations throughout
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Work experience
│   ├── Education.tsx      # Education details
│   ├── Projects.tsx       # Portfolio projects
│   ├── Achievements.tsx   # Awards and recognition
│   ├── Contact.tsx        # Contact information
│   ├── Footer.tsx         # Footer section
│   ├── ThemeProvider.tsx  # Theme context
│   └── Analytics.tsx      # Google Analytics
├── public/                 # Static assets
│   ├── resume.pdf         # Resume file
│   └── og-image.jpg       # Open Graph image
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, tagline, social links
- `components/About.tsx` - Bio, skills, experience
- `components/Experience.tsx` - Work history
- `components/Education.tsx` - Educational background
- `components/Projects.tsx` - Portfolio projects
- `components/Achievements.tsx` - Awards and certifications
- `components/Contact.tsx` - Contact details

### Styling
- Modify `app/globals.css` for custom CSS
- Update Tailwind classes in components
- Customize color scheme in CSS variables

### Theme
- Modify `components/ThemeProvider.tsx` for theme customization
- Add new themes or modify existing ones

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build your project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure build settings

### Static Hosting
1. Build: `npm run build`
2. Upload the `out` folder to your hosting provider

## 📱 Responsive Design

The portfolio is designed to work seamlessly across all devices:
- **Mobile**: Optimized for small screens with touch-friendly interactions
- **Tablet**: Responsive grid layouts and navigation
- **Desktop**: Full-featured experience with hover effects

## 🎭 Animations

Built with Framer Motion for smooth, performant animations:
- **Page Transitions**: Smooth page loading and navigation
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive feedback on user interactions
- **Staggered Animations**: Sequential element reveals

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configuration:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Google Analytics
1. Get your Google Analytics ID
2. Add it to your environment variables
3. The Analytics component will automatically track page views

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)

---

**Built with ❤️ using modern web technologies**
