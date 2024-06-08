import Image from "next/image";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MainBanner />
      <Footer />
    </div>  
    );
}
