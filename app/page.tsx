import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/landing-page/Hero";
import About from "@/components/sections/landing-page/About";
import Categories from "@/components/sections/landing-page/Categories";
import FeaturedOrgs from "@/components/sections/landing-page/FeaturedOrgs";
import CTA from "@/components/sections/landing-page/CTA";

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
