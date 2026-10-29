import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101010]/95 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-xl font-black text-black">
            V
          </span>

          <div>
            <h1 className="text-lg font-bold tracking-[0.2em] text-white">
              VELTOR
            </h1>
            <p className="text-[9px] tracking-[0.25em] text-amber-400">
              LUXURY EXPERIENCE
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-5 sm:gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? 'text-amber-400' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/carros"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? 'text-amber-400' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            Veículos
          </NavLink>

          <Link
            to="/carros"
            className="hidden rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-300 sm:inline-block"
          >
            Explorar frota
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar