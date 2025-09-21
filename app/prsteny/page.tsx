import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
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
