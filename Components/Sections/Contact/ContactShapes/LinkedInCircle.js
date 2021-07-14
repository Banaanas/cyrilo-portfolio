import styled from "@emotion/styled";
import ExternalLink from "../../../Links/ExternalLink";
import appTheme from "../../../../styles/appTheme";

const StyledSVG = styled.svg`
  width: 112px;
`;

const LinkedInCircle = () => {
  return (
    <StyledSVG
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ExternalLink
        ariaLabel="LinkedIn Profile"
        href="https://www.linkedin.com/in/cyril-dev/"
        title="LinkedIn Profile"
      >
        <circle
          cx="128"
          cy="128"
          r="128"
          fill={appTheme.colors.primary.default}
        />
        <path
          d="M93 105.7C93 98.686 98.686 93 105.7 93H150.3C157.314 93 163 98.686 163 105.7V150.3C163 157.314 157.314 163 150.3 163H105.7C98.686 163 93 157.314 93 150.3V105.7Z"
          fill={appTheme.colors.secondary.default}
        />
        <path
          d="M149.292 104.667H106.708C105.542 104.667 104.667 105.542 104.667 106.709V149.584C104.667 150.459 105.542 151.334 106.708 151.334H149.583C150.75 151.334 151.625 150.459 151.625 149.292V106.709C151.333 105.542 150.458 104.667 149.292 104.667ZM118.375 144.334H111.667V122.167H118.667V144.334H118.375ZM115.167 119.25C112.833 119.25 111.083 117.209 111.083 115.167C111.083 112.834 112.833 111.084 115.167 111.084C117.5 111.084 119.25 112.834 119.25 115.167C118.958 117.209 117.208 119.25 115.167 119.25ZM144.333 144.334H137.333V133.542C137.333 130.917 137.333 127.709 133.833 127.709C130.333 127.709 129.75 130.625 129.75 133.542V144.625H122.75V122.167H129.458V125.084C130.333 123.334 132.667 121.584 135.875 121.584C142.875 121.584 144.042 126.25 144.042 132.084V144.334H144.333Z"
          fill={appTheme.colors.githubLinkedInBackground}
        />
      </ExternalLink>
    </StyledSVG>
  );
};

export default LinkedInCircle;
