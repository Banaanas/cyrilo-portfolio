import styled from "@emotion/styled";

const LongStoryLink = styled.a`
  text-decoration: none;
  background-image: linear-gradient(
    transparent calc(50% - 9px),
    var(--primary-main) calc(50% - 9px) calc(50% - 9px)
  );
  background-size: 100% 200%;
  border-radius: 3px;
  transition: background-position 120ms ease-in-out 0s;

  /* Hover Background Links Effect */
  :hover {
    background-image: linear-gradient(
      transparent calc(50% - 9px),
      var(--primary-main) calc(50% - 9px) calc(50% - 9px)
    );
    background-position: 0 100%;
  }
`;

export default LongStoryLink;
