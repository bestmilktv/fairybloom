# Fairy Bloom - Shopify Headless Ecommerce Frontend

A beautiful, modern frontend for your Shopify headless ecommerce store, built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Shopify Integration**: Ready-to-use Shopify Storefront API integration
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Czech Language**: Fully localized in Czech
- **Product Showcase**: Elegant product display with categories
- **Mobile Responsive**: Works perfectly on all devices
- **Fast Performance**: Optimized for speed and SEO

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Shopify**:
   - Update your Shopify credentials in `src/pages/index.js`:
     ```javascript
     const SHOPIFY_STORE_DOMAIN = 'your-shop.myshopify.com';
     const SHOPIFY_STOREFRONT_ACCESS_TOKEN = 'your-storefront-access-token';
     ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── pages/
│   ├── Index.tsx          # Homepage with product categories
│   ├── CategoryPage.tsx   # Category product listings
│   ├── ProductDetailPage.tsx # Individual product pages
│   ├── NotFound.tsx       # 404 page
│   └── index.js           # Shopify products page
├── components/
│   ├── Navigation.tsx     # Main navigation
│   ├── Hero.tsx          # Hero section
│   ├── ProductSection.tsx # Product grid sections
│   ├── ProductCard.tsx   # Individual product cards
│   ├── Footer.tsx        # Site footer
│   └── ui/               # Reusable UI components
├── assets/               # Images and static assets
└── hooks/               # Custom React hooks
```

## 🛍️ Shopify Setup

1. **Get your Storefront Access Token**:
   - Go to your Shopify Admin
   - Navigate to Apps > App and sales channel settings
   - Create a private app or use the Storefront API
   - Copy your Storefront Access Token

2. **Update the configuration**:
   - Open `src/pages/index.js`
   - Replace the placeholder values with your actual Shopify credentials

## 🎨 Customization

- **Colors**: Update the color scheme in `tailwind.config.ts`
- **Content**: Modify text content directly in the component files
- **Styling**: All styles use Tailwind CSS classes
- **Images**: Replace placeholder images in `src/assets/`

## 📱 Pages

- **Homepage** (`/`): Product categories and featured content
- **Categories** (`/náhrdelníky`, `/náušnice`, etc.): Product listings by category
- **Product Details** (`/product/:id`): Individual product pages
- **Shopify Products** (`/shopify`): Direct Shopify integration page

## 🚀 Deployment

This project is ready to deploy to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Shopify Storefront API** - Ecommerce integration
- **Lucide React** - Icons

## 📄 License

This project is private and proprietary to Fairy Bloom.

---

Built with ❤️ for Fairy Bloom Czech Republic