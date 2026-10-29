
import { Link } from 'react-router-dom'

function Card({ carro }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#171717] text-white transition-transform duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50">
      <div className="h-52 overflow-hidden">
        <img
          src={carro.imagem}
          alt={carro.nome}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
          {carro.categoria}
        </span>

        <h2 className="mt-2 text-xl font-bold">
          {carro.nome}
        </h2>

        <div className="mt-4 space-y-2 text-sm text-gray-400">
          <p>Ano: {carro.ano}</p>
          <p>Câmbio: {carro.cambio}</p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div>
            <p className="text-xs text-gray-400">Diária a partir de</p>

            <p className="mt-1 text-lg font-bold text-[#d4af37]">
              {carro.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <Link
            to="/carros"
            className="rounded-lg bg-[#d4af37] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#f0ce59]"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Card
