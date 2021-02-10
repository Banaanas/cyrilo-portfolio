import styled from "@emotion/styled";
import StyledTextContainer from "./StyledTextContainer";

export const StyledShortStory = styled(StyledTextContainer)`
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
  return (
    <StyledShortStory>
      <h3>Short Story</h3>
      <p>
        I'm <strong id="Cyril-name">Cyril</strong>, a brand new{" "}
        <strong>JavaScript Developer</strong> based in Lyon, France. After two
        Master in International Law (2006-2007) and years as teacher and
        International Law consultant, I've decided to give my career a shining
        new direction 🌞.
      </p>
    </StyledShortStory>
  );
};

export default ShortStory;
