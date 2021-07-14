import styled from "@emotion/styled";
import { Element as ScrollWrapper } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import StyledSection from "../../StyledComponents/StyledSection";
import StyledTitle from "../../StyledComponents/StyledTitle";
import ShortStory from "./ShortStory";
import LongStory from "./LongStory";
import AboutMeDivider from "../../Dividers/AboutMeDivider";
import AboutMeImage from "./AboutMeImage";
import SkillsList from "./SkillsList";

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
  // i18n - Translation
  const { t } = useTranslation("aboutMeSection");
  const sectionTitle = t("title");

  return (
    <>
      <StyledSection id="about-me">
        <ScrollWrapper name="about-me-scroll" />
        <StyledTitle>{sectionTitle}</StyledTitle>
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
