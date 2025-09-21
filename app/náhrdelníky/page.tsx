import ProductCard from '@/components/ProductCard';

// Mock product data - in a real app, this would come from Shopify
const products = [
  {
    id: 'n1',
    title: 'Růžové okvětí',
    price: '2 890 Kč',
    image: '/placeholder-necklace.jpg',
    description: 'Jemný náhrdelník s růžovými okvětními lístky v průzračné pryskyřici.'
  },
  {
    id: 'n2',
    title: 'Lesní kapradina',
    price: '3 200 Kč',
    image: '/placeholder-necklace.jpg',
    description: 'Minimalistický design s jemnou kapradinou z českých lesů.'
  },
  {
    id: 'n3',
    title: 'Loučka v létě',
    price: '2 650 Kč',
    image: '/placeholder-necklace.jpg',
    description: 'Barevná směs lučních květů zachycená v elegantním náhrdelníku.'
  },
  {
    id: 'n4',
    title: 'Zimní kouzlo',
    price: '3 100 Kč',
    image: '/placeholder-necklace.jpg',
    description: 'Křehké zimní větvičky s drobnými krystalky.'
  },
  {
    id: 'n5',
    title: 'Jarní probuzení',
    price: '2 750 Kč',
    image: '/placeholder-necklace.jpg',
    description: 'Mladé lístky a první jarní květy v jemném náhrdelníku.'
  },
  {
    id: 'n6',
    title: 'Podzimní symfonie',
    price: '3 000 Kč',
    image: '/placeholder-necklace.jpg',
    description: 'Teplé podzimní barvy listů zachycené v elegantním tvaru.'
  }
];

export default function NecklacesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Náhrdelníky</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elegantní náhrdelníky s květinami zachycenými v čase
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
