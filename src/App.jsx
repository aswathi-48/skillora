import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OurStory from "./pages/OurStory";
import Features from "./components/Features";
import Courses from "./components/Courses";
import CourseDetails from "./pages/CourseDetails";
import AppDownload from "./components/AppDownload";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Courses />
      <AppDownload />
      <Events />
      <Testimonials />
    </>
  );
}

export default function App() {
  const location = useLocation();

  // Hide Navbar/Footer on login/register if those routes exist/are needed
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {!hideLayout && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/features" element={<Features />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/contact" element={<Footer />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}
