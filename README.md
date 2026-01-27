# Portfolio Website - Frontend

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and an elegant dark theme.

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Router DOM** - Client-side routing

## 📋 Features

- ✨ Modern, responsive design with dark theme
- 🎨 Gradient effects and smooth animations
- 📱 Mobile-friendly navigation
- 🔥 Fast development with Vite HMR
- 🎯 Active link indicators with animated underlines
- 💼 Sections: Hero, About, Services, Skills, Projects, Contact

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation component
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Services.jsx     # Services section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Projects.jsx     # Projects section
│   │   ├── Contact.jsx      # Contact section
│   │   └── Footer.jsx       # Footer component
│   ├── assets/              # Images and static assets
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies

```

## 🎨 Key Components

### Navbar
- Fixed navigation bar with blur effect
- Centered navigation links with animated underlines
- Home icon button
- Responsive mobile menu
- Active section tracking

### Hero
- Animated typing effect for job titles
- Social media links
- Call-to-action buttons
- Profile image with gradient effects

### Other Sections
- About: Personal information and background
- Services: Offered services showcase
- Skills: Technical skills display
- Projects: Portfolio projects
- Contact: Contact form and information

## 🔧 Configuration

The project uses Vite with React plugin configured to handle JSX in `.js` files:

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
  },
  server: {
    port: 3000,
    open: true
  }
})
```

## 🎯 Development

The dev server runs on `http://localhost:3000` with hot module replacement enabled.

## 📝 License

Private project - All rights reserved

## 👤 Author

**Nana Kofi Agyin**

---

Built with ❤️ using React and Vite