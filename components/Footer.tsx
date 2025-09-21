import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-gap-lg py-gap-3xl">
        {/* FAIRY BLOOM PREMIUM FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gap-2xl">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FB</span>
                </div>
                <span className="text-2xl font-serif font-semibold">FAIRY BLOOM</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Přírodní krása zachycená v čase. Ručně vyráběné šperky s opravdovými květinami z českých luk a lesů.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold">Rychlé odkazy</h3>
            <nav className="space-y-3">
              <Link href="/náhrdelníky" className="block text-white/80 hover:text-accent transition-colors duration-300">
                Náhrdelníky
              </Link>
              <Link href="/náušnice" className="block text-white/80 hover:text-accent transition-colors duration-300">
                Náušnice
              </Link>
              <Link href="/prsteny" className="block text-white/80 hover:text-accent transition-colors duration-300">
                Prsteny
              </Link>
              <Link href="/náramky" className="block text-white/80 hover:text-accent transition-colors duration-300">
                Náramky
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold">Zákaznický servis</h3>
            <nav className="space-y-3">
              <Link href="/kontakt" className="block text-white/80 hover:text-accent transition-colors duration-300">
                Kontakt
              </Link>
              <Link href="/doprava" className="block text-white/80 hover:text-accent transition-colors duration-300">
                Doprava a platba
              </Link>
              <Link href="/vraceni" className="block text-white/80 hover:text-accent transition-colors duration-300">
                Vrácení zboží
              </Link>
              <Link href="/faq" className="block text-white/80 hover:text-accent transition-colors duration-300">
                Často kladené otázky
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">info@fairybloom.cz</p>
                  <p className="text-white/60 text-sm">Odpovídáme do 24 hodin</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">+420 123 456 789</p>
                  <p className="text-white/60 text-sm">Po-Pá 9:00-17:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Praha, Česká republika</p>
                  <p className="text-white/60 text-sm">Ruční výroba</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-gap-2xl pt-gap-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Fairy Bloom. Všechna práva vyhrazena.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/ochrana-udaju" className="text-white/60 hover:text-accent transition-colors duration-300">
                Ochrana údajů
              </Link>
              <Link href="/obchodni-podminky" className="text-white/60 hover:text-accent transition-colors duration-300">
                Obchodní podmínky
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-accent transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
