import ProductCard from '@/components/ProductCard';

// Mock product data - in a real app, this would come from Shopify
const products = [
  {
    id: 'b1',
    title: 'Zahradní sen',
    price: '2 400 Kč',
    image: '/placeholder-bracelet.jpg',
    description: 'Široký náramek s různobarevnými zahradními květy.'
  },
  {
    id: 'b2',
    title: 'Lesní stezka',
    price: '2 100 Kč',
    image: '/placeholder-bracelet.jpg',
    description: 'Náramek inspirovaný procházkou lesem s kapradinami a mechem.'
  },
  {
    id: 'b3',
    title: 'Levandulové pole',
    price: '2 650 Kč',
    image: '/placeholder-bracelet.jpg',
    description: 'Elegantní náramek s levandulí a stříbrnými detaily.'
  },
  {
    id: 'b4',
    title: 'Mořská bříza',
    price: '2 300 Kč',
    image: '/placeholder-bracelet.jpg',
    description: 'Jemný náramek s mořskými řasami a perletí.'
  }
];

export default function BraceletsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Náramky</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stylové náramky plné přírodní krásy
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
