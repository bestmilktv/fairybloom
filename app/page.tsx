import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Featured products for homepage
const featuredProducts = [
  {
    id: 'n1',
    title: 'Růžové okvětí',
    price: '2 890 Kč',
    image: '/placeholder-necklace.jpg',
    description: 'Jemný náhrdelník s růžovými okvětními lístky v průzračné pryskyřici.',
    category: 'Náhrdelníky'
  },
  {
    id: 'e1',
    title: 'Pomněnkové kapky',
    price: '1 890 Kč',
    image: '/placeholder-earrings.jpg',
    description: 'Drobné náušnice s modrými pomněnkami v kapkovitém tvaru.',
    category: 'Náušnice'
  },
  {
    id: 'r1',
    title: 'Věčná láska',
    price: '3 500 Kč',
    image: '/placeholder-ring.jpg',
    description: 'Romantický prsten s červenými růžemi a zlatým rámem.',
    category: 'Prsteny'
  },
  {
    id: 'b1',
    title: 'Zahradní sen',
    price: '2 400 Kč',
    image: '/placeholder-bracelet.jpg',
    description: 'Široký náramek s různobarevnými zahradními květy.',
    category: 'Náramky'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vítejte v Fairy Bloom
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Elegantní šperky s opravdovými květinami z českých luk a lesů
          </p>
        </div>
        
        {/* Category Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Link href="/náhrdelníky">
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-700 transition-colors">Náhrdelníky</h3>
                <p className="text-gray-600">Elegantní náhrdelníky s květinami</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/náušnice">
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-700 transition-colors">Náušnice</h3>
                <p className="text-gray-600">Jemné náušnice pro každodenní eleganci</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/prsteny">
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-700 transition-colors">Prsteny</h3>
                <p className="text-gray-600">Jedinečné prsteny pro výjimečné okamžiky</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/náramky">
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-700 transition-colors">Náramky</h3>
                <p className="text-gray-600">Stylové náramky plné přírodní krásy</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Featured Products */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Doporučené produkty</h2>
          <p className="text-gray-600">Naše nejoblíbenější kousky</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
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
  )
}
