'use client';

import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccountIconProps {
  className?: string;
}

export default function AccountIcon({ className = '' }: AccountIconProps) {
  const handleAccountClick = () => {
    const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'fairy-bloom-cz.myshopify.com';
    const loginUrl = `https://${storeDomain}/account/login`;
    window.open(loginUrl, '_blank');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleAccountClick}
      className={`text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 ${className}`}
      aria-label="Account"
    >
      <User className="h-5 w-5" />
    </Button>
  );
}
