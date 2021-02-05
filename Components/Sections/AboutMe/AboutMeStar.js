import styled from "@emotion/styled";
import appTheme from "../../../styles/appTheme";

const StyledSVG = styled.svg`
  width: 5rem;
  height: 5rem;
`;

const AboutMeStar = () => {
  return (
    <StyledSVG
      width="540"
      height="128"
      viewBox="0 0 129 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M128.005 92.6C127.605 93.3 103.805 83.3 73.1051 69.7C72.5051 70.4 71.9051 71 71.2051 71.5C81.9051 86.3 89.5051 97.5 88.9051 97.9C88.2051 98.3 79.6051 87.7 68.5051 73C67.6051 73.4 66.7051 73.6 65.7051 73.7C65.5051 104.5 64.8051 128 64.0051 128C63.2051 128 62.5051 104.5 62.4051 73.8C61.4051 73.7 60.5051 73.4 59.6051 73.1C48.5051 87.8 39.8051 98.4 39.1051 98C38.4051 97.6 46.0051 86.3 56.8051 71.6C56.1051 71.1 55.5051 70.4 54.9051 69.8C24.2051 83.3 0.405095 93.3 0.00509459 92.6C-0.394905 91.9 22.8051 80.9 53.5051 67.1C53.3051 66.7 53.2051 66.3 53.2051 65.9C33.6051 65.8 19.1051 65.2 19.1051 64.5C19.1051 63.8 33.5051 63.2 53.0051 63.1C53.1051 62.4 53.2051 61.6 53.5051 61C22.8051 47.2 -0.394905 36.1 0.00509459 35.4C0.405095 34.7 24.2051 44.7 54.9051 58.3C55.3051 57.8 55.8051 57.3 56.3051 56.8C45.8051 42.4 38.5051 31.4 39.1051 31C39.7051 30.6 48.1051 40.9 59.0051 55.1C60.0051 54.6 61.2051 54.3 62.4051 54.1C62.5051 23.5 63.2051 0 64.0051 0C64.8051 0 65.5051 23.5 65.6051 54.2C66.8051 54.3 67.9051 54.7 69.0051 55.2C79.8051 40.9 88.2051 30.6 88.8051 31C89.4051 31.4 82.1051 42.3 71.6051 56.8C72.2051 57.2 72.6051 57.7 73.1051 58.3C103.905 44.7 127.705 34.8 128.005 35.4C128.405 36.1 105.205 47.1 74.6051 60.9C74.8051 61.6 75.0051 62.3 75.1051 63C94.6051 63.2 109.005 63.7 109.005 64.5C109.005 65.2 94.5051 65.8 75.0051 66C74.9051 66.4 74.8051 66.8 74.7051 67.1C105.105 80.9 128.405 91.9 128.005 92.6Z"
        fill={appTheme.colors.secondary.main}
      />
    </StyledSVG>
  );
};

export default AboutMeStar;
