'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { slideFromRight } from '@/lib/animations';

interface CartItem {
  id: string;
  variantId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (variantId: string, quantity: number) => void;
  onRemoveItem: (variantId: string) => void;
}

export default function CartSidebar({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}: CartSidebarProps) {
  const [isLoading, setIsLoading] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = async () => {
    if (items.length === 0) return;

    setIsLoading(true);
    
    try {
      const checkoutData = items.map(item => ({
        variantId: item.variantId,
        quantity: item.quantity
      }));

      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: checkoutData }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to proceed to checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK'
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* UI: cart styling only */}
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            variants={slideFromRight}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed right-0 top-0 h-full w-full max-w-[420px] bg-surface shadow-2xl z-50 flex flex-col rounded-l-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-semibold text-text">Your Cart</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-muted hover:text-text hover:bg-surface rounded-xl"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="w-20 h-20 bg-muted/20 rounded-2xl flex items-center justify-center">
                    <ShoppingCart className="h-10 w-10 text-muted" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-text">Your cart is empty</h3>
                    <p className="text-muted">Add some beautiful jewelry to get started</p>
                  </div>
                  <Button
                    onClick={onClose}
                    className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="bg-bg rounded-2xl p-4 border border-border">
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-surface rounded-xl flex-shrink-0 overflow-hidden">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-muted/20 rounded-xl flex items-center justify-center">
                              <span className="text-muted text-xs">No image</span>
                            </div>
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <h3 className="text-sm font-medium text-text truncate">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted">
                            {formatPrice(item.price)} each
                          </p>
                          <p className="text-sm font-semibold text-text">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.variantId, Math.max(0, item.quantity - 1))}
                            className="h-8 w-8 text-muted hover:text-text hover:bg-surface rounded-lg"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium text-text min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.variantId, item.quantity + 1)}
                            className="h-8 w-8 text-muted hover:text-text hover:bg-surface rounded-lg"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-6">
                <div className="flex justify-between items-center text-xl font-semibold">
                  <span className="text-text">Total ({totalItems} items)</span>
                  <span className="text-text">{formatPrice(totalPrice)}</span>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg font-medium rounded-2xl shadow-soft"
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
