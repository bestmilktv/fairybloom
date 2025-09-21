export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vítejte v Fairy Bloom
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Elegantní šperky s opravdovými květinami z českých luk a lesů
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Náhrdelníky</h3>
              <p className="text-gray-600">Elegantní náhrdelníky s květinami</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Náušnice</h3>
              <p className="text-gray-600">Jemné náušnice pro každodenní eleganci</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Prsteny</h3>
              <p className="text-gray-600">Jedinečné prsteny pro výjimečné okamžiky</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Náramky</h3>
              <p className="text-gray-600">Stylové náramky plné přírodní krásy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
