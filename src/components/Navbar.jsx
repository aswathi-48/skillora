// import { NavLink, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("loggedUser"));

//   const handleLogout = () => {
//     localStorage.removeItem("loggedUser");
//     navigate("/login");
//   };
//  const handleContactClick = () => {
//     // If not on home → go home first
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document
//           .getElementById("contact")
//           ?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     } else {
//       // Already on home → just scroll
//       document
//         .getElementById("contact")
//         ?.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
//       <div
//         className="
//           bg-white rounded-full shadow-sm
//           px-6 py-3
//           flex items-center gap-6
//           w-auto
//           max-w-[95vw]
//           whitespace-nowrap
//         "
//       >
//         {/* Logo */}
//         <NavLink to="/" className="text-sm font-semibold text-dark">
//           Skillora
//         </NavLink>

//         {/* Menu */}
//         <div className="flex items-center gap-4 text-xs">
//           <NavLink to="/about" className="text-gray-700 font-medium">
//             About us
//           </NavLink>

//           <NavLink to="/services" className="text-gray-700 font-medium">
//             Services
//           </NavLink>
// {/* 
//           <NavLink to="/#contact" className="text-gray-700 font-medium">
//             Contact
//           </NavLink> */}
//   <button
//             onClick={handleContactClick}
//             className="text-gray-700 font-medium"
//           >
//             Contact
//           </button>
//           {!user && (
//             <>
//               <NavLink
//                 to="/login"
//                 className="bg-primary px-4 py-1 rounded-full font-semibold"
//               >
//                 Login
//               </NavLink>

//               {/* <button
//                 onClick={() => navigate("/register")}
//                 className="bg-primary px-4 py-1 rounded-full font-semibold"
//               >
//                 Register
//               </button> */}
//             </>
//           )}

//           {user && (
//             <>
//               <span className="font-medium text-gray-700">
//                 Welcome, {user.username} 👋
//               </span>

//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white px-4 py-1 rounded-full"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
    setOpen(false);
  };

  const handleContactClick = () => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <div className="bg-white rounded-full shadow-sm px-6 py-3 flex items-center justify-between max-w-6xl mx-auto">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-sm font-semibold text-dark"
          onClick={() => setOpen(false)}
        >
          Skillora
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 text-xs">
          <NavLink to="/about" className="text-gray-700 font-medium">
            About us
          </NavLink>

          <NavLink to="/services" className="text-gray-700 font-medium">
            Services
          </NavLink>

          <button
            onClick={handleContactClick}
            className="text-gray-700 font-medium"
          >
            Contact
          </button>

          {!user && (
            <NavLink
              to="/login"
              className="bg-primary px-4 py-1 rounded-full font-semibold"
            >
              Login
            </NavLink>
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-3 bg-white rounded-2xl shadow-md px-6 py-4 space-y-4 max-w-6xl mx-auto text-sm">
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About us
          </NavLink>

          <NavLink to="/services" onClick={() => setOpen(false)}>
            Services
          </NavLink>

          <button
            onClick={handleContactClick}
            className="text-left w-full"
          >
            Contact
          </button>

          {!user && (
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="block bg-primary text-center py-2 rounded-full font-semibold"
            >
              Login
            </NavLink>
          )}

          {user && (
            <>
              <p className="text-gray-700">
                Welcome, {user.username} 👋
              </p>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded-full"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

