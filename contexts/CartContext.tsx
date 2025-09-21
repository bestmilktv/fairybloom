'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: string;
  variantId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (variantId: string, quantity: number, product: { id: string; title: string; price: number; image?: string }) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeFromCart: (variantId: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (variantId: string, quantity: number, product: { id: string; title: string; price: number; image?: string }) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.variantId === variantId);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.variantId === variantId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, {
          id: product.id,
          variantId,
          name: product.title,
          price: product.price,
          quantity,
          image: product.image
        }];
      }
    });
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(variantId);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.variantId === variantId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (variantId: string) => {
    setItems(prevItems => prevItems.filter(item => item.variantId !== variantId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
