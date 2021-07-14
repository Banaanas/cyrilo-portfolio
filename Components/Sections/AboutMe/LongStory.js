import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { BiHide as HideIcon, BiShow as ShowIcon } from "react-icons/bi";
import TextContainer from "./TextContainer";
import LongStoryParagraph from "./LongStoryParagraph";
import appTheme from "../../../styles/appTheme";

const StyledLongStory = styled(TextContainer)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 999999px; /* Cf. -> Note 5 - To prevent Android Chrome from boosting font-size */
  margin: 16px 0;
  overflow: hidden;
  color: ${appTheme.colors.secondary.dark};
  background-color: ${appTheme.colors.secondary.lightest1};

  p {
    color: ${appTheme.colors.secondary.default};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 8px 16px;
  color: ${appTheme.colors.actionButtonColor};
  font-family: ${appTheme.fontFamily.nexaBold},
  ${appTheme.fontFamily.alternativeFonts};
  text-transform: uppercase;
  background-color: ${appTheme.colors.actionButtonBackground};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  span {
    line-height: 100%; /* To Align Span and Icon */
    text-align: center;
  }

  svg {
    position: relative; /* To Align Span and Icon (even more) */
    bottom: 1px;
    height: 100%;
    margin-left: 6px;
    color: ${appTheme.colors.actionButtonIconColor};
  }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Framer Motion - Height Animation */

  strong {
    color: ${appTheme.colors.shortStoryStrong};
    font-family: ${appTheme.fontFamily.nexaBold},
    ${appTheme.fontFamily.alternativeFonts};
    border-radius: 4px;
  }
`;

const longStoryVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    height: "auto",
  },
};

const LongStory = () => {
  const [showLongStory, toggleShowLongStory] = useState(false);

  const handleReadButtonClick = () => {
    toggleShowLongStory(!showLongStory);
  };

  // i18n - Translation
  const { t } = useTranslation("aboutMeSection");
  const title = t(`longStory.title`);
  const buttonShow = t(`longStory.buttonRead`);
  const buttonHide = t(`longStory.buttonHide`);

  return (
    <StyledLongStory showLongStory={showLongStory}>
      <h3>{title}</h3>
      {showLongStory ? null : (
        <Button onClick={handleReadButtonClick}>
          <span>{buttonShow}</span>
          <ShowIcon />
        </Button>
      )}

      <AnimatePresence>
        {showLongStory ? (
          <Container
            initial="initial"
            animate="animate"
            exit="initial"
            variants={longStoryVariants}
          >
            <LongStoryParagraph />
            <Button onClick={handleReadButtonClick}>
              <span>{buttonHide}</span>
              <HideIcon />
            </Button>
          </Container>
        ) : null}
      </AnimatePresence>
    </StyledLongStory>
  );
};

export default LongStory;
