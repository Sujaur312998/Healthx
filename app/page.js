// import dynamic from "next/dynamic"
import Hero from "@/components/hero_section/Hero";
import SearchBar from "@/components/search/SearchBar";
import Services from "@/components/Services/Services";
import Health_Services from "@/components/health_services/Health_Services";
import Doctors from "@/components/doctors/doctors";
import Contact from "@/components/contact_form/Contact";
import Footer from "@/components/footer/Footer";

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
