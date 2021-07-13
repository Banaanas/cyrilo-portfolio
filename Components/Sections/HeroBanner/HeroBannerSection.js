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

const StyledSection = styled(GenericStyledSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: calc(
    100vh - 12rem
  ); /* 8rem (HalfMoon) + 4rem (Half of Divider <-- Divider : 8rem) */
  padding-right: 0;
  padding-left: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
    flex-direction: row;
    justify-content: space-around;
    min-height: calc(
      100vh - 14rem
    ); /* 6rem (Halfmoon) + 8rem HeroBannerDivider */
    padding: 1rem;
  }

  #first-link {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
      display: flex;
    }
  }

  #second-link {
    display: flex;

    @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
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

  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
    flex-direction: column;
  }

  /* JavaScript Developer */
  span {
    --letter-spacing: ${({ theme }) => theme.letterSpacing.heroBanner};

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem 0.3rem;
    margin-right: calc(
      -1 * var(--letter-spacing)
    ); /* CSS Var above. To counterbalance the last letter's spacing */
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-family: "Nexa Black", sans-serif;
    letter-spacing: var(--letter-spacing);
    text-transform: uppercase;

    @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection1}) {
      padding: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
      padding: 1rem 1.5rem;
      font-size: ${({ theme }) => theme.fontSizes.xl2};
    }
  }

  span:nth-of-type(1) {
    color: var(--default-white);
    background: radial-gradient(var(--primary-darker), var(--secondary-main));
  }

  span:nth-of-type(2) {
    color: var(--secondary-main);
    background-color: var(--default-white);
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
