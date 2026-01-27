import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CoursesPage from "./pages/CoursesPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Courses />
       <Contact />
    </>
  );
}

export default function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <ScrollToTop />

      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}
