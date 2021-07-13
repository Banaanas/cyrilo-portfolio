import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import TextContainer from "./TextContainer";
import ShortStoryParagraph from "./ShortStoryParagraph";

export const StyledShortStory = styled(TextContainer)`
  max-height: 999999px; /* Cf. -> Note 5 - To prevent Android Chrome from boosting font-size */
  color: var(--secondary-dark);
  background-color: var(--secondary-lightest1);

  p {
    color: var(--secondary-main);
  }

  strong {
    color: var(--short-story-strong);
    border-radius: 4px;
    font-family: "Nexa Bold";
  }
`;

const ShortStory = () => {
  // i18n - Translation
  const { t } = useTranslation("aboutMeSection");
  const title = t(`shortStory.title`);

  return (
    <StyledShortStory>
      <h3>{title}</h3>
      <ShortStoryParagraph />
    </StyledShortStory>
  );
};

export default ShortStory;
