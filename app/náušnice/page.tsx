import ProductCard from '@/components/ProductCard';

// Mock product data - in a real app, this would come from Shopify
const products = [
  {
    id: 'e1',
    title: 'Pomněnkové kapky',
    price: '1 890 Kč',
    image: '/placeholder-earrings.jpg',
    description: 'Drobné náušnice s modrými pomněnkami v kapkovitém tvaru.'
  },
  {
    id: 'e2',
    title: 'Zlaté slunce',
    price: '2 100 Kč',
    image: '/placeholder-earrings.jpg',
    description: 'Kruhové náušnice se žlutými květy a zlatými akcenty.'
  },
  {
    id: 'e3',
    title: 'Bílá čistota',
    price: '1 750 Kč',
    image: '/placeholder-earrings.jpg',
    description: 'Minimalistické náušnice s drobnými bílými květy.'
  },
  {
    id: 'e4',
    title: 'Levandulové sny',
    price: '1 950 Kč',
    image: '/placeholder-earrings.jpg',
    description: 'Dlouhé náušnice s větvičkami levandule.'
  },
  {
    id: 'e5',
    title: 'Růžový úsvit',
    price: '2 200 Kč',
    image: '/placeholder-earrings.jpg',
    description: 'Jemné náušnice s růžovými květy sakury.'
  }
];

export default function EarringsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Náušnice</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jemné náušnice pro každodenní eleganci
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              href={`/product/${product.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
