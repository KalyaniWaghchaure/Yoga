# Yoga Zen - Next.js Wellness Website

A responsive and interactive yoga and wellness website built with Next.js and TailwindCSS, featuring smooth animations powered by Framer Motion.

## 🧘 Live Demo

https://kalyaniwaghchaure.github.io/Yoga/

## ✨ Features

- **Responsive Design**: Mobile-first approach with adaptive layouts for all devices
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Dark Mode**: Toggle between light and dark themes
- **Performance Optimized**: Lazy-loaded images and optimized assets
- **Fully Functional**: Working navigation, testimonial carousel, and contact form

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Deployment**: Vercel

## 📋 Pages

- **Home**: Hero section, benefits overview, testimonials, services, and membership plans
- **Programs/Classes**: Filterable grid of yoga and wellness programs
- **Program Detail**: Individual program information with enrollment option
- **Blog**: Collection of wellness articles (bonus feature)

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KalyaniWaghchaure/Yoga.git
   cd yoga-wellness-website/nextjs-version
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   **or**
   ```bash
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   **or**
   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Project Structure

```
nextjs-version/
│
├── public/               # Static assets
│   ├── images/
│   └── favicon.ico
│
├── src/
│   ├── app/              # App router pages
│   ├── components/       # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Sidebar.js
│   │   └── ...
│   │
│   ├── context/          # React Context for state management
│   │   └── ThemeContext.js
│   │
│   └── styles/           # Global styles
│       └── globals.css
│
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Project dependencies
```

## 🌙 Dark Mode Implementation

The website includes a functional dark mode toggle that persists user preference through local storage. The theme context manages the current theme state and provides a toggle function accessible throughout the application.

## 📱 Responsive Design

The website follows a mobile-first approach with breakpoints at:

- Small devices: Default styling
- Medium devices: md (768px and above)
- Large devices: lg (1024px and above)
- Extra large devices: xl (1280px and above)

## ⚡ Performance Optimizations

- Images are optimized using Next.js Image component
- Components are lazy-loaded where appropriate
- CSS is minimized in production build
- Fonts are preloaded

## 🧩 Additional Features

- **Animated Scroll**: Sections animate as they enter the viewport
- **Interactive Elements**: Hover effects on cards and buttons
- **Form Validation**: Client-side validation for the contact form
- **Blog Section**: Sample articles with featured images

## 🔮 Future Enhancements

- Authentication system for member accounts
- Online booking system for classes
- Integrated payment gateway for memberships
- Video tutorials library

## This project is developed in collaboration with Team Growthzi.
