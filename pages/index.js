import { useSelector } from "react-redux";
import Head from "next/head";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import HeroBannerSection from "../Components/Sections/HeroBanner/HeroBannerSection";
import Projects from "../Components/Sections/ProjectsSections/Projects";
import AboutMeSection from "../Components/Sections/AboutMe/AboutMeSection";
import ContactSection from "../Components/Sections/Contact/ContactSection";
import ScrollProgressBar from "../Components/ScrollProgressBar";
import { pageTransition, pageVariants } from "../styles/animations";

const Home = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  return (
    <>
      <Head>
        <title key="title">Cyrilo - JavaScript Dev</title>
      </Head>
      <ScrollProgressBar />
      <StyledPageMain
        isMenuOpen={isMenuOpen}
        variants={pageVariants}
        transition={pageTransition}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <HeroBannerSection />
        <Projects />
        <AboutMeSection />
        <ContactSection />
      </StyledPageMain>
    </>
  );
};

export default Home;
