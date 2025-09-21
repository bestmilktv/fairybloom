import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
