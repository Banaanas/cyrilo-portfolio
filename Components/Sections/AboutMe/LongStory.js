import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { BiHide as HideIcon, BiShow as ShowIcon } from "react-icons/bi";
import StyledTextContainer from "./StyledTextContainer";
import LongStoryParagraph from "./LongStoryParagraph";

const StyledLongStory = styled(StyledTextContainer)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 999999px; /* Cf. -> Note 5 - To prevent Android Chrome from boosting font-size */
  margin: 1rem 0;
  overflow: hidden;
  color: var(--secondary-dark);
  background-color: var(--secondary-lightest1);

  p {
    color: var(--secondary-main);
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  color: var(--action-button-color);
  font-family: "Nexa Bold", sans-serif;
  text-transform: uppercase;
  background-color: var(--action-button-background);
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
    color: var(--action-button-icon-color);
  }
`;

const StyledContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Framer Motion - Height Animation */

  strong {
    color: var(--short-story-strong);
    font-family: "Nexa Bold";
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
        <StyledButton onClick={handleReadButtonClick}>
          <span>{buttonShow}</span>
          <ShowIcon />
        </StyledButton>
      )}

      <AnimatePresence>
        {showLongStory ? (
          <StyledContainer
            initial="initial"
            animate="animate"
            exit="initial"
            variants={longStoryVariants}
          >
            <LongStoryParagraph />
            <StyledButton onClick={handleReadButtonClick}>
              <span>{buttonHide}</span>
              <HideIcon />
            </StyledButton>
          </StyledContainer>
        ) : null}
      </AnimatePresence>
    </StyledLongStory>
  );
};

export default LongStory;
