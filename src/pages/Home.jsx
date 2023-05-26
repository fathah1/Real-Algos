import React  from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Newsletter from "../components/Newsletter/Newsletter";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutUs />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Newsletter />
    </MainLayout>
  );
};

export default Home;
