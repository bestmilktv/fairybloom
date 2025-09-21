'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-gap-3xl bg-gradient-to-br from-surface-secondary to-surface">
      <div className="max-w-4xl mx-auto px-gap-lg text-center">
        {/* FAIRY BLOOM NEWSLETTER SECTION */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text">
              Zůstaňte v kontaktu
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Přihlaste se k odběru našeho newsletteru a buďte mezi prvními, kdo se dozví o nových kolekcích a exkluzivních nabídkách.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
                  <Input
                    type="email"
                    placeholder="Váš email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 rounded-xl border-accent/20 focus:border-accent focus:ring-accent/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary h-14 px-8 whitespace-nowrap"
                >
                  {isLoading ? 'Odesílám...' : 'Přihlásit se'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-accent">
              <Check className="h-6 w-6" />
              <span className="text-lg font-medium">Děkujeme za přihlášení!</span>
            </div>
          )}

          <p className="text-sm text-text-muted">
            Můžete se kdykoli odhlásit. Respektujeme vaše soukromí.
          </p>
        </div>
      </div>
    </section>
  );
}
