import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Programs from "./sections/ProgramsSection";
import Teachers from "./sections/Teachers";
import Contact from "./sections/Contact";
import NotFound from "./sections/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import Loading from "./components/Loading";
import ScrollToTop  from "./components/ScrollToTop";
function App() {
  return (
    <>
    <Loading />
    <ScrollToTop />
    <div className="">
      <Navbar />
      <main className="px-4 py-6 sm:px-6 lg:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
    </>
  );
}

export default App;
