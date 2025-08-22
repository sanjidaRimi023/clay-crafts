import HeroBanner from "./components/hero-banner";
import WelcomeSection from "./components/welcome";
import NewProducts from "./components/new-products";
import Services from "./components/services";
import OurGallery from "./components/our-gellary";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WelcomeSection/>
      <NewProducts />
      <Services/>
      <OurGallery />
    </>
  );
}
