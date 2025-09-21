import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
    <Link href={href}>
      <Card className="group cursor-pointer hover:shadow-soft transition-all duration-300 transform hover:scale-[1.02] bg-surface border-border overflow-hidden">
        {/* UI: product card visual polish only */}
        <div className="aspect-square overflow-hidden rounded-t-2xl bg-surface relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-muted transition-colors truncate">
            {title}
          </h3>
          <p className="text-muted text-sm mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-text">
              {price}
            </span>
            {showButton && (
              <Button 
                variant="outline" 
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-border text-muted hover:text-text hover:bg-surface"
              >
                {buttonText}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
