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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* FAIRY BLOOM PREMIUM HERO SECTION */}
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-gap-lg text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              asChild
              className="btn-primary text-lg px-12 py-6 rounded-2xl shadow-gold hover:shadow-strong"
            >
              <a href={ctaLink}>
                {ctaText}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-white/30 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
