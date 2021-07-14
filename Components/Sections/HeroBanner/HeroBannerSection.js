import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import { FaArrowDown as DownArrowIcon } from "react-icons/fa";
import smoothScrollTo from "../../../utils/smoothScrollTo";
import GenericStyledSection from "../../StyledComponents/StyledSection";
import navLinks from "../../../data/navLinks";
import HeroBannerDivider from "../../Dividers/HeroBannerDivider";
import PlanetCyril from "./PlanetCyril";
import StyledLink from "../../StyledComponents/StyledLink";
import appTheme from "../../../styles/appTheme";

const StyledSection = styled(GenericStyledSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: calc(100vh - 192px); /* 128px (HalfMoon) + 64px(Half of Divider <-- Divider : 64px) */

  padding-right: 0;
  padding-left: 0;

  @media (min-width: ${appTheme.breakpoints.heroBannerSection2}) {
    flex-direction: row;
    justify-content: space-around;
    min-height: calc(100vh - 224px); /* 96px (Halfmoon) + 128px HeroBannerDivider */
    padding: 16px;
  }

  #first-link {
    display: none;

    @media (min-width: ${appTheme.breakpoints.heroBannerSection2}) {
      display: flex;
    }
  }

  #second-link {
    display: flex;

    @media (min-width: ${appTheme.breakpoints.heroBannerSection2}) {
      display: none;
    }
  }
`;

/* Container for H1 + First Link */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: min-content;

  @media (min-width: ${appTheme.breakpoints.heroBannerSection2}) {
    height: 500px;
  }
`;

const TitleH1 = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: ${appTheme.breakpoints.heroBannerSection2}) {
    flex-direction: column;
  }

  /* JavaScript Developer */

  span {
    --letter-spacing: ${appTheme.letterSpacing.heroBanner};

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 16px 4px;
    margin-right: calc(-1 * ${appTheme.letterSpacing.heroBanner};); /* CSS Var above. To counterbalance the last letter's spacing */
    font-size: ${appTheme.fontSizes.xl};
    font-family: ${appTheme.fontFamily.nexaBlack},
    ${appTheme.fontFamily.alternativeFonts};
    letter-spacing: ${appTheme.letterSpacing.heroBanner};
    text-transform: uppercase;

    @media (min-width: ${appTheme.breakpoints.heroBannerSection1}) {
      padding: 16px;
    }

    @media (min-width: ${appTheme.breakpoints.heroBannerSection2}) {
      padding: 16px 24px;
      font-size: ${appTheme.fontSizes.xl2};
    }
  }

  span:nth-of-type(1) {
    color: ${appTheme.colors.white};
    background: radial-gradient(${appTheme.colors.primary.darker},
    ${appTheme.colors.secondary.default});
  }

  span:nth-of-type(2) {
    color: ${appTheme.colors.secondary.default};
    background-color: ${appTheme.colors.white};
  }
`;

const HeroBannerSection = () => {
  // i18n - Translation
  const { t } = useTranslation("heroBannerSection");
  const ProjectsLink = t("link");

  return (
    <>
      <StyledSection>
        <Container>
          <TitleH1>
            <span>JavaScript</span>
            <span>Developer</span>
          </TitleH1>
          <NextLink href={navLinks[1].href} passHref>
            <StyledLink
              id="first-link"
              onClick={() => smoothScrollTo(navLinks[1].scrollName)}
            >
              <span>{ProjectsLink}</span>
              <DownArrowIcon />
            </StyledLink>
          </NextLink>
        </Container>

        <PlanetCyril />

        <NextLink href={navLinks[1].href} passHref>
          <StyledLink
            id="second-link"
            onClick={() => smoothScrollTo(navLinks[1].scrollName)}
          >
            <span>{ProjectsLink}</span>
            <DownArrowIcon />
          </StyledLink>
        </NextLink>
      </StyledSection>
      <HeroBannerDivider />
    </>
  );
};

export default HeroBannerSection;
