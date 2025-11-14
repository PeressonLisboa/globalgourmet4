import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { receitas } from '../../../data/receitas'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ReceitaPage({ params }: PageProps) {
  const { id } = await params
  const receita = receitas.find(r => r.id === parseInt(id))

  if (!receita) {
    notFound()
  }

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
        <div className="max-w-4xl mx-auto">
          <Image
            src={receita.imagem}
            alt={receita.titulo}
            width={800}
            height={600}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">{receita.titulo}</h1>
          <p className="text-lg mb-6">{receita.descricao}</p>
          <div className="mb-6">
            <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
              {receita.regiao}
            </span>
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              {receita.dieta}
            </span>
          </div>
          <div className="flex items-center mb-8">
            <span className="text-yellow-500 text-2xl">{'★'.repeat(Math.floor(receita.avaliacao))}</span>
            <span className="ml-2 text-xl">{receita.avaliacao}/5</span>
          </div>

          {/* Simulação de passos */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Passos para Preparo</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Prepare os ingredientes frescos.</li>
              <li>Cozinhe conforme a receita tradicional.</li>
              <li>Sirva quente e aproveite!</li>
            </ol>
          </section>

          {/* Vídeo simulado */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Vídeo Passo a Passo</h2>
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <p>Vídeo em breve</p>
            </div>
          </section>

          {/* Comentários */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Comentários</h2>
            <div className="space-y-4">
              {receita.comentarios.map((comentario, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <p>{comentario}</p>
                </div>
              ))}
            </div>
          </section>
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