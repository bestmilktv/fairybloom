'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartIconProps {
  onClick: () => void;
  itemCount?: number;
  className?: string;
}

export default function CartIcon({ onClick, itemCount = 0, className = '' }: CartIconProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={`relative text-text-secondary hover:text-text hover:bg-surface/50 transition-all duration-300 rounded-xl ${className}`}
      aria-label="Shopping Cart"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-soft">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </Button>
  );
}
