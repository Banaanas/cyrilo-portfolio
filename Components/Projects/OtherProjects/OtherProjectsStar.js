import styled from "@emotion/styled";

const StyledSVG = styled.svg`
  align-self: ${({ secondary }) => (secondary ? "flex-end" : "flex-start")};
  width: 80px;

  path {
    fill: ${({ secondary }) =>
      secondary ? "var(--primary-main)" : "var(--secondary-light)"};
  }
`;

const OtherProjectsStar = ({ secondary }) => {
  return (
    <StyledSVG
      width="128"
      height="65"
      viewBox="0 0 128 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      secondary={secondary}
    >
      <path d="M100.6 10.5L77.3 37.7L100.6 65L68.9 44.9L37.2 65L60.5 37.7L37.2 10.5L68.9 30.5L100.6 10.5ZM16.8 10.6L0 0L12.3 14.4L0 28.8L16.8 18.2L33.6 28.8L21.2 14.4L33.5 0L16.8 10.6ZM116.9 47.8L105.8 40.8L114 50.4L105.8 60L116.9 53L128 60L119.8 50.4L128 40.8L116.9 47.8Z" />
    </StyledSVG>
  );
};

export default OtherProjectsStar;
