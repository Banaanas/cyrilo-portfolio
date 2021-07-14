import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import TextContainer from "./TextContainer";
import ShortStoryParagraph from "./ShortStoryParagraph";
import appTheme from "../../../styles/appTheme";

export const StyledShortStory = styled(TextContainer)`
  max-height: 999999px; /* Cf. -> Note 5 - To prevent Android Chrome from boosting font-size */
  color: ${appTheme.colors.secondary.dark};
  background-color: ${appTheme.colors.secondary.lightest1};

  p {
    color: ${appTheme.colors.secondary.default};
  }

  strong {
    color: ${appTheme.colors.shortStoryStrong};
    border-radius: 4px;
    font-family: ${appTheme.fontFamily.nexaBold},
    ${appTheme.fontFamily.alternativeFonts};
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
