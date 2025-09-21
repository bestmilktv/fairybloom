import ProductCard from '@/components/ProductCard';

// Mock product data - in a real app, this would come from Shopify
const products = [
  {
    id: 'r1',
    title: 'Věčná láska',
    price: '3 500 Kč',
    image: '/placeholder-ring.jpg',
    description: 'Romantický prsten s červenými růžemi a zlatým rámem.'
  },
  {
    id: 'r2',
    title: 'Přírodní elegance',
    price: '2 900 Kč',
    image: '/placeholder-ring.jpg',
    description: 'Široký prsten s mozaikou drobných polních květů.'
  },
  {
    id: 'r3',
    title: 'Ranní rosa',
    price: '3 200 Kč',
    image: '/placeholder-ring.jpg',
    description: 'Jemný prsten s bílými květy a perleťovými akcenty.'
  },
  {
    id: 'r4',
    title: 'Tajemný les',
    price: '3 800 Kč',
    image: '/placeholder-ring.jpg',
    description: 'Masivní prsten s kapradinami a mechem.'
  }
];

export default function RingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prsteny</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jedinečné prsteny pro výjimečné okamžiky
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
