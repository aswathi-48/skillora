import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-50 ">
      <div className="bg-white rounded-full shadow-sm px-4 py-3.5 flex items-center justify-between w-[480px] max-w-[68vw]">

        {/* Logo */}
        <NavLink to="/" className="text-sm font-semibold text-dark">
          Skillora
        </NavLink>

        {/* Menu */}
        <div className="flex items-center space-x-3">
          <NavLink
            to="/about"
            className="text-xs text-gray-700 font-medium hover:text-dark"
          >
            About us
          </NavLink>

          <NavLink
            to="/services"
            className="text-xs text-gray-700 font-medium hover:text-dark"
          >
            Services
          </NavLink>
           <NavLink
            to="/contact"
            className="text-xs text-gray-700 font-medium hover:text-dark"
          >
            Contact
          </NavLink>

          <button className="bg-primary text-dark text-xs px-3 py-1 rounded-full font-semibold hover:opacity-90 transition">
            Register
          </button>
        </div>

      </div>
    </nav>
  )
}
