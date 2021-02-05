import {
  VscGithubInverted as GitHubIcon,
  VscLinkExternal as ExternalLinkIcon,
} from "react-icons/vsc";
import styled from "@emotion/styled";
import appTheme from "../../../styles/appTheme";
import ExternalLink from "../../Links/ExternalLink";

const handleBackgroundColor = (backgroundColor) => {
  switch (backgroundColor) {
    case "third":
      return appTheme.colors.primary.darker;
    case "second":
      return appTheme.colors.primary.light;
    case "first":
      return appTheme.colors.primary.dark;
    default:
      return appTheme.colors.secondary.darker;
  }
};

const StyledSocialIconsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  svg {
    margin: 0.2rem;
    color: ${({ theme }) => theme.colors.default.white};
    font-size: ${({ theme }) => theme.fontSizes.xl2};
    background-color: ${({ backgroundColor }) => backgroundColor};
    transform: scale(1);
    opacity: 0.9;
    transition: transform, opacity, 200ms ease;
  }

  svg:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const ProjectLinks = ({ project, backgroundColor }) => {
  const { url, gitHubURL } = project;

  return (
    <StyledSocialIconsContainer backgroundColor={backgroundColor}>
      <ExternalLink
        ariaLabel="GitHub Repository Link"
        href={gitHubURL}
        title="GitHub Repository"
      >
        <GitHubIcon />
      </ExternalLink>
      <ExternalLink ariaLabel="Live Website" href={url} title={url}>
        <ExternalLinkIcon />
      </ExternalLink>
    </StyledSocialIconsContainer>
  );
};

export default ProjectLinks;
