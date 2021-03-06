import styled from "@emotion/styled";
import appTheme from "../../../../styles/appTheme";

const StyledSVG = styled.svg`
  width: 80px;

  @keyframes shiningStar {
    from {
      fill: ${appTheme.colors.primary.default};
    }
    to {
      fill: ${appTheme.colors.secondary.default};
    }
  }

  #shining-star {
    animation-name: shiningStar;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

const ContactStar = () => {
  return (
    <StyledSVG
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M127.959 127.972C126.76 128.971 103.472 103.486 75.9858 71.2039C70.7885 65.0075 65.6911 59.0109 60.9935 53.4141C60.6937 57.6117 60.1939 62.0092 59.7941 66.6066C57.0955 93.5912 54.197 115.279 53.1975 115.279C52.198 115.179 53.4973 93.1914 56.196 66.2068C56.5958 62.2091 56.9956 58.2114 57.3953 54.5135C26.2113 79.2993 1.02418 97.9887 0.0246888 96.8893C-0.874851 95.7899 22.913 75.2017 53.9971 50.116C28.9099 47.6174 9.41988 45.1188 9.41988 44.2193C9.51983 43.3199 29.8095 44.4192 55.5963 46.7179C38.7049 26.2296 27.4107 11.538 28.3102 10.8384C29.1098 10.1388 41.5035 23.2313 58.6947 42.7202C60.4938 27.6288 62.0929 17.4346 62.6926 17.4346C63.3923 17.5346 62.8925 28.2285 61.6931 43.8196C93.5768 18.3341 119.663 -1.05485 120.663 0.044525C121.563 1.1439 97.275 22.1319 65.7911 47.6174C90.7783 50.016 109.968 52.5146 109.968 53.4141C109.869 54.3136 90.7783 53.2142 66.0909 51.1154C70.5886 56.3124 75.3862 61.8093 80.2836 67.606C107.77 99.9875 129.059 126.972 127.959 127.972Z"
        fill="#FD0054"
        id="shining-star"
      />
    </StyledSVG>
  );
};

export default ContactStar;
