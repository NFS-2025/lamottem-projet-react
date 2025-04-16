import { useEffect, useState } from 'react'

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    window.location.href = '/' // ou navigate('/')
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><a href="/">Accueil</a></li>
            <li><a href="/list-card">Pokemon List</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Accueil</a></li>
          <li><a href="/list-card">Pokemon List</a></li>
          {/* <li><a href="/contact">Contact</a></li> */}
          {!isAuthenticated ? (
            <>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
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
