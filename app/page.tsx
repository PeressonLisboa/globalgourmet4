import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Global Gourmet4</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/receitas" className="hover:underline">Receitas</Link>
            <Link href="/assinatura" className="hover:underline">Assinatura</Link>
            <Link href="/termos" className="hover:underline">Termos</Link>
            <Link href="/privacidade" className="hover:underline">Privacidade</Link>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section
        className="h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c6740bb4-0f37-4483-9a7b-4f5a47bdd04c.jpg)' }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4">Bem-vindo ao Global Gourmet4</h2>
          <p className="text-xl mb-6">Descubra receitas deliciosas de todo o mundo</p>
          <Link href="/receitas" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
            Explorar Receitas
          </Link>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Sobre Nós</h3>
          <p className="text-lg text-center max-w-3xl mx-auto">
            O Global Gourmet4 reúne uma variedade de pratos deliciosos de todo o mundo, com foco na Europa, América Latina e América do Sul.
            Oferecemos mais de 450 receitas, desde tradicionais até modernas e criativas, todas feitas com ingredientes frescos e de alta qualidade.
            Nossos chefs garantem que cada receita seja fácil de seguir e resulte em pratos incríveis.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Características</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Mais de 450 Receitas</h4>
              <p>De todo o mundo, para todos os gostos e dietas.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Vídeos e Fotos Passo a Passo</h4>
              <p>Ajuda visual para preparar cada prato com facilidade.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">Avaliações e Comentários</h4>
              <p>Escolha as melhores receitas com base em opiniões de usuários.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Notícias e Tendências Culinárias</h3>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Fique por dentro das últimas tendências culinárias e novidades do mundo da gastronomia.
          </p>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-bold mb-6">Assinatura Premium</h3>
          <p className="text-lg mb-6">Acesse conteúdo exclusivo e recursos adicionais por apenas R$80, divididos em até 5x de R$16.</p>
          <Link href="/assinatura" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
            Assinar Agora
          </Link>
        </section>
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