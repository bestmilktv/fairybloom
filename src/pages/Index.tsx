import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Slideshow from '@/components/Slideshow';
import Footer from '@/components/Footer';

// Import product images
import necklaceImage from '@/assets/necklace-placeholder.jpg';
import earringsImage from '@/assets/earrings-placeholder.jpg';
import ringImage from '@/assets/ring-placeholder.jpg';
import braceletImage from '@/assets/bracelet-placeholder.jpg';

const Index = () => {
  // Add scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-up, .fade-in-up-delayed');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Product data with Czech descriptions
  const productCategories = [
    {
      id: 'náhrdelníky',
      title: 'Náhrdelníky',
      subtitle: 'Elegantní náhrdelníky s květinami zachycenými v čase',
      products: [
        {
          id: 'n1',
          title: 'Růžové okvětí',
          price: '2 890 Kč',
          image: necklaceImage,
          description: 'Jemný náhrdelník s růžovými okvětními lístky v průzračné pryskyřici.'
        },
        {
          id: 'n2',
          title: 'Lesní kapradina',
          price: '3 200 Kč',
          image: necklaceImage,
          description: 'Minimalistický design s jemnou kapradinou z českých lesů.'
        },
        {
          id: 'n3',
          title: 'Loučka v létě',
          price: '2 650 Kč',
          image: necklaceImage,
          description: 'Barevná směs lučních květů zachycená v elegantním náhrdelníku.'
        }
      ]
    },
    {
      id: 'náušnice',
      title: 'Náušnice',
      subtitle: 'Jemné náušnice pro každodenní eleganci',
      products: [
        {
          id: 'e1',
          title: 'Pomněnkové kapky',
          price: '1 890 Kč',
          image: earringsImage,
          description: 'Drobné náušnice s modrými pomněnkami v kapkovitém tvaru.'
        },
        {
          id: 'e2',
          title: 'Zlaté slunce',
          price: '2 100 Kč',
          image: earringsImage,
          description: 'Kruhové náušnice se žlutými květy a zlatými akcenty.'
        },
        {
          id: 'e3',
          title: 'Bílá čistota',
          price: '1 750 Kč',
          image: earringsImage,
          description: 'Minimalistické náušnice s drobnými bílými květy.'
        }
      ]
    },
    {
      id: 'prsteny',
      title: 'Prsteny',
      subtitle: 'Jedinečné prsteny pro výjimečné okamžiky',
      products: [
        {
          id: 'r1',
          title: 'Věčná láska',
          price: '3 500 Kč',
          image: ringImage,
          description: 'Romantický prsten s červenými růžemi a zlatým rámem.'
        },
        {
          id: 'r2',
          title: 'Přírodní elegance',
          price: '2 900 Kč',
          image: ringImage,
          description: 'Široký prsten s mozaikou drobných polních květů.'
        },
        {
          id: 'r3',
          title: 'Ranní rosa',
          price: '3 200 Kč',
          image: ringImage,
          description: 'Jemný prsten s bílými květy a perleťovými akcenty.'
        }
      ]
    },
    {
      id: 'náramky',
      title: 'Náramky',
      subtitle: 'Stylové náramky plné přírodní krásy',
      products: [
        {
          id: 'b1',
          title: 'Zahradní sen',
          price: '2 400 Kč',
          image: braceletImage,
          description: 'Široký náramek s různobarevnými zahradními květy.'
        },
        {
          id: 'b2',
          title: 'Lesní stezka',
          price: '2 100 Kč',
          image: braceletImage,
          description: 'Náramek inspirovaný procházkou lesem s kapradinami a mechem.'
        },
        {
          id: 'b3',
          title: 'Levandulové pole',
          price: '2 650 Kč',
          image: braceletImage,
          description: 'Elegantní náramek s levandulí a stříbrnými detaily.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Product Sections */}
      {productCategories.map((category) => (
        <ProductSection
          key={category.id}
          id={category.id}
          title={category.title}
          subtitle={category.subtitle}
          products={category.products}
          categoryPath={`/${category.id}`}
        />
      ))}
      
      {/* Brand Values Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury mb-6 tracking-wide">
              Proč si vybrat Fairy Bloom
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Každý kousek je vytvořen s láskou a pečlivostí pro ty, kteří oceňují autentickou krásu přírody
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center fade-in-up-delayed" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-luxury mb-4">Ruční výroba</h3>
              <p className="text-muted-foreground leading-relaxed">
                Každý šperk je pečlivě vytvořen ručně s důrazem na detail a kvalitu
              </p>
            </div>
            
            <div className="text-center fade-in-up-delayed" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-luxury mb-4">Přírodní materiály</h3>
              <p className="text-muted-foreground leading-relaxed">
                Používáme pouze prémiové přírodní materiály a skutečné květiny
              </p>
            </div>
            
            <div className="text-center fade-in-up-delayed" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-luxury mb-4">Česká kvalita</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vyrábíme v České republice s garancí nejvyšší kvality a preciznosti
              </p>
            </div>
          </div>
        </div>
      </section>

      <Slideshow />

      {/* Newsletter Signup Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury mb-6 tracking-wide">
              Objevte nové kolekce jako první
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Přihlaste se k odběru našeho newsletteru a získejte exkluzivní přístup k novinkám a speciálním nabídkám
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Váš e-mail"
                className="flex-1 px-6 py-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium tracking-wide hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                Odebírat
              </button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              Vaše údaje jsou v bezpečí. Newsletter můžete kdykoliv odhlásit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;