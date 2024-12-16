import Hero from "@/components/hero_section/Hero";
import SearchBar from "@/components/search/SearchBar";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Services />
    </div>
  );
}
