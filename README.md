# BKS Portfolio - Security Analyst & Cloud Engineer

A modern, interactive portfolio website built with React, Three.js, and Framer Motion. Features immersive 3D backgrounds, smooth animations, and a comprehensive showcase of professional skills and projects.

## 🚀 Features

- **Interactive 3D Background** - Particle system powered by Three.js and React Three Fiber
- **Smooth Animations** - Beautiful transitions using Framer Motion
- **Dark/Light Theme** - Toggle between themes with persistent storage
- **Responsive Design** - Optimized for all device sizes
- **Contact Form** - Integrated with EmailJS for seamless communication
- **Project Portfolio** - Dynamic project showcase with filtering
- **SEO Optimized** - Meta tags, structured data, and social sharing
- **Performance Optimized** - Code splitting, lazy loading, and bundle optimization
- **Error Boundaries** - Graceful error handling and recovery
- **TypeScript Ready** - Full TypeScript configuration included

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1, Vite 7.1.7
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Styling**: CSS3 with CSS Variables
- **Build Tools**: Vite with optimized configuration
- **Type Safety**: TypeScript support
- **Email Service**: EmailJS integration
- **SEO**: React Helmet Async

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react_app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎯 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://emailjs.com)
2. Update the EmailJS credentials in `src/components/Contact.jsx`:
```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Replace with your service ID
  'YOUR_TEMPLATE_ID',    // Replace with your template ID
  form.current,
  'YOUR_PUBLIC_KEY'      // Replace with your public key
)
```

### SEO Configuration
Update the SEO settings in `src/components/SEOHead.jsx`:
- Update the domain URL
- Customize meta descriptions
- Add social media handles
- Configure structured data

### Project Customization
Edit the project data in `src/components/Projects.jsx` to showcase your own projects.

## 🎨 Customization

### Theme Colors
Modify CSS variables in `src/App.css`:
```css
:root {
  --gradient-start: #667eea;
  --gradient-end: #764ba2;
  /* Add your custom colors */
}
```

### Content Updates
- **Hero Section**: Update `src/components/Hero.jsx`
- **Timeline**: Modify `src/components/Timeline.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Services**: Update `src/components/Services.jsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🚀 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Time**: <3s on standard connections
- **Accessibility**: WCAG 2.1 compliant

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - TypeScript type checking
- `npm run analyze` - Analyze bundle size

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or collaborations, reach out through the contact form on the website or via:
- Email: contact@yourportfolio.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ using React and Three.js
