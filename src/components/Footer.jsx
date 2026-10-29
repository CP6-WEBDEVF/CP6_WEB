
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <Link to="/">
            VELTOR
          </Link>

          <p>
            Experiências extraordinárias ao volante.
            Encontre o carro ideal para sua próxima jornada.
          </p>
        </div>

        <div>
          <h3>Navegação</h3>

          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>

            <li>
              <Link to="/carros">Nossa frota</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contato</h3>

          <p>São Paulo, SP</p>
          <p>contato@veltor.com.br</p>
        </div>
      </div>

      <div>
        <p>
          © {new Date().getFullYear()} VELTOR.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
