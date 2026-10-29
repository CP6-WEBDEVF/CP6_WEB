
import { Link } from 'react-router-dom'

function Card({ carro }) {
  return (
    <article>
      <img
        src={carro.imagem}
        alt={carro.nome}
      />

      <div>
        <span>{carro.categoria}</span>

        <h2>{carro.nome}</h2>

        <p>
          Ano: {carro.ano}
        </p>

        <p>
          Câmbio: {carro.cambio}
        </p>

        <p>
          {carro.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}{' '}
          / dia
        </p>

        <Link to="/carros">
          Ver detalhes
        </Link>
      </div>
    </article>
  )
}

export default Card
