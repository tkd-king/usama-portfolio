import React from "react";
import WorkSection from "../orgnisms/WorkSection";
import Header from "../orgnisms/Header";
import Container from "../atoms/Container";
import Banner from "../orgnisms/Banner";
import Achivements from "../orgnisms/Achivements";
import Services from "../orgnisms/Services";
import ExperiencEducation from "../orgnisms/ExperiencEducation";
import SwiperCumponent from "../molecules/Swiper.molecules";
import StoriesCustomorSection from "../orgnisms/StoriesCustomorSection";

const HomeTemp = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Achivements />
      <Services />
      <Container>
        <WorkSection />
      </Container>
      <ExperiencEducation />
      <StoriesCustomorSection />
    </div>
  );
};

export default HomeTemp;
