import HeroBanner from "./components/hero-banner";
import WelcomeSection from "./components/welcome";
import NewProducts from "./components/new-products";
import Services from "./components/services";
import OurGallery from "./components/our-gellary";
import UserInfo from "./components/user-info";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession()
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
