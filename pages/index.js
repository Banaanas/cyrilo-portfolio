import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import HeroBannerSection from "../Components/Sections/HeroBanner/HeroBannerSection";
import Projects from "../Components/Sections/ProjectsSections/Projects";
import AboutMeSection from "../Components/Sections/AboutMe/AboutMeSection";
import ContactSection from "../Components/Sections/Contact/ContactSection";
import ScrollProgressBar from "../Components/ScrollProgressBar";
import { pageVariants } from "../styles/animations";
import useTranslation from "next-translate/useTranslation";

const Home = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  // AnimatePresence Key
  const router = useRouter();

  // i18n - Translation
  const { t } = useTranslation("SEO");
  const metaDescription = t("description");

  return (
    <>
      <Head>
        <title key="title">Cyrilo - JavaScript Dev</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://cyrilo.dev/" />
      </Head>
      <ScrollProgressBar />
      <StyledPageMain
        isMenuOpen={isMenuOpen}
        initial="initial"
        animate="animate"
        exit="initial"
        variants={pageVariants}
        key={router} /* AnimatePresence Key */
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
