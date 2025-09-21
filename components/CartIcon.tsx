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
      className={`relative text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ${className}`}
      aria-label="Shopping Cart"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {itemCount}
        </span>
      )}
    </Button>
  );
}
