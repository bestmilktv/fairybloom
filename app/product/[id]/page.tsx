import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { getProductByHandle, getProducts, formatPrice, getAllImageUrls, getFirstVariant, ShopifyProduct } from '@/lib/shopify';

// Helper function to determine category from product title or tags
function getProductCategory(title: string): { category: string; categoryPath: string } {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('náhrdelník') || titleLower.includes('necklace')) {
    return { category: 'Náhrdelníky', categoryPath: '/náhrdelníky' };
  } else if (titleLower.includes('náušnice') || titleLower.includes('earring')) {
    return { category: 'Náušnice', categoryPath: '/náušnice' };
  } else if (titleLower.includes('prsten') || titleLower.includes('ring')) {
    return { category: 'Prsteny', categoryPath: '/prsteny' };
  } else if (titleLower.includes('náramek') || titleLower.includes('bracelet')) {
    return { category: 'Náramky', categoryPath: '/náramky' };
  }
  
  // Default fallback
  return { category: 'Šperky', categoryPath: '/' };
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  
  // Fetch product data from Shopify
  let product: ShopifyProduct | null = null;
  let relatedProducts: ShopifyProduct[] = [];
  let error: string | null = null;

  try {
    product = await getProductByHandle(id);
    
    if (!product) {
      notFound();
    }

    // Fetch related products (first 4 products excluding current)
    const allProductsData = await getProducts(20);
    relatedProducts = allProductsData.edges
      .map((edge: { node: ShopifyProduct }) => edge.node)
      .filter((p: ShopifyProduct) => p.id !== product?.id)
      .slice(0, 4);
  } catch (err) {
    console.error('Failed to fetch product data:', err);
    error = err instanceof Error ? err.message : 'Failed to fetch product data';
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text mb-4">Chyba při načítání produktu</h1>
          <p className="text-muted mb-6">{error}</p>
          <Link href="/">
            <Button>Zpět na hlavní stránku</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const { category, categoryPath } = getProductCategory(product.title);
  const images = getAllImageUrls(product);
  const firstVariant = getFirstVariant(product);
  const price = formatPrice(product.priceRange.minVariantPrice);

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-7xl mx-auto px-gap sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href={categoryPath} className="inline-flex items-center gap-2 text-muted hover:text-text transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Zpět do {category}
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-surface rounded-2xl overflow-hidden">
              <Image
                src={images[0] || '/placeholder.svg'}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Additional Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.slice(1, 5).map((image, index) => (
                  <div key={index} className="aspect-square bg-surface rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${product.title} - obrázek ${index + 2}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl font-bold text-text mb-4">{product.title}</h1>
              <p className="text-3xl font-semibold text-text mb-6">{price}</p>
              <p className="text-lg text-muted leading-relaxed">
                {product.description || 'Elegantní šperk z naší kolekce s opravdovými květinami z českých luk a lesů.'}
              </p>
            </div>

            {/* Batch/Date Chip */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-muted/20 text-muted text-sm rounded-full">
                Ručně vyrobeno
              </span>
              <span className="px-3 py-1 bg-muted/20 text-muted text-sm rounded-full">
                Limitovaná edice
              </span>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium rounded-2xl shadow-soft"
                >
                  Přidat do košíku
                </Button>
                <Button variant="outline" size="lg" className="border-border text-muted hover:text-text hover:bg-surface">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Care Instructions */}
            <Card className="bg-muted/10 border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-text mb-3">Pokyny k péči</h3>
                <ul className="space-y-2 text-muted text-sm">
                  <li>• Šperk uchovávejte na suchém místě</li>
                  <li>• Vyhněte se kontaktu s vodou a chemikáliemi</li>
                  <li>• Čistěte pouze suchým hadříkem</li>
                  <li>• Skladujte v původním obalu</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-10">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">Související produkty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  title={relatedProduct.title}
                  price={formatPrice(relatedProduct.priceRange.minVariantPrice)}
                  image={getAllImageUrls(relatedProduct)[0] || '/placeholder.svg'}
                  description={relatedProduct.description || 'Elegantní šperk z naší kolekce'}
                  href={`/product/${relatedProduct.handle}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}