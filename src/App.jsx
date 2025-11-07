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
import MatrimonyPopup from "./components/MatrimonyPopup";
import CallbackButton from "./components/CallbackButton";
import FloatingButtons from "./components/FloatingButtons";
import NumberBanner from "./components/NumberBanner";

function App() {
  return (
    <BrowserRouter>
      <MatrimonyPopup />
      <Navbar />
      <CallbackButton />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <HeroSection />
              </section>
              <section id="clients">
                <ClientsMarquee />
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
              <section id="countries">
                <CountriesGrid />
              </section>


              <section id="testimonials">
                <Testimonials />
              </section>

              <section id="numberbanner">
                <NumberBanner />
              </section>

              <section id="contact">
                <HeroContactSection />
              </section>

              <Footer />
              <FloatingButtons />
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
