import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          bg-white rounded-full shadow-sm
          px-6 py-3
          flex items-center gap-6
          w-auto
          max-w-[95vw]
          whitespace-nowrap
        "
      >
        {/* Logo */}
        <NavLink to="/" className="text-sm font-semibold text-dark">
          Skillora
        </NavLink>

        {/* Menu */}
        <div className="flex items-center gap-4 text-xs">
          <NavLink to="/about" className="text-gray-700 font-medium">
            About us
          </NavLink>

          <NavLink to="/services" className="text-gray-700 font-medium">
            Services
          </NavLink>

          <NavLink to="/contact" className="text-gray-700 font-medium">
            Contact
          </NavLink>

          {!user && (
            <>
              <NavLink to="/login" className="bg-primary px-4 py-1 rounded-full font-semibold">
                Login
              </NavLink>

              {/* <button
                onClick={() => navigate("/register")}
                className="bg-primary px-4 py-1 rounded-full font-semibold"
              >
                Register
              </button> */}
            </>
          )}

          {user && (
            <>
              <span className="font-medium text-gray-700">
                Welcome, {user.username} 👋
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded-full"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
