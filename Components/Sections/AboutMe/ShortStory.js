import { useRouter } from "next/router";
import styled from "@emotion/styled";
import StyledTextContainer from "./StyledTextContainer";
import setLanguageTranslation from "../../../utils/setLanguageTranslation";
import ShortStoryParagraph from "./ShortStoryParagraph";

export const StyledShortStory = styled(StyledTextContainer)`
  max-height: 999999px; /* Cf. -> Note 5 - To prevent Android Chrome from boosting font-size */
  color: var(--secondary-dark);
  background-color: var(--secondary-lightest1);

  p {
    color: var(--secondary-main);
  }

  #Cyril-name {
    color: var(--short-story-name);
    border-radius: 4px;
  }
`;

const ShortStory = () => {
  // i18n - Next Router
  const router = useRouter();
  const translation = setLanguageTranslation(router);

  return (
    <StyledShortStory>
      <h3>{translation.aboutMeSection.shortStory.title}</h3>
      <ShortStoryParagraph />
    </StyledShortStory>
  );
};

export default ShortStory;
