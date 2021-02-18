import { useEffect } from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { Element as ScrollWrapper } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import StyledSection from "../../StyledComponents/StyledSection";
import StyledTitle from "../../StyledComponents/StyledTitle";
import ShortStory from "./ShortStory";
import LongStory from "./LongStory";
import SkillsList from "./SkillsList";
import AboutMeDivider from "../../Dividers/AboutMeDivider";
import AboutMeImage from "./AboutMeImage";

const StyledAboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
    flex-direction: row;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const AboutMeSection = () => {
  // React Intersection Observer
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  // Update HashName when Element Scrolled
  useEffect(() => {
    /* if (inView) {
      updateHashNameURL("about-me");
    } */
  }, [inView]);

  // i18n - Translation
  const { t } = useTranslation("aboutMeSection");
  const sectionTitle = t("title");

  return (
    <>
      <StyledSection id="about-me">
        <ScrollWrapper name="about-me-scroll" />
        <StyledTitle ref={ref}>{sectionTitle}</StyledTitle>
        <StyledAboutMeContainer>
          <AboutMeImage />
          <StyledTextContainer>
            <ShortStory />
            <LongStory />
            <SkillsList />
          </StyledTextContainer>
        </StyledAboutMeContainer>
      </StyledSection>
      <AboutMeDivider />
    </>
  );
};

export default AboutMeSection;
