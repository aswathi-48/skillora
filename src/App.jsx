import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Courses from "./components/Courses"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import CoursesPage from "./pages/CoursesPage"

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Courses /> {/* ✅ added */}
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<CoursesPage />} /> {/* ✅ */}
      </Routes>

      <Footer />
    </>
  )
}
