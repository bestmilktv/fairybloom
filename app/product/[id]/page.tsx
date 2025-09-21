import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';

// Mock product data - in a real app, this would come from Shopify
const allProducts = {
  // Náhrdelníky
  'n1': {
    id: 'n1',
    title: 'Růžové okvětí',
    price: '2 890 Kč',
    images: ['/placeholder-necklace.jpg', '/placeholder-necklace.jpg', '/placeholder-necklace.jpg'],
    category: 'Náhrdelníky',
    categoryPath: '/náhrdelníky',
    shortDescription: 'Jemný náhrdelník s růžovými okvětními lístky v průzračné pryskyřici.',
    fullDescription: 'Tento jedinečný náhrdelník zachycuje křehkou krásu růžových okvětních lístků v průzračné pryskyřici nejvyšší kvality. Každý kousek je ručně vyráběn s láskou k detailu, přičemž skutečné květy jsou pečlivě vybírány a konzervovány v dokonalém stavu. Náhrdelník je dodáván s elegantním řetízkem z chirurgické oceli a je ideální pro každodenní nošení i speciální příležitosti.'
  },
  'n2': {
    id: 'n2',
    title: 'Lesní kapradina',
    price: '3 200 Kč',
    images: ['/placeholder-necklace.jpg', '/placeholder-necklace.jpg'],
    category: 'Náhrdelníky',
    categoryPath: '/náhrdelníky',
    shortDescription: 'Minimalistický design s jemnou kapradinou z českých lesů.',
    fullDescription: 'Inspirovaný klidem českých lesů, tento náhrdelník obsahuje jemné listy kapradiny zachycené v čisté pryskyřici. Minimalistický design zdůrazňuje přírodní krásu a organické tvary rostliny. Perfektní volba pro milovníky přírody a jednoduché elegance.'
  },
  'n3': {
    id: 'n3',
    title: 'Loučka v létě',
    price: '2 650 Kč',
    images: ['/placeholder-necklace.jpg'],
    category: 'Náhrdelníky',
    categoryPath: '/náhrdelníky',
    shortDescription: 'Barevná směs lučních květů zachycená v elegantním náhrdelníku.',
    fullDescription: 'Zachycuje podstatu letní louky s pestrou směsí drobných lučních květů. Každý náhrdelník je jedinečný díky přirozené variabilitě květů. Barvy se pohybují od jemných bílých a žlutých po sytější modré a fialové tóny.'
  },
  'n4': {
    id: 'n4',
    title: 'Zimní kouzlo',
    price: '3 100 Kč',
    images: ['/placeholder-necklace.jpg'],
    category: 'Náhrdelníky',
    categoryPath: '/náhrdelníky',
    shortDescription: 'Křehké zimní větvičky s drobnými krystalky.',
    fullDescription: 'Elegantní zimní náhrdelník s křehkými větvičkami a drobnými krystalky, které připomínají ledové krůpěje. Dokonale vystihuje kouzlo zimní přírody.'
  },
  'n5': {
    id: 'n5',
    title: 'Jarní probuzení',
    price: '2 750 Kč',
    images: ['/placeholder-necklace.jpg'],
    category: 'Náhrdelníky',
    categoryPath: '/náhrdelníky',
    shortDescription: 'Mladé lístky a první jarní květy v jemném náhrdelníku.',
    fullDescription: 'Symbolizuje probuzení přírody na jaře s mladými lístky a prvními jarními květy. Jemné a nadějné, jako první paprsky jarního slunce.'
  },
  'n6': {
    id: 'n6',
    title: 'Podzimní symfonie',
    price: '3 000 Kč',
    images: ['/placeholder-necklace.jpg'],
    category: 'Náhrdelníky',
    categoryPath: '/náhrdelníky',
    shortDescription: 'Teplé podzimní barvy listů zachycené v elegantním tvaru.',
    fullDescription: 'Zachycuje bohaté podzimní barvy s teplými tóny listů v elegantním tvaru. Každý kus je jedinečný díky přirozené variabilitě podzimních barev.'
  },
  // Náušnice
  'e1': {
    id: 'e1',
    title: 'Pomněnkové kapky',
    price: '1 890 Kč',
    images: ['/placeholder-earrings.jpg', '/placeholder-earrings.jpg'],
    category: 'Náušnice',
    categoryPath: '/náušnice',
    shortDescription: 'Drobné náušnice s modrými pomněnkami v kapkovitém tvaru.',
    fullDescription: 'Tyto půvabné náušnice ve tvaru kapky obsahují skutečné modré pomněnky - symbol věrné lásky a vzpomínek. Kapkovitý tvar dokonale doplňuje jemnost květů a vytváří elegantní doplněk vhodný pro každý den.'
  },
  'e2': {
    id: 'e2',
    title: 'Zlaté slunce',
    price: '2 100 Kč',
    images: ['/placeholder-earrings.jpg'],
    category: 'Náušnice',
    categoryPath: '/náušnice',
    shortDescription: 'Kruhové náušnice se žlutými květy a zlatými akcenty.',
    fullDescription: 'Slunečné kruhové náušnice ozdobené skutečnými žlutými květy a jemnými zlatými akcenty. Přinášejí teplo a radost do každého dne a dokonale doplňují jak casualové, tak elegantní outfity.'
  },
  'e3': {
    id: 'e3',
    title: 'Bílá čistota',
    price: '1 750 Kč',
    images: ['/placeholder-earrings.jpg'],
    category: 'Náušnice',
    categoryPath: '/náušnice',
    shortDescription: 'Minimalistické náušnice s drobnými bílými květy.',
    fullDescription: 'Čisté a minimalistické náušnice s drobnými bílými květy symbolizují nevinnost a čistotu. Ideální pro nevěsty nebo pro ty, kteří preferují jemné a nenápadné šperky.'
  },
  'e4': {
    id: 'e4',
    title: 'Levandulové sny',
    price: '1 950 Kč',
    images: ['/placeholder-earrings.jpg'],
    category: 'Náušnice',
    categoryPath: '/náušnice',
    shortDescription: 'Dlouhé náušnice s větvičkami levandule.',
    fullDescription: 'Elegantní dlouhé náušnice s větvičkami skutečné levandule. Přinášejí jemnou vůni a krásnou fialovou barvu, která uklidňuje a relaxuje.'
  },
  'e5': {
    id: 'e5',
    title: 'Růžový úsvit',
    price: '2 200 Kč',
    images: ['/placeholder-earrings.jpg'],
    category: 'Náušnice',
    categoryPath: '/náušnice',
    shortDescription: 'Jemné náušnice s růžovými květy sakury.',
    fullDescription: 'Inspirované japonskou sakurou, tyto jemné náušnice obsahují růžové květy v jemném odstínu. Symbolizují krásu a pomíjivost života.'
  },
  // Prsteny
  'r1': {
    id: 'r1',
    title: 'Věčná láska',
    price: '3 500 Kč',
    images: ['/placeholder-ring.jpg', '/placeholder-ring.jpg'],
    category: 'Prsteny',
    categoryPath: '/prsteny',
    shortDescription: 'Romantický prsten s červenými růžemi a zlatým rámem.',
    fullDescription: 'Symbol věčné lásky - tento výjimečný prsten obsahuje miniaturní červené růže zasazené do zlatého rámu. Každá růže je pečlivě vybrána pro svou dokonalou formu a barvu. Ideální jako zásnubní nebo výroční dar.'
  },
  'r2': {
    id: 'r2',
    title: 'Přírodní elegance',
    price: '2 900 Kč',
    images: ['/placeholder-ring.jpg'],
    category: 'Prsteny',
    categoryPath: '/prsteny',
    shortDescription: 'Široký prsten s mozaikou drobných polních květů.',
    fullDescription: 'Široký prsten představující mozaiku drobných polních květů v různých barvách. Každý prsten je unikátní díky náhodné distribuci květů, což vytváří jedinečný přírodní vzor.'
  },
  'r3': {
    id: 'r3',
    title: 'Ranní rosa',
    price: '3 200 Kč',
    images: ['/placeholder-ring.jpg'],
    category: 'Prsteny',
    categoryPath: '/prsteny',
    shortDescription: 'Jemný prsten s bílými květy a perleťovými akcenty.',
    fullDescription: 'Jemný prsten evokující ranní rosu na bílých květech, doplněný perleťovými akcenty, které dodávají šperku ručně vyráběný luxusní vzhled. Symbolizuje nové začátky a čistotu.'
  },
  'r4': {
    id: 'r4',
    title: 'Tajemný les',
    price: '3 800 Kč',
    images: ['/placeholder-ring.jpg'],
    category: 'Prsteny',
    categoryPath: '/prsteny',
    shortDescription: 'Masivní prsten s kapradinami a mechem.',
    fullDescription: 'Tento náramek vás přenese na klidnou procházku lesní stezkou. Obsahuje kapradiny, mech a další lesní rostliny v zemitých zelených tónech. Ideální pro ty, kteří hledají spojení s přírodou.'
  },
  // Náramky
  'b1': {
    id: 'b1',
    title: 'Zahradní sen',
    price: '2 400 Kč',
    images: ['/placeholder-bracelet.jpg', '/placeholder-bracelet.jpg'],
    category: 'Náramky',
    categoryPath: '/náramky',
    shortDescription: 'Široký náramek s různobarevnými zahradními květy.',
    fullDescription: 'Široký náramek zachycující krásu zahradních květů v plném rozkvětu. Pestrobarevná kompozice zahrnuje růže, tulipány, narcisy a další oblíbené zahradní květiny. Dokonalé pro milovníky barev a výrazných doplňků.'
  },
  'b2': {
    id: 'b2',
    title: 'Lesní stezka',
    price: '2 100 Kč',
    images: ['/placeholder-bracelet.jpg'],
    category: 'Náramky',
    categoryPath: '/náramky',
    shortDescription: 'Náramek inspirovaný procházkou lesem s kapradinami a mechem.',
    fullDescription: 'Tento náramek vás přenese na klidnou procházku lesní stezkou. Obsahuje kapradiny, mech a další lesní rostliny v zemitých zelených tónech. Ideální pro ty, kteří hledají spojení s přírodou.'
  },
  'b3': {
    id: 'b3',
    title: 'Levandulové pole',
    price: '2 650 Kč',
    images: ['/placeholder-bracelet.jpg'],
    category: 'Náramky',
    categoryPath: '/náramky',
    shortDescription: 'Elegantní náramek s levandulí a stříbrnými detaily.',
    fullDescription: 'Elegantní náramek s větvičkami skutečné levandule a jemnými stříbrnými akcenty. Levandule je známá svými uklidňujícími vlastnostmi a krásnou fialovou barvou. Náramek je nejen krásný, ale také jemně vonný.'
  },
  'b4': {
    id: 'b4',
    title: 'Mořská bříza',
    price: '2 300 Kč',
    images: ['/placeholder-bracelet.jpg'],
    category: 'Náramky',
    categoryPath: '/náramky',
    shortDescription: 'Jemný náramek s mořskými řasami a perletí.',
    fullDescription: 'Inspirovaný mořskou přírodou, tento jemný náramek obsahuje mořské řasy a perleťové akcenty. Přináší klid a harmonii oceánu přímo na vaše zápěstí.'
  }
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = allProducts[params.id as keyof typeof allProducts];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-7xl mx-auto px-gap sm:px-6 lg:px-8 py-16">
        {/* UI: product page layout polish */}
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link 
            href={product.categoryPath} 
            className="inline-flex items-center text-muted hover:text-text transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zpět na {product.category}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Product Gallery - Left Column */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-square bg-surface rounded-2xl overflow-hidden shadow-soft">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-surface rounded-xl overflow-hidden border-2 border-border hover:border-accent transition-colors cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Meta - Right Column */}
          <div className="space-y-10">
            {/* Title and Price */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-text leading-tight">
                {product.title}
              </h1>
              <p className="text-4xl font-semibold text-text">
                {product.price}
              </p>
              
              {/* Batch/Date Chip */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Vánoční kolekce 2024
              </div>
            </div>

            {/* Short Description */}
            <p className="text-xl text-muted leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Add to Cart Section */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-accent hover:bg-accent/90 text-white h-14 text-lg font-medium rounded-2xl shadow-soft"
                >
                  Přidat do košíku
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl border-border hover:bg-surface">
                  <Heart className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="bg-muted/30 rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-semibold text-text">
                Péče o šperk
              </h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span>Chraňte před přímým sluncem a vysokými teplotami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span>Čistěte jemně suchým hadříkem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span>Nenoste při sportu nebo koupání</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span>Ukládejte v suchém místě</span>
                </li>
              </ul>
            </div>

            {/* Full Description */}
            <div className="border-t border-border pt-10">
              <h3 className="text-2xl font-semibold text-text mb-6">
                O produktu
              </h3>
              <p className="text-muted leading-relaxed text-lg">
                {product.fullDescription}
              </p>
            </div>

            {/* Product Features */}
            <div className="border-t border-border pt-10">
              <h3 className="text-2xl font-semibold text-text mb-6">
                Vlastnosti
              </h3>
              <ul className="space-y-4 text-muted">
                <li className="flex items-center">
                  <span className="text-accent mr-3">•</span>
                  <span>Ručně vyráběno s láskou k detailu</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-3">•</span>
                  <span>Skutečné květy konzervované v pryskyřici</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-3">•</span>
                  <span>Hypoalergenní materiály</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-3">•</span>
                  <span>Každý kus je jedinečný</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-3">•</span>
                  <span>Dodáváno v elegantním balení</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 pt-16 border-t border-border">
          <h2 className="text-4xl font-bold text-text mb-12 text-center">
            Mohlo by se vám líbit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(allProducts)
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  title={relatedProduct.title}
                  price={relatedProduct.price}
                  image={relatedProduct.images[0]}
                  description={relatedProduct.shortDescription}
                  href={`/product/${relatedProduct.id}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
