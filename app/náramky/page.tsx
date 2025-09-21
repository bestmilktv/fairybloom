import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
