import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { Element as ScrollWrapper } from "react-scroll";
import StyledTitle from "../../StyledComponents/StyledTitle";
import GenericStyledSection from "../../StyledComponents/StyledSection";
import ContactStar from "./ContactShapes/ContactStar";
import SmallDeviceQuestions from "./SmallDeviceQuestions";
import CyriloMail from "./CyriloMail";
import NormalDeviceQuestions from "./NormalDeviceQuestions";
import { GitHubShape, LinkedInShape } from "./ContactShapes/GitHubStar";

const StyledSection = styled(GenericStyledSection)`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledSocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ContactSection = () => {
  // React Intersection Observer
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  // Update HashName when Element Scrolled
  useEffect(() => {
    /*  if (inView) {
      updateHashNameURL("contact");
    }*/
  }, [inView]);

  return (
    <StyledSection id="contact">
      <ScrollWrapper name="contact-scroll" />
      <StyledTitleContainer ref={ref}>
        <ContactStar />
        <StyledTitle>Contact</StyledTitle>
      </StyledTitleContainer>
      <SmallDeviceQuestions />
      <NormalDeviceQuestions />
      <CyriloMail />
      <StyledSocialMediaContainer>
        <GitHubShape />
        <LinkedInShape />
      </StyledSocialMediaContainer>
    </StyledSection>
  );
};

export default ContactSection;
