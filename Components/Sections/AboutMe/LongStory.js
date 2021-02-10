import { useState } from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { BiShow as ShowIcon, BiHide as HideIcon } from "react-icons/bi";
import navLinks from "../../../data/navLinks";
import smoothScrollTo from "../../../utils/smoothScrollTo";
import StyledTextContainer from "./StyledTextContainer";
import ExternalLink from "../../Links/ExternalLink";

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

  a {
    text-decoration: none;
    background-image: linear-gradient(
      transparent calc(50% - 9px),
      var(--primary-main) calc(50% - 9px) calc(50% - 9px)
    );
    background-size: 100% 200%;
    border-radius: 3px;
    transition: background-position 120ms ease-in-out 0s;
  }

  a:hover {
    background-image: linear-gradient(
      transparent calc(50% - 9px),
      var(--primary-main) calc(50% - 9px) calc(50% - 9px)
    );
    background-position: 0 100%;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  color: var(--secondary-lightest1);
  font-family: "Nexa Bold", sans-serif;
  text-transform: uppercase;
  background-color: var(--secondary-main);
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
  }
`;

const ProjectsLink = () => {
  return (
    <NextLink href={navLinks[1].href} passHref>
      <a onClick={() => smoothScrollTo(navLinks[1].scrollName)}>Projects</a>
    </NextLink>
  );
};

const longStoryVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    height: "auto",
  },
  transition: {
    type: "spring",
  },
};

const paragraphVariants = {
  initial: {
    opacity: 0,
    pointerEvents: "none",
  },
  animate: {
    opacity: 1,
    pointerEvents: "auto",
  },
  transition: {
    type: "spring",
  },
};

const StyledContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LongStory = () => {
  const [showLongStory, toggleShowLongStory] = useState(false);

  const handleReadButtonClick = () => {
    toggleShowLongStory(!showLongStory);
  };

  return (
    <StyledLongStory showLongStory={showLongStory}>
      <h3>Long Story</h3>
      {showLongStory ? null : (
        <StyledButton onClick={handleReadButtonClick}>
          <span>Read</span>
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
            <motion.p
              initial="initial"
              animate="animate"
              exit="initial"
              variants={paragraphVariants}
            >
              Since march 2020, I've been learning Web Development to become a
              <strong> FullStack Developer</strong>, specialized in
              <strong> Front-End Development</strong> .
              <br />
              In order to achieve this purpose, I have completed both{" "}
              <ExternalLink
                ariaLabel="The Odin Project Website"
                href="https://www.theodinproject.com/"
                title="The Odin Project"
              >
                The Odin Project
              </ExternalLink>{" "}
              and the{" "}
              <ExternalLink
                ariaLabel="Full Stack Open"
                href="https://fullstackopen.com/"
                title="Full Stack Open"
              >
                Full Stack Open
              </ExternalLink>{" "}
              curriculums. Throughout those courses, I've been learning
              programming concepts and practical skills, realizing numerous
              concrete <ProjectsLink />. Since then, I have deeply enjoyed
              continuously learning and resolving problems.
            </motion.p>
            <StyledButton onClick={handleReadButtonClick}>
              <span>Hide</span>
              <HideIcon />
            </StyledButton>
          </StyledContainer>
        ) : null}
      </AnimatePresence>
    </StyledLongStory>
  );
};

export default LongStory;
