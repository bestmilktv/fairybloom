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
      {/* UI: applied theme utilities only - no logic changes */}
      <nav className="bg-surface/80 backdrop-blur-md border-b border-border sticky top-0 z-30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-gap sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-sm">FB</span>
              </div>
              <span className="text-xl font-semibold text-text">Fairy Bloom</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/náhrdelníky" className="text-muted hover:text-text transition-colors duration-200">
                Náhrdelníky
              </Link>
              <Link href="/náušnice" className="text-muted hover:text-text transition-colors duration-200">
                Náušnice
              </Link>
              <Link href="/prsteny" className="text-muted hover:text-text transition-colors duration-200">
                Prsteny
              </Link>
              <Link href="/náramky" className="text-muted hover:text-text transition-colors duration-200">
                Náramky
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-2">
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
