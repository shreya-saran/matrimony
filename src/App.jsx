import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import RegistrationRow from './components/RegistrationRow';
import ServicesGrid from './components/ServicesGrid';
import CountriesGrid from './components/CountriesGrid';
import ClientsMarquee from './components/Clients';
import HeroContactSection from './components/Contact';
import Footer from './components/Footer';

function App(){
  return (
    <>
      <Navbar />
      <HeroSection />
      <RegistrationRow />
      <ServicesGrid />
      <CountriesGrid />
      <ClientsMarquee />
      <HeroContactSection />
      <Footer />
    </>
  );
}
export default App;
