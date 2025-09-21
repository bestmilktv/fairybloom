import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  image, 
  ctaText = "Prohlédnout kolekci",
  ctaLink = "/náhrdelníky"
}: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* UI: hero restyle only */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface/20 via-bg/40 to-surface/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-gap sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button 
                asChild
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium rounded-2xl shadow-soft transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <a href={ctaLink}>
                  {ctaText}
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto lg:mx-0">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-soft">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
