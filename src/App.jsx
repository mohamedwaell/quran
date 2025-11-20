import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";

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
      <main className=" py-6   relative overflow-hidden bg-[var(--color-background)]">
        <Routes>
          <Route path="/" element={<Home />} />
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
