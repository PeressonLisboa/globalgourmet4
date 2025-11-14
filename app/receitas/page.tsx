import Image from 'next/image'
import Link from 'next/link'
import { receitas } from '../../data/receitas'

export default function ReceitasPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Global Gourmet4</Link>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/receitas" className="hover:underline">Receitas</Link>
            <Link href="/assinatura" className="hover:underline">Assinatura</Link>
            <Link href="/termos" className="hover:underline">Termos</Link>
            <Link href="/privacidade" className="hover:underline">Privacidade</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Nossas Receitas</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {receitas.map((receita) => (
            <div key={receita.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={receita.imagem}
                alt={receita.titulo}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{receita.titulo}</h2>
                <p className="text-gray-600 mb-2">{receita.descricao}</p>
                <p className="text-sm text-gray-500 mb-2">Região: {receita.regiao}</p>
                <p className="text-sm text-gray-500 mb-4">Dieta: {receita.dieta}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500">{'★'.repeat(Math.floor(receita.avaliacao))}</span>
                  <span className="ml-2">{receita.avaliacao}/5</span>
                </div>
                <Link href={`/receitas/${receita.id}`} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                  Ver Receita
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Global Gourmet4. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}