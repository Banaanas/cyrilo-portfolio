import styled from "@emotion/styled";
import LinkedInCircle from "./LinkedInCircle";
import StyledVerticalLine from "../../../StyledComponents/StyledVerticalLine";
import ExternalLink from "../../../Links/ExternalLink";
import appTheme from "../../../../styles/appTheme";

const StyledSVG = styled.svg`
  width: 112px;
`;

const GitHubStar = () => {
  return (
    <StyledSVG
      width="266"
      height="253"
      viewBox="0 0 266 253"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ExternalLink
        ariaLabel="GitHub Profile Link"
        href="https://github.com/Banaanas"
        title="GitHub Profile"
      >
        <path
          d="M128.245 3.63525C129.741 -0.971305 136.259 -0.971298 137.755 3.63525L165.555 89.1925C166.224 91.2526 168.144 92.6474 170.31 92.6474H260.27C265.114 92.6474 267.128 98.8455 263.209 101.693L190.43 154.57C188.677 155.843 187.944 158.1 188.613 160.16L216.413 245.717C217.909 250.324 212.637 254.154 208.718 251.307L135.939 198.43C134.186 197.157 131.814 197.157 130.061 198.43L57.2817 251.307C53.3631 254.154 48.0907 250.324 49.5875 245.717L77.3867 160.16C78.0561 158.1 77.3228 155.843 75.5704 154.57L2.79101 101.693C-1.12756 98.8455 0.886324 92.6474 5.72994 92.6474H95.6902C97.8563 92.6474 99.7761 91.2526 100.445 89.1925L128.245 3.63525Z"
          fill={appTheme.colors.secondary.default}
        />

        <path
          d="M93 103C93 100.239 95.2386 98 98 98H168.423C171.184 98 173.423 100.239 173.423 103V175.031C173.423 177.793 171.184 180.031 168.423 180.031H98C95.2386 180.031 93 177.793 93 175.031V103Z"
          fill={appTheme.colors.secondary.default}
        />
        <path
          d="M133.211 111.672C118.467 111.672 106.404 123.977 106.404 139.016C106.404 150.979 114.111 161.232 124.834 164.992C126.174 165.334 126.51 164.309 126.51 163.625C126.51 162.941 126.51 161.232 126.51 158.84C119.137 160.549 117.462 155.422 117.462 155.422C116.122 152.346 114.446 151.32 114.446 151.32C112.1 149.611 114.781 149.611 114.781 149.611C117.462 149.953 118.802 152.346 118.802 152.346C121.148 156.789 125.169 155.422 126.51 154.738C126.845 153.029 127.515 151.662 128.185 150.979C122.153 150.295 116.122 147.902 116.122 137.307C116.122 134.23 117.127 131.838 118.802 130.129C118.467 129.445 117.462 126.711 119.137 122.951C119.137 122.951 121.483 122.268 126.51 125.686C128.52 125.002 130.866 124.66 133.211 124.66C135.557 124.66 137.903 125.002 139.913 125.686C144.94 122.268 147.285 122.951 147.285 122.951C148.626 126.711 147.956 129.445 147.62 130.129C149.296 132.18 150.301 134.572 150.301 137.307C150.301 147.902 143.934 149.953 137.903 150.637C138.908 152.004 139.913 153.713 139.913 156.105C139.913 159.865 139.913 162.6 139.913 163.625C139.913 164.309 140.248 165.334 141.924 164.992C152.647 161.232 160.354 150.979 160.354 139.016C160.019 123.977 147.956 111.672 133.211 111.672Z"
          fill={appTheme.colors.githubLinkedInBackground}
        />
      </ExternalLink>
    </StyledSVG>
  );
};

export default GitHubStar;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 240px;
`;

export const GitHubShape = () => {
  return (
    <StyledContainer>
      <GitHubStar />
      <StyledVerticalLine />
    </StyledContainer>
  );
};

export const LinkedInShape = () => {
  return (
    <StyledContainer>
      <LinkedInCircle />
      <StyledVerticalLine />
    </StyledContainer>
  );
};
