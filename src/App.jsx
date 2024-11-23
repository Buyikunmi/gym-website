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
import BottomBannerSection from "./components/Banner/BottomBannerSection";
import Footer from "./components/Banner/Footer/Footer";

const BannerData = {
  Image: Img1,
  title: "Take Care of Your Body: Your Greatest Asset",
  subtitle:
    "Your body is your most valuable tool, and taking care of it is essential for living a healthy, fulfilling life. Regular exercise boosts your energy, strengthens your immune system, and improves mental well-being by reducing stress and enhancing focus. At Get Fit, we’re here to help you build a stronger, healthier you. Start your fitness journey with us and take the first step toward a better life!",
};

const BannerData2 = {
  Image: Img2,
  title: "The Life-Changing benefis of Regular Exercise",
  subtitle:
    "Regular exercise is more than just a way to stay in shape—it’s a powerful tool for transforming your body, mind, and overall well-being. It boosts energy levels, improves heart health, strengthens muscles, and helps you maintain a healthy weight. Start your fitness journey today and experience the incredible advantages of staying active!",
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
        <BottomBannerSection />
        <Footer />
      </div>
      ;
    </>
  );
};

export default App;
