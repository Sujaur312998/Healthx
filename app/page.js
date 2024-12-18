import Hero from "@/components/hero_section/Hero";
import SearchBar from "@/components/search/SearchBar";
import Services from "@/components/Services/Services";
import Health_Services from "@/components/health_services/Health_Services";
import Contact from "@/components/contact_form/Contact";
import Footer from "@/components/footer/Footer";
import Doctors from "@/components/doctors/doctors";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Services />
      <Health_Services />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
}
