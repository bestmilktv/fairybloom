import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';

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
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <Hero 
        title="Vítejte v Fairy Bloom"
        subtitle="Elegantní šperky s opravdovými květinami z českých luk a lesů"
        image="/hero-jewelry.jpg"
        ctaText="Prohlédnout kolekci"
        ctaLink="/náhrdelníky"
      />
      
      <div className="max-w-7xl mx-auto px-gap sm:px-6 lg:px-8 py-24">
        
        {/* Category Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gap mb-16">
          <Link href="/náhrdelníky">
            <Card className="group cursor-pointer hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 bg-surface border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-text transition-colors text-text">Náhrdelníky</h3>
                <p className="text-muted">Elegantní náhrdelníky s květinami</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/náušnice">
            <Card className="group cursor-pointer hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 bg-surface border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-text transition-colors text-text">Náušnice</h3>
                <p className="text-muted">Jemné náušnice pro každodenní eleganci</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/prsteny">
            <Card className="group cursor-pointer hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 bg-surface border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-text transition-colors text-text">Prsteny</h3>
                <p className="text-muted">Jedinečné prsteny pro výjimečné okamžiky</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/náramky">
            <Card className="group cursor-pointer hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 bg-surface border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-text transition-colors text-text">Náramky</h3>
                <p className="text-muted">Stylové náramky plné přírodní krásy</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Featured Products */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">Doporučené produkty</h2>
          <p className="text-muted">Naše nejoblíbenější kousky</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
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
  )
}
