import { NextRequest, NextResponse } from 'next/server';

interface CheckoutItem {
  variantId: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json() as { items: CheckoutItem[] };

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided' },
        { status: 400 }
      );
    }

    const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'fairy-bloom-cz.myshopify.com';
    const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

    if (!storefrontAccessToken) {
      return NextResponse.json(
        { error: 'Shopify configuration missing' },
        { status: 500 }
      );
    }

    // Create checkout mutation
    const mutation = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
            totalPrice {
              amount
              currencyCode
            }
            lineItems(first: 10) {
              edges {
                node {
                  id
                  title
                  quantity
                  variant {
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
          checkoutUserErrors {
            field
            message
          }
        }
      }
    `;

    // Prepare line items for checkout
    const lineItems = items.map(item => ({
      variantId: item.variantId,
      quantity: item.quantity
    }));

    const variables = {
      input: {
        lineItems
      }
    };

    const response = await fetch(`https://${storeDomain}/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      },
      body: JSON.stringify({
        query: mutation,
        variables
      })
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return NextResponse.json(
        { error: 'Failed to create checkout' },
        { status: 400 }
      );
    }

    const checkout = data.data?.checkoutCreate?.checkout;
    const userErrors = data.data?.checkoutCreate?.checkoutUserErrors;

    if (userErrors && userErrors.length > 0) {
      console.error('Checkout user errors:', userErrors);
      return NextResponse.json(
        { error: userErrors[0].message },
        { status: 400 }
      );
    }

    if (!checkout?.webUrl) {
      return NextResponse.json(
        { error: 'Failed to create checkout URL' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: checkout.webUrl,
      checkoutId: checkout.id,
      totalPrice: checkout.totalPrice
    });

  } catch (error) {
    console.error('Checkout creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
