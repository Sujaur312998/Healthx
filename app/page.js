import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/hero_section/Hero"),{ssr:false})
const SearchBar = dynamic(() => import("@/components/search/SearchBar"),{ssr:false})
const Services = dynamic(() => import("@/components/Services/Services"),{ssr:false})
const Health_Services = dynamic(() =>import("@/components/health_services/Health_Services"),{ssr:false})
const Contact = dynamic(() => import("@/components/contact_form/Contact"),{ssr:false})
const Footer = dynamic(() => import("@/components/footer/Footer"),{ssr:false})
const Doctors = dynamic(() => import("@/components/doctors/doctors"),{ssr:false})

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
