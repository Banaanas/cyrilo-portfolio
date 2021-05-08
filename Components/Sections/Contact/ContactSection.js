import styled from "@emotion/styled";
import { Element as ScrollWrapper } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
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
  // i18n - Translation
  const { t } = useTranslation("contactSection");
  const title = t(`title`);

  return (
    <StyledSection id="contact">
      <ScrollWrapper name="contact-scroll" />
      <StyledTitleContainer>
        <ContactStar />
        <StyledTitle>{title}</StyledTitle>
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
