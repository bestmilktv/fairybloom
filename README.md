# Fairy Bloom - Next.js Shopify Integration

A modern, production-ready Next.js application with Shopify Storefront API integration, featuring a beautiful cart sidebar and account management.

## ✨ Features

- **Modern UI**: Clean, Apple-inspired design with Tailwind CSS
- **Cart Sidebar**: Smooth Framer Motion animations with cart management
- **Shopify Integration**: Direct checkout creation via Storefront API
- **Account Management**: Redirects to Shopify login page
- **Responsive Design**: Works perfectly on all devices
- **TypeScript**: Full type safety throughout the application

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your Shopify credentials:
   ```env
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=fairy-bloom-cz.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token_here
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛍️ Components Overview

### `components/Navbar.tsx`
- Main navigation component
- Contains account and cart icons
- Manages cart state and sidebar visibility

### `components/AccountIcon.tsx`
- User profile icon
- Redirects to Shopify login page
- Configurable store domain via environment variable

### `components/CartIcon.tsx`
- Shopping cart icon with item count badge
- Opens cart sidebar on click
- Shows total number of items

### `components/CartSidebar.tsx`
- Slide-in cart sidebar with Framer Motion animations
- Premium, minimalist design
- Cart item management (add/remove/update quantities)
- Checkout integration with Shopify

## 🔧 API Routes

### `app/api/create-checkout/route.ts`
- Creates Shopify checkout sessions
- Accepts cart items with variant IDs and quantities
- Returns checkout URL for redirect

## 🎨 Design System

- **Colors**: Subtle grays with black accents
- **Typography**: Clean, readable fonts
- **Spacing**: Generous whitespace for premium feel
- **Animations**: Smooth Framer Motion transitions
- **Icons**: Lucide React for consistency

## 📱 Responsive Design

- Mobile-first approach
- Collapsible navigation on smaller screens
- Touch-friendly cart sidebar
- Optimized for all device sizes

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible component primitives
- **Shopify Storefront API** - Ecommerce integration

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | Your Shopify store domain | Yes |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Storefront API access token | Yes |

## 🚀 Deployment

This project is ready to deploy to:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Any Node.js hosting service**

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

## 📄 License

Private and proprietary to Fairy Bloom.

---

Built with ❤️ for Fairy Bloom Czech Republic