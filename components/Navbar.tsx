'use client';

import { useState } from 'react';
import Link from 'next/link';
import AccountIcon from './AccountIcon';
import CartIcon from './CartIcon';
import CartSidebar from './CartSidebar';

interface CartItem {
  id: string;
  variantId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Mock data for demonstration
    {
      id: '1',
      variantId: 'gid://shopify/ProductVariant/123456789',
      name: 'Růžové okvětí náhrdelník',
      price: 2890,
      quantity: 1,
      image: '/placeholder-necklace.jpg'
    },
    {
      id: '2',
      variantId: 'gid://shopify/ProductVariant/987654321',
      name: 'Pomněnkové kapky náušnice',
      price: 1890,
      quantity: 2,
      image: '/placeholder-earrings.jpg'
    }
  ]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* FAIRY BLOOM PREMIUM NAVBAR */}
      <nav className="bg-surface/95 backdrop-blur-lg border-b border-accent/10 sticky top-0 z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-gap-lg">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center shadow-gold group-hover:shadow-strong transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">FB</span>
              </div>
              <span className="text-2xl font-serif font-semibold text-text group-hover:text-accent transition-colors duration-300">
                FAIRY BLOOM
              </span>
            </Link>

            {/* Navigation Links - Center */}
            <div className="hidden lg:flex items-center gap-8">
              <Link 
                href="/náhrdelníky" 
                className="text-text-secondary hover:text-text font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                Náhrdelníky
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/náušnice" 
                className="text-text-secondary hover:text-text font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                Náušnice
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/prsteny" 
                className="text-text-secondary hover:text-text font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                Prsteny
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/náramky" 
                className="text-text-secondary hover:text-text font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                Náramky
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <AccountIcon />
              <CartIcon 
                onClick={() => setIsCartOpen(true)}
                itemCount={totalItems}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
}
