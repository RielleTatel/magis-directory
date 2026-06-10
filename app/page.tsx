import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import FeaturedOrgs from "@/components/sections/FeaturedOrgs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Categories />
        <FeaturedOrgs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
