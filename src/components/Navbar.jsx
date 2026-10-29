import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          VELTOR
        </Link>

        <div>
          <NavLink to="/">
            Início
          </NavLink>

          <NavLink to="/carros">
            Veículos
          </NavLink>
        </div>

        <Link to="/carros">
          Explorar frota
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
