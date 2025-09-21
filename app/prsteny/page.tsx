'use client';

import ProductCard from '@/components/ProductCard';
import { getCollectionProducts, getProducts, formatPrice, getAllImageUrls, getFirstVariant, ShopifyProduct } from '@/lib/shopify';
import { useCart } from '@/contexts/CartContext';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RingsPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Try to get products from 'rings' collection
        const collectionData = await getCollectionProducts('rings', 20);
        setProducts(collectionData.products.edges.map((edge: { node: ShopifyProduct }) => edge.node));
      } catch (collectionError) {
        console.log('Collection not found, trying all products...');
        try {
          // Fallback to all products and filter by title
          const allProductsData = await getProducts(50);
          const filteredProducts = allProductsData.edges
            .map((edge: { node: ShopifyProduct }) => edge.node)
            .filter((product: ShopifyProduct) => 
              product.title.toLowerCase().includes('prsten') || 
              product.title.toLowerCase().includes('ring')
            );
          setProducts(filteredProducts);
        } catch (err) {
          console.error('Failed to fetch products:', err);
          setError(err instanceof Error ? err.message : 'Failed to fetch products');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-bg py-gap-3xl">
      <div className="max-w-7xl mx-auto px-gap-lg">
        {/* Header */}
        <div className="text-center mb-gap-2xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-text mb-4">Prsteny</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Jedinečné prsteny pro výjimečné okamžiky
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-text-secondary">Načítání produktů...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-text-secondary mb-4">Nepodařilo se načíst produkty</p>
            <p className="text-sm text-text-muted">{error}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted">Žádné prsteny nebyly nalezeny</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const firstVariant = getFirstVariant(product);
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={formatPrice(product.priceRange.minVariantPrice)}
                  image={getAllImageUrls(product)[0] || '/placeholder.svg'}
                  description={product.description || 'Elegantní prsten z naší kolekce'}
                  href={`/product/${product.handle}`}
                  variantId={firstVariant?.id}
                  onAddToCart={(variantId, quantity) => {
                    addToCart(variantId, quantity, {
                      id: product.id,
                      title: product.title,
                      price: parseFloat(product.priceRange.minVariantPrice.amount),
                      image: getAllImageUrls(product)[0]
                    });
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Optional: "Load More" button or pagination */}
        {products.length > 0 && (
          <div className="text-center mt-gap-2xl">
            <Button asChild className="btn-secondary">
              <Link href="/produkty">
                Zobrazit všechny produkty
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}