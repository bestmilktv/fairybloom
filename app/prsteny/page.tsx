import ProductCard from '@/components/ProductCard';
import { getCollectionProducts, getProducts, formatPrice, getAllImageUrls, ShopifyProduct } from '@/lib/shopify';

export default async function RingsPage() {
  // Try to fetch from collection first, fallback to all products
  let products: ShopifyProduct[] = [];
  let error: string | null = null;

  try {
    // Try to get products from 'rings' collection
    const collectionData = await getCollectionProducts('rings', 20);
    products = collectionData.products.edges.map((edge: { node: ShopifyProduct }) => edge.node);
  } catch (collectionError) {
    console.log('Collection not found, trying all products...');
    try {
      // Fallback to all products and filter by title
      const allProductsData = await getProducts(50);
      products = allProductsData.edges
        .map((edge: { node: ShopifyProduct }) => edge.node)
        .filter((product: ShopifyProduct) => 
          product.title.toLowerCase().includes('prsten') || 
          product.title.toLowerCase().includes('ring')
        );
    } catch (err) {
      console.error('Failed to fetch products:', err);
      error = err instanceof Error ? err.message : 'Failed to fetch products';
    }
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-7xl mx-auto px-gap sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4">Prsteny</h1>
          <p className="text-xl text-muted">Jedinečné prsteny pro výjimečné okamžiky</p>
        </div>

        {error ? (
          <div className="text-center py-12">
            <p className="text-muted mb-4">Nepodařilo se načíst produkty</p>
            <p className="text-sm text-muted">{error}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted">Žádné prsteny nebyly nalezeny</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={formatPrice(product.priceRange.minVariantPrice)}
                image={getAllImageUrls(product)[0] || '/placeholder.svg'}
                description={product.description || 'Elegantní prsten z naší kolekce'}
                href={`/product/${product.handle}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}