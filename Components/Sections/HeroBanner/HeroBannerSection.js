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
import GenericStyledH2 from "../../StyledComponents/StyledH2";
import PlanetCyril from "./PlanetCyril";
import StyledLink from "../../StyledComponents/StyledLink";

const StyledSection = styled(GenericStyledSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  min-height: calc(100vh - 16rem);
  padding-right: 0;
  padding-left: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection}) {
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
  }

  #first-link {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection}) {
      display: flex;
    }
  }

  #second-link {
    display: flex;

    @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection}) {
      display: none;
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: min-content;

  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection}) {
    height: 500px;
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;

  span {
    --letter-spacing: 0.125rem;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-right: calc(
      -1 * var(--letter-spacing)
    ); /* To counterbalance the last letter's spacing */
    margin: 0;
    padding: 1rem 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xl2};
    font-family: "Nexa Black", sans-serif;
    letter-spacing: var(--letter-spacing);
    text-transform: uppercase;
  }

  span:nth-of-type(1) {
    color: var(--default-white);
    background-color: var(--secondary-main);
    border: 4px solid var(--secondary-main);
    border-bottom: none;
  }

  span:nth-of-type(2) {
    color: var(--secondary-main);
    background-color: var(--default-white);
    border: 4px solid var(--secondary-main);
    border-top: none;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
    }*/
  }, [inView]);

  return (
    <>
      <ScrollWrapper name="hero-banner-scroll" />
      <StyledSection>
        <StyledContainer>
          <StyledWrapper>
            <StyledH1>
              <span>JavaScript</span>
              <span>Developer</span>
            </StyledH1>
          </StyledWrapper>
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
