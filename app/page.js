import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
      <ScrollToTop />
    </main>
  );
}
