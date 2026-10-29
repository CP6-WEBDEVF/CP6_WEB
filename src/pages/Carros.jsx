
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import AudiR8 from '../assets/Audi r8.jpg'
import BMWSérie4 from '../assets/BMW Série 4.jpg'
import Camaro from '../assets/camaro.jpg'
import MercedesClasseG from '../assets/Mercedes-Benz Classe G.jpg'
import Porsche911Carrera from '../assets/Porsche 911 Carrera.jpg'
import RangeRoverSport from '../assets/Range Rover Sport.jpg'


function Carros() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')

  const carros = [
    {
      id: 1,
      nome: 'Porsche 911 Carrera',
      ano: 2025,
      categoria: 'Esportivo',
      cambio: 'Automático',
      preco: 2500,
      imagem: Porsche911Carrera,
    },
    {
      id: 2,
      nome: 'Mercedes-Benz Classe G',
      ano: 2025,
      categoria: 'SUV de luxo',
      cambio: 'Automático',
      preco: 3200,
      imagem: MercedesClasseG,
    },
    {
      id: 3,
      nome: 'BMW Série 4',
      ano: 2024,
      categoria: 'Premium',
      cambio: 'Automático',
      preco: 1800,
      imagem: BMWSérie4,
    },
    {
      id: 4,
      nome: 'Audi R8',
      ano: 2024,
      categoria: 'Esportivo',
      cambio: 'Automático',
      preco: 2800,
      imagem: AudiR8,
    },
    {
      id: 5,
      nome: 'Range Rover Sport',
      ano: 2025,
      categoria: 'SUV de luxo',
      cambio: 'Automático',
      preco: 2900,
      imagem: RangeRoverSport,
    },
    {
      id: 6,
      nome: 'Camaro',
      ano: 2024,
      categoria: 'Premium',
      cambio: 'Automático',
      preco: 1500,
      imagem: Camaro,
    },
  ]

  const categorias = ['Todos', 'Esportivo', 'SUV de luxo', 'Premium']

  const carrosFiltrados =
    categoriaSelecionada === 'Todos'
      ? carros
      : carros.filter(
          (carro) => carro.categoria === categoriaSelecionada
        )

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#111111] text-white">
        <section className="border-b border-white/10 px-6 py-16 text-center sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Excelência sobre rodas
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Nossa frota
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Encontre o carro ideal para sua próxima experiência.
            Sofisticação, desempenho e conforto em cada viagem.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Explore os veículos
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Escolha uma categoria para encontrar seu próximo carro.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                  categoriaSelecionada === categoria
                    ? 'border-[#d4af37] bg-[#d4af37] text-black'
                    : 'border-white/20 text-gray-300 hover:border-[#d4af37] hover:text-[#d4af37]'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {carrosFiltrados.map((carro) => (
              <Card key={carro.id} carro={carro} />
            ))}
          </div>

          {carrosFiltrados.length === 0 && (
            <p className="py-12 text-center text-gray-400">
              Nenhum veículo encontrado nessa categoria.
            </p>
          )}

          <p className="mt-8 text-xs text-gray-500">
            * Veículos, imagens e valores apresentados são ilustrativos.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Carros
