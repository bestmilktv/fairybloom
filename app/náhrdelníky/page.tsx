'use client';

import ProductCard from '@/components/ProductCard';
import { getCollectionProducts, getProducts, formatPrice, getAllImageUrls, getFirstVariant, ShopifyProduct } from '@/lib/shopify';
import { useCart } from '@/contexts/CartContext';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NecklacesPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Try to get products from 'necklaces' collection
        const collectionData = await getCollectionProducts('necklaces', 20);
        setProducts(collectionData.products.edges.map((edge: { node: ShopifyProduct }) => edge.node));
      } catch (collectionError) {
        console.log('Collection not found, trying all products...');
        try {
          // Fallback to all products and filter by title
          const allProductsData = await getProducts(50);
          const filteredProducts = allProductsData.edges
            .map((edge: { node: ShopifyProduct }) => edge.node)
            .filter((product: ShopifyProduct) => 
              product.title.toLowerCase().includes('náhrdelník') || 
              product.title.toLowerCase().includes('necklace')
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
    <div className="min-h-screen bg-bg">
      <div className="max-w-7xl mx-auto px-gap sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4">Náhrdelníky</h1>
          <p className="text-xl text-muted">Elegantní náhrdelníky s květinami z českých luk a lesů</p>
        </div>

        {error ? (
          <div className="text-center py-12">
            <p className="text-muted mb-4">Nepodařilo se načíst produkty</p>
            <p className="text-sm text-muted">{error}</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted">Žádné náhrdelníky nebyly nalezeny</p>
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
                  description={product.description || 'Elegantní náhrdelník z naší kolekce'}
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
      </div>
    </div>
  );
}