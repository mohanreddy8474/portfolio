# Personal Portfolio - Sai Mohan Reddy

A modern, responsive personal portfolio website built with Next.js, showcasing Python development, AI/ML projects, and full-stack applications.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Google Analytics**: Built-in analytics integration
- **GitHub Pages Ready**: Configured for static deployment

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Work experience
│   ├── Education.tsx      # Education details
│   ├── Projects.tsx       # Project showcase
│   ├── Achievements.tsx   # Awards & certifications
│   ├── Contact.tsx        # Contact information
│   ├── Footer.tsx         # Footer section
│   ├── ThemeProvider.tsx  # Theme context
│   └── Analytics.tsx      # Google Analytics
├── public/                 # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohanreddy8474/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to GitHub Pages

### Prerequisites
- GitHub repository named `portfolio`
- GitHub Pages enabled in repository settings

### Deployment Steps

1. **Build and Export**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (or your preferred branch)
   - Folder: `/ (root)`

4. **Update Repository Settings**
   - Enable GitHub Pages
   - Set branch to deploy from
   - Your site will be available at: `https://mohanreddy8474.github.io/portfolio`

### Alternative: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## ⚙️ Configuration

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Customization
- **Personal Info**: Update content in component files
- **Styling**: Modify `tailwind.config.js` and `globals.css`
- **Analytics**: Update Google Analytics ID in `Analytics.tsx`
- **SEO**: Update metadata in `app/layout.tsx`

## 📱 Sections

- **Hero**: Introduction, tagline, and call-to-action
- **About**: Professional bio, skills, and experience
- **Experience**: Work history and responsibilities
- **Education**: Academic background and achievements
- **Projects**: Portfolio of projects with tech stacks
- **Achievements**: Awards, certifications, and publications
- **Contact**: Contact information and social links

## 🎨 Design Features

- **Minimalist**: Clean, professional design
- **Responsive**: Mobile-first responsive design
- **Accessible**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized for fast loading
- **SEO**: Search engine optimized with proper meta tags

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files
- `npm run deploy` - Build and prepare for GitHub Pages

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: ssmohanreddy@gmail.com
- **LinkedIn**: [mohan8474](https://www.linkedin.com/in/mohan8474/)
- **GitHub**: [mohanreddy8474](https://github.com/mohanreddy8474)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
