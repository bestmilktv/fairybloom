import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Zobrazit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
