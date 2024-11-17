import React from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/Hero/HeroSection";
import BgImage from "./assets/bg.png";
import Equipments from "./components/Equipments/Equipments";
import BannerSection from "./components/Banner/BannerSection";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabSection from "./components/tab/TabSection";
import Testimonials from "./components/testimonials/Testimonials";

const BannerData = {
  Image: Img1,
  title: "The importants to take care of yourself",
  subtitle:
    "Consectetur culpa in eu duis incididunt cillum non. Duis excepteur cupidatat sunt magna. Eu officia est cupidatat culpa est consequat quis sunt cillum aute. Ullamco enim magna consectetur est et. Sit incididunt dolore id deserunt qui aliqua labore mollit occaecat labore sunt in.",
};

const BannerData2 = {
  Image: Img2,
  title: "The importants to take care of yourself",
  subtitle:
    "Consectetur culpa in eu duis incididunt cillum non. Duis excepteur cupidatat sunt magna. Eu officia est cupidatat culpa est consequat quis sunt cillum aute. Ullamco enim magna consectetur est et. Sit incididunt dolore id deserunt qui aliqua labore mollit occaecat labore sunt in.",
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div style={bgStyle}>
          <Nav />
          <HeroSection />
        </div>
        <Equipments />
        <BannerSection {...BannerData} />
        <TabSection />
        <BannerSection {...BannerData2} />
        <Testimonials />
      </div>
      ;
    </>
  );
};

export default App;
