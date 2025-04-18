import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    window.location.href = '/'
  }

  return (
    <div className="navbar bg-base-100 shadow-sm bg-[#3C5BA6] text-white flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" />
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/list-card">Pokemon List</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Pokemon</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/list-card">Pokemon List</Link></li>
          <li><Link to="/pokeSwipe">Poke Swipe</Link></li>
          <li><Link to="/fun">Fun zone</Link></li>
          {!isAuthenticated ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout}>Déconnexion</button></li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
