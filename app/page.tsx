import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
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

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <Hero 
        title="Vítejte v Fairy Bloom"
        subtitle="Elegantní šperky s opravdovými květinami z českých luk a lesů"
        image="/hero-jewelry.jpg"
        ctaText="Prohlédnout kolekci"
        ctaLink="/náhrdelníky"
      />
      
      <div className="max-w-7xl mx-auto px-gap sm:px-6 lg:px-8 py-24">
        
        {/* Category Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gap mb-16">
          <Link href="/náhrdelníky">
            <Card className="group cursor-pointer hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 bg-surface border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-text transition-colors text-text">Náhrdelníky</h3>
                <p className="text-muted">Elegantní náhrdelníky s květinami</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/náušnice">
            <Card className="group cursor-pointer hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 bg-surface border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-text transition-colors text-text">Náušnice</h3>
                <p className="text-muted">Jemné náušnice pro každodenní eleganci</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/prsteny">
            <Card className="group cursor-pointer hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 bg-surface border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-text transition-colors text-text">Prsteny</h3>
                <p className="text-muted">Jedinečné prsteny pro výjimečné okamžiky</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/náramky">
            <Card className="group cursor-pointer hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 bg-surface border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-text transition-colors text-text">Náramky</h3>
                <p className="text-muted">Stylové náramky plné přírodní krásy</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Featured Products */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">Doporučené produkty</h2>
          <p className="text-muted">Naše nejoblíbenější kousky</p>
        </div>

        {error ? (
          <div className="text-center py-12">
            <p className="text-muted mb-4">Nepodařilo se načíst produkty</p>
            <p className="text-sm text-muted">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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
        )}
      </div>
    </div>
  )
}
