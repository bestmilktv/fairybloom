'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/animations';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  href: string;
  showButton?: boolean;
  buttonText?: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
  description,
  href,
  showButton = true,
  buttonText = "Zobrazit"
}: ProductCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Link href={href}>
        <Card className="group cursor-pointer card-premium hover:shadow-medium transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
          {/* FAIRY BLOOM PREMIUM PRODUCT CARD */}
          <div className="aspect-square overflow-hidden rounded-t-2xl bg-surface-secondary relative">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <CardContent className="p-6 space-y-3">
            <h3 className="text-lg font-serif font-semibold text-text group-hover:text-accent transition-colors duration-300 truncate">
              {title}
            </h3>
            <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xl font-serif font-bold text-text">
                {price}
              </span>
              {showButton && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-500 border-accent/30 text-accent hover:text-white hover:bg-accent hover:border-accent transform translate-y-2 group-hover:translate-y-0"
                >
                  {buttonText}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
