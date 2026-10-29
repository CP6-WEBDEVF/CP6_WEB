
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

      <main>
        <section>
          <p>Experiências extraordinárias</p>

          <h1>O extraordinário está ao seu alcance.</h1>

          <p>
            Descubra uma seleção exclusiva de carros importados
            para transformar cada trajeto em uma experiência única.
          </p>

          <Link to="/carros">
            Explorar frota
          </Link>
        </section>

        <section>
          <p>Nossa seleção</p>
          <h2>Veículos em destaque</h2>

          <p>
            Modelos selecionados para quem valoriza desempenho,
            conforto e sofisticação.
          </p>

          <div>
            {destaques.map((carro) => (
              <Card key={carro.id} carro={carro} />
            ))}
          </div>

          <Link to="/carros">
            Ver todos os veículos
          </Link>
        </section>

        <section>
          <h2>Sua próxima experiência começa aqui.</h2>

          <p>
            Encontre o veículo ideal para sua próxima jornada.
          </p>

          <Link to="/carros">
            Conhecer a frota
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
