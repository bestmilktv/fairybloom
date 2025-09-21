'use client';

import { useState, useEffect } from 'react';
import { getProducts, getCollectionProducts, ShopifyProduct } from '@/lib/shopify';

interface UseProductsResult {
  products: ShopifyProduct[];
  loading: boolean;
  error: string | null;
  hasNextPage: boolean;
  loadMore: () => Promise<void>;
}

export function useProducts(first: number = 20): UseProductsResult {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);

  const fetchProducts = async (after?: string, append: boolean = false) => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await getProducts(first, after);
      const newProducts = data.edges.map((edge: any) => edge.node);
      
      if (append) {
        setProducts(prev => [...prev, ...newProducts]);
      } else {
        setProducts(newProducts);
      }
      
      setHasNextPage(data.pageInfo.hasNextPage);
      setEndCursor(data.pageInfo.endCursor);
    } catch (err) {
      console.error('Failed to fetch products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (hasNextPage && endCursor) {
      await fetchProducts(endCursor, true);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    hasNextPage,
    loadMore,
  };
}

interface UseCollectionProductsResult {
  products: ShopifyProduct[];
  loading: boolean;
  error: string | null;
  hasNextPage: boolean;
  loadMore: () => Promise<void>;
}

export function useCollectionProducts(collectionHandle: string, first: number = 20): UseCollectionProductsResult {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);

  const fetchProducts = async (after?: string, append: boolean = false) => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await getCollectionProducts(collectionHandle, first, after);
      const newProducts = data.products.edges.map((edge: any) => edge.node);
      
      if (append) {
        setProducts(prev => [...prev, ...newProducts]);
      } else {
        setProducts(newProducts);
      }
      
      setHasNextPage(data.products.pageInfo.hasNextPage);
      setEndCursor(data.products.pageInfo.endCursor);
    } catch (err) {
      console.error(`Failed to fetch products for collection "${collectionHandle}":`, err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (hasNextPage && endCursor) {
      await fetchProducts(endCursor, true);
    }
  };

  useEffect(() => {
    if (collectionHandle) {
      fetchProducts();
    }
  }, [collectionHandle]);

  return {
    products,
    loading,
    error,
    hasNextPage,
    loadMore,
  };
}
