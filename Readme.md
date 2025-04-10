# Akshat Sahu - Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, enterprise-grade portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This project showcases professional web development practices, performance optimization, and modern UI/UX design principles.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Performance Optimized**: 
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - Image optimization
  - Code splitting
  - Vercel Analytics and Speed Insights integration
- **Enterprise-Grade UI Components**:
  - Comprehensive shadcn/ui component library
  - Radix UI primitives for accessibility
  - Framer Motion animations
  - Responsive design
- **Developer Experience**:
  - TypeScript for type safety
  - ESLint for code quality
  - Prettier for code formatting
  - Husky for git hooks
- **Security**:
  - Content Security Policy (CSP)
  - HTTPS enforcement
  - XSS protection
  - CSRF protection
- **Accessibility**:
  - WCAG 2.1 compliance
  - ARIA labels
  - Keyboard navigation
  - Screen reader support

## 📋 Prerequisites

- Node.js 18.17 or later
- pnpm 8.0 or later (recommended)
- Git

## 🛠️ Installation

### Option 1: Clone Repository

```bash
git clone https://github.com/yourusername/tech-portfolio.git
cd tech-portfolio
```

### Option 2: Download ZIP

1. Download the ZIP file from the repository
2. Extract to your preferred location
3. Open terminal in the extracted folder

### Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

## 🚀 Development

### Environment Setup

1. Create a `.env.local` file in the root directory
2. Add required environment variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-ga-id
```

### Development Server

```bash
# Using pnpm (recommended)
pnpm dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
# Build
pnpm build

# Start production server
pnpm start
```

## 🏗️ Project Architecture

```plaintext
portfolio-website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── sections/         # Page sections
├── lib/                  # Utility functions
├── hooks/               # Custom React hooks
├── styles/              # Global styles
├── public/              # Static assets
└── types/               # TypeScript types
```

## 🔧 Configuration

### TypeScript Configuration

Located in `tsconfig.json`:
- Strict type checking
- Path aliases
- Module resolution settings

### Tailwind Configuration

Located in `tailwind.config.ts`:
- Custom theme
- Plugin configuration
- Responsive breakpoints

### Next.js Configuration

Located in `next.config.mjs`:
- Image optimization
- Security headers
- Environment variables

## 📦 Dependencies

### Core Dependencies

- **Next.js 15.2.4**: React framework
- **React 19**: UI library
- **TypeScript 5**: Type safety
- **Tailwind CSS 3.4.17**: Utility-first CSS

### UI Components

- **shadcn/ui**: Component library
- **Radix UI**: Accessible primitives
- **Framer Motion**: Animations
- **Lucide React**: Icons

### Development Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **TypeScript**: Type checking

## 🔒 Security

### Implemented Security Measures

1. **Content Security Policy (CSP)**
   - Strict CSP headers
   - Resource restrictions
   - Inline script prevention

2. **Authentication & Authorization**
   - Form validation
   - CSRF protection
   - Rate limiting

3. **Data Protection**
   - Input sanitization
   - XSS prevention
   - Secure headers

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run e2e tests
pnpm test:e2e

# Run with coverage
pnpm test:coverage
```

## 📈 Performance Optimization

1. **Code Splitting**
   - Dynamic imports
   - Route-based splitting
   - Component lazy loading

2. **Image Optimization**
   - Next.js Image component
   - WebP format
   - Responsive images

3. **Caching Strategy**
   - Static generation
   - Incremental static regeneration
   - API route caching

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   pnpm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### CI/CD Pipeline

1. **GitHub Actions**
   - Automated testing
   - Build verification
   - Deployment automation

2. **Quality Gates**
   - Code coverage
   - Performance metrics
   - Security scanning

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and analytics
- All contributors and supporters

---

Built with ❤️ by Akshat Sahu