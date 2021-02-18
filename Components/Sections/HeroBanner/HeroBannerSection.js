import { useEffect } from "react";
import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Element as ScrollWrapper } from "react-scroll";
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
  ); /* 8rem (Halfmoon) + 4rem (Half of Divider <-- Divider : 8rem) */
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
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: min-content;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
    height: 500px;
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
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
    padding: 1rem 0.1rem;
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
    background-color: var(--secondary-main);
    border: 4px solid var(--secondary-main);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
      border-bottom: none;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 0;
    }
  }
  span:nth-of-type(2) {
    color: var(--secondary-main);
    background-color: var(--default-white);
    border: 4px solid var(--secondary-main);
    border-color: var(--default-white);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
      border-top: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
`;

const HeroBannerSection = () => {
  // i18n - Translation
  const { t } = useTranslation("heroBannerSection");
  const ProjectsLink = t("link");

  // React Intersection Observer
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  // Update HashName when Element Scrolled
  useEffect(() => {
    /* if (inView) {
      updateHashNameURL("/");
    } */
  }, [inView]);

  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledH1>
            <span>JavaScript</span>
            <span>Developer</span>
          </StyledH1>
          <NextLink href={navLinks[1].href} passHref>
            <StyledLink
              id="first-link"
              onClick={() => smoothScrollTo(navLinks[1].scrollName)}
              ref={ref}
            >
              <span>{ProjectsLink}</span>
              <DownArrowIcon />
            </StyledLink>
          </NextLink>
        </StyledContainer>

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
