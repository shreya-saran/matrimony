// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import RegistrationRow from "./components/RegistrationRow";
import ServicesGrid from "./components/ServicesGrid";
import CountriesGrid from "./components/CountriesGrid";
import ClientsMarquee from "./components/Clients";
import HeroContactSection from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import SuccessStories from "./components/SuccessStories";
import PrivacyPolicy from "./components/privacypolicy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <HeroSection />
                <RegistrationRow />
              </section>

              <section id="register">
                <RegistrationRow />
              </section>

              <section id="success">
                <SuccessStories />
              </section>

              <section id="services">
                <ServicesGrid />
              </section>

              <section id="testimonials">
                <Testimonials />
              </section>

              <section id="clients">
                <ClientsMarquee />
              </section>

              <section id="contact">
                <HeroContactSection />
              </section>

              <Footer />
            </>
          }
        />

        {/* Privacy policy route */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
