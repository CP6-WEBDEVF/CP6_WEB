
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

function Home() {
  const destaques = [
    {
      id: 1,
      nome: 'Porsche 911 Carrera',
      ano: 2025,
      categoria: 'Esportivo',
      cambio: 'Automático',
      preco: 2500,
      imagem: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    },
    {
      id: 2,
      nome: 'Mercedes-Benz Classe G',
      ano: 2025,
      categoria: 'SUV de luxo',
      cambio: 'Automático',
      preco: 3200,
      imagem: 'https://images.unsplash.com/photo-1563720223185-11003d516935',
    },
    {
      id: 3,
      nome: 'BMW Série 4',
      ano: 2024,
      categoria: 'Premium',
      cambio: 'Automático',
      preco: 1800,
      imagem: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    },
  ]

  return (
    <>
      <Navbar />

      <main className="bg-[#111111] text-white">
        <section className="relative flex min-h-[580px] items-center overflow-hidden bg-gradient-to-r from-black via-[#111111]/95 to-[#111111]/40 px-6 py-20 sm:min-h-[650px] lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37] sm:text-sm">
              Experiências extraordinárias
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              O extraordinário está ao seu alcance.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              Descubra uma seleção exclusiva de carros importados
              para transformar cada trajeto em uma experiência única.
            </p>

            <Link
              to="/carros"
              className="mt-8 inline-flex rounded-lg bg-[#d4af37] px-7 py-3.5 font-semibold text-black transition-colors hover:bg-[#f0ce59]"
            >
              Explorar frota
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                Nossa seleção
              </p>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Veículos em destaque
              </h2>

              <p className="mt-3 max-w-xl text-gray-400">
                Modelos selecionados para quem valoriza desempenho,
                conforto e sofisticação.
              </p>
            </div>

            <Link
              to="/carros"
              className="text-sm font-semibold text-[#d4af37] transition-colors hover:text-[#f0ce59]"
            >
              Ver todos os veículos →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destaques.map((carro) => (
              <Card key={carro.id} carro={carro} />
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#181818] px-6 py-16 text-center sm:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            VELTOR
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            Sua próxima experiência começa aqui.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Encontre o veículo ideal para sua próxima jornada.
          </p>

          <Link
            to="/carros"
            className="mt-7 inline-flex rounded-lg border border-[#d4af37] px-7 py-3 text-sm font-semibold text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black"
          >
            Conhecer a frota
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
