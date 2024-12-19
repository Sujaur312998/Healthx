// import dynamic from "next/dynamic"
import Hero from "@/components/hero_section/Hero"
import SearchBar from "@/components/search/SearchBar"
import Services from "@/components/Services/Services"
import Health_Services from "@/components/health_services/Health_Services"
import Contact from "@/components/contact_form/Contact"
import Doctors from "@/components/doctors/Doctors"
import Footer from "@/components/footer/Footer"

// const Hero = dynamic(() => import("@/components/hero_section/Hero"),{ssr:false})
// const SearchBar = dynamic(() => import("@/components/search/SearchBar"),{ssr:false})
// const Services = dynamic(() => import("@/components/Services/Services"),{ssr:false})
// const Health_Services = dynamic(() =>import("@/components/health_services/Health_Services"),{ssr:false})
// const Contact = dynamic(() => import("@/components/contact_form/Contact"),{ssr:false})
// const Footer = dynamic(() => import("@/components/footer/Footer"),{ssr:false})
// const Doctors = dynamic(() => import("@/components/doctors/doctors"),{ssr:false})

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
