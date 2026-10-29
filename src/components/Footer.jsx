
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">

        <div>
          <Link
            to="/"
            className="text-2xl font-bold tracking-[0.2em] text-[#d4af37]"
          >
            VELTOR
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
            Experiências extraordinárias ao volante.
            Encontre o carro ideal para sua próxima jornada.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Navegação
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-[#d4af37]"
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                to="/carros"
                className="transition-colors hover:text-[#d4af37]"
              >
                Nossa frota
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contato
          </h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p>São Paulo, SP</p>
            <p>contato@veltor.com.br</p>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} VELTOR. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
