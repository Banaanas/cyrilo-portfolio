import NextLink from "next/link";
import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import styled from "@emotion/styled";
import { TiHome as HomeIcon } from "react-icons/ti";
import { useRouter } from "next/router";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledLink from "../Components/StyledComponents/StyledLink";
import StyledSection from "../Components/StyledComponents/StyledSection";
import pageVariants from "../styles/animations";
import appTheme from "../styles/appTheme";

const TitleH1 = styled.h1`
  margin-bottom: 80px; /* Margin between H1 and Link */
  color: ${appTheme.colors.h1Color404};
  font-size: ${appTheme.fontSizes.xl4};
  font-family: ${appTheme.fontFamily.nexaBlack},
  ${appTheme.fontFamily.alternativeFonts};
  text-align: center;
  text-transform: uppercase;
  text-wrap: normal;

  #r-letter {
    display: inline-flex;
    color: ${appTheme.colors.rLetter404};
    transform: scaleX(-1);
  }

  @media (min-width: 360px) {
    font-size: ${appTheme.fontSizes.xl5};
  }
  @media (min-width: 448px) {
    font-size: ${appTheme.fontSizes.xl6};
  }
`;

const Custom404 = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  // i18n - Translation
  const { t } = useTranslation("404");
  const textLink = t("textLink");

  // AnimatePresence Key
  const router = useRouter();

  return (
    <>
      <Head>
        <title key="title">Cyrilo Dev | 404 - Not Found</title>
      </Head>
      <StyledPageMain
        isMenuOpen={isMenuOpen}
        initial="initial"
        animate="animate"
        exit="initial"
        variants={pageVariants}
        key={router} /* AnimatePresence Key */
      >
        <StyledSection>
          <TitleH1>
            404 - Er<span id="r-letter">r</span>or
          </TitleH1>
          <NextLink href="/" passHref>
            <StyledLink>
              <span>{textLink}</span>
              <HomeIcon />
            </StyledLink>
          </NextLink>
        </StyledSection>
      </StyledPageMain>
    </>
  );
};

export default Custom404;
