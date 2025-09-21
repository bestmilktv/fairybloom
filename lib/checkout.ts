interface CheckoutItem {
  variantId: string;
  quantity: number;
}

interface CheckoutResponse {
  url: string;
  checkoutId: string;
  totalPrice: {
    amount: string;
    currencyCode: string;
  };
}

export async function createCheckout(items: CheckoutItem[]): Promise<CheckoutResponse> {
  const response = await fetch('/api/create-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create checkout');
  }

  return response.json();
}
