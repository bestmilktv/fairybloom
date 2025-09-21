import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Slideshow from '@/components/Slideshow';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { getProducts, formatPrice, getFirstImageUrl, ShopifyProduct } from '@/lib/shopify';

export default async function Home() {
  // Fetch featured products from Shopify
  let featuredProducts: ShopifyProduct[] = [];
  let error: string | null = null;

  try {
    const data = await getProducts(8); // Fetch first 8 products
    featuredProducts = data.edges.map((edge: { node: ShopifyProduct }) => edge.node);
  } catch (err) {
    console.error('Failed to fetch products:', err);
    error = err instanceof Error ? err.message : 'Failed to fetch products';
  }

  // Slideshow data for announcements
  const slideshowData = [
    {
      id: '1',
      title: 'Limitovaná edice',
      subtitle: 'Exkluzivní série s divokými květinami z českých luk. Pouze 50 kusů každého designu.',
      image: '/hero-jewelry.jpg',
      ctaText: 'Prohlédnout kolekci',
      ctaLink: '/náhrdelníky'
    },
    {
      id: '2',
      title: 'Nové přírůstky',
      subtitle: 'Objevte naši nejnovější kolekci jarních šperků s prvosenkami a fialkami.',
      image: '/placeholder-necklace.jpg',
      ctaText: 'Zobrazit novinky',
      ctaLink: '/náušnice'
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* FAIRY BLOOM PREMIUM HOMEPAGE */}
      
      {/* Hero Section */}
      <Hero 
        title="Limitovaná edice"
        subtitle="Exkluzivní série s divokými květinami z českých luk. Pouze 50 kusů každého designu."
        image="/hero-jewelry.jpg"
        ctaText="Prohlédnout kolekci"
        ctaLink="/náhrdelníky"
      />
      
      {/* Featured Categories Section */}
      <section className="py-gap-3xl bg-surface">
        <div className="max-w-7xl mx-auto px-gap-lg">
          <div className="text-center mb-gap-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
              Naše kolekce
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Objevte jedinečné šperky s opravdovými květinami z české přírody
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gap-lg">
            <Link href="/náhrdelníky" className="group">
              <Card className="card-premium h-full">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    Náhrdelníky
                  </h3>
                  <p className="text-text-secondary">
                    Elegantní náhrdelníky s květinami zachycenými v čase
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/náušnice" className="group">
              <Card className="card-premium h-full">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-secondary to-accent-tertiary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🌸</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    Náušnice
                  </h3>
                  <p className="text-text-secondary">
                    Jemné náušnice pro každodenní eleganci
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/prsteny" className="group">
              <Card className="card-premium h-full">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-tertiary to-accent rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💍</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    Prsteny
                  </h3>
                  <p className="text-text-secondary">
                    Jedinečné prsteny pro výjimečné okamžiky
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/náramky" className="group">
              <Card className="card-premium h-full">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-accent-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-text group-hover:text-accent transition-colors duration-300">
                    Náramky
                  </h3>
                  <p className="text-text-secondary">
                    Stylové náramky plné přírodní krásy
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-gap-3xl">
        <div className="max-w-7xl mx-auto px-gap-lg">
          <div className="text-center mb-gap-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
              Doporučené produkty
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Naše nejoblíbenější kousky z aktuální kolekce
            </p>
          </div>

          {error ? (
            <div className="text-center py-12">
              <p className="text-text-secondary mb-4">Nepodařilo se načíst produkty</p>
              <p className="text-sm text-text-muted">{error}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gap-lg mb-gap-2xl">
                {featuredProducts.slice(0, 4).map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={formatPrice(product.priceRange.minVariantPrice)}
                    image={getFirstImageUrl(product)}
                    description={product.description || 'Elegantní šperk z naší kolekce'}
                    href={`/product/${product.handle}`}
                  />
                ))}
              </div>
              
              <div className="text-center">
                <Button asChild className="btn-secondary">
                  <Link href="/náhrdelníky">
                    Zobrazit více
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="py-gap-3xl bg-surface-secondary">
        <div className="max-w-6xl mx-auto px-gap-lg">
          <div className="text-center mb-gap-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
              Aktuality
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Sledujte naše nejnovější zprávy a speciální nabídky
            </p>
          </div>
          
          <Slideshow 
            slides={slideshowData}
            autoPlay={true}
            interval={6000}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
