import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import HeroBannerSection from "../Components/Sections/HeroBanner/HeroBannerSection";
import Projects from "../Components/Sections/ProjectsSections/Projects";
import AboutMeSection from "../Components/Sections/AboutMe/AboutMeSection";
import ContactSection from "../Components/Sections/Contact/ContactSection";
import ScrollProgressBar from "../Components/ScrollProgressBar";
import pageVariants from "../styles/animations";

const Home = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  // AnimatePresence Key
  const router = useRouter();

  // i18n - Translation
  const { t } = useTranslation("SEO");
  const pageTitle = t("title");
  const pageDescription = t("description");

  return (
    <>
      {/* Cf. -> Note 6 - SEO */}
      <Head>
        {/* Primary Meta Tags */}
        <title key="title">{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href={`https://cyrilo.dev${router.asPath}`}
          key="canonical"
        />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} key="og-title" />
        <meta
          property="og:url"
          content={`https://cyrilo.dev${router.asPath}`}
          key="og-url"
        />
        <meta property="og:locale" content="en" key="og-locale" />
        <meta
          property="og:locale:alternate"
          content="fr"
          key="og-locale-alternate-1"
        />
        <meta
          property="og:locale:alternate"
          content="es"
          key="og-locale-alternate-2"
        />
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
