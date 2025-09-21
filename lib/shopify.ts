// Shopify Storefront API integration
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'fairy-bloom-cz.myshopify.com';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'c02d60556e481207a1e9b194501dafe4';

const SHOPIFY_GRAPHQL_ENDPOINT = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

// GraphQL query to fetch all products
const GET_PRODUCTS_QUERY = `
  query getProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                id
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

// GraphQL query to fetch a single product by handle
const GET_PRODUCT_BY_HANDLE_QUERY = `
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
    }
  }
`;

// GraphQL query to fetch products by collection
const GET_COLLECTION_PRODUCTS_QUERY = `
  query getCollectionProducts($handle: String!, $first: Int!, $after: String) {
    collection(handle: $handle) {
      id
      title
      products(first: $first, after: $after) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  id
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

// Types for Shopify data
export interface ShopifyImage {
  id: string;
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: ShopifyPrice;
  availableForSale?: boolean;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: ShopifyPrice;
  };
  images: {
    edges: Array<{
      node: ShopifyImage;
    }>;
  };
  variants: {
    edges: Array<{
      node: ShopifyVariant;
    }>;
  };
}

export interface ShopifyCollection {
  id: string;
  title: string;
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string | null;
      endCursor: string | null;
    };
  };
}

// Helper function to make GraphQL requests
async function shopifyRequest(query: string, variables: Record<string, any> = {}) {
  try {
    const response = await fetch(SHOPIFY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Shopify API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });
      throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    return data;
  } catch (error) {
    console.error('Shopify request failed:', error);
    throw error;
  }
}

// Fetch all products
export async function getProducts(first: number = 20, after?: string) {
  try {
    const data = await shopifyRequest(GET_PRODUCTS_QUERY, { first, after });
    return data.data.products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}

// Fetch a single product by handle
export async function getProductByHandle(handle: string) {
  try {
    const data = await shopifyRequest(GET_PRODUCT_BY_HANDLE_QUERY, { handle });
    return data.data.product;
  } catch (error) {
    console.error(`Failed to fetch product with handle "${handle}":`, error);
    throw error;
  }
}

// Fetch products from a collection
export async function getCollectionProducts(handle: string, first: number = 20, after?: string) {
  try {
    const data = await shopifyRequest(GET_COLLECTION_PRODUCTS_QUERY, { handle, first, after });
    return data.data.collection;
  } catch (error) {
    console.error(`Failed to fetch collection products for "${handle}":`, error);
    throw error;
  }
}

// Helper function to format price
export function formatPrice(price: ShopifyPrice): string {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: price.currencyCode,
  }).format(parseFloat(price.amount));
}

// Helper function to get the first image URL
export function getFirstImageUrl(product: ShopifyProduct): string {
  const firstImage = product.images.edges[0]?.node;
  return firstImage?.url || '/placeholder.svg';
}

// Helper function to get all image URLs
export function getAllImageUrls(product: ShopifyProduct): string[] {
  return product.images.edges.map(edge => edge.node.url);
}

// Helper function to get the first variant
export function getFirstVariant(product: ShopifyProduct): ShopifyVariant | null {
  return product.variants.edges[0]?.node || null;
}
