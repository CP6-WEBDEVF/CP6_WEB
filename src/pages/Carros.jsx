
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

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
    {
      id: 4,
      nome: 'Audi R8',
      ano: 2024,
      categoria: 'Esportivo',
      cambio: 'Automático',
      preco: 2800,
      imagem: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a',
    },
    {
      id: 5,
      nome: 'Range Rover Sport',
      ano: 2025,
      categoria: 'SUV de luxo',
      cambio: 'Automático',
      preco: 2900,
      imagem: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b',
    },
    {
      id: 6,
      nome: 'BMW Série 3',
      ano: 2024,
      categoria: 'Premium',
      cambio: 'Automático',
      preco: 1500,
      imagem: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d',
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

      <main>
        <section>
          <h1>Nossa frota</h1>
          <p>Encontre o carro ideal para sua próxima experiência.</p>
        </section>

        <section>
          <h2>Explore os veículos</h2>

          <div>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>

          <div>
            {carrosFiltrados.map((carro) => (
              <Card key={carro.id} carro={carro} />
            ))}
          </div>

          {carrosFiltrados.length === 0 && (
            <p>Nenhum veículo encontrado nessa categoria.</p>
          )}
        </section>

        <p>
          * Veículos, imagens e valores apresentados são ilustrativos.
        </p>
      </main>

      <Footer />
    </>
  )
}

export default Carros
