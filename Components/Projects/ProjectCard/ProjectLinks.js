import { VscGithubInverted as GitHubIcon, VscLinkExternal as LinkedInIcon } from "react-icons/vsc";
import styled from "@emotion/styled";
import ExternalLink from "../../Links/ExternalLink";

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  svg {
    margin: 4px;
    font-size: ${({ theme }) => theme.fontSizes.xl2};
    transform: scale(1);
    opacity: 0.9;
    transition: transform, opacity, 200ms ease;
  }

  svg:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const ProjectLinks = ({ project }) => {
  const { url, gitHubURL } = project;

  return (
    <SocialIconsContainer>
      <ExternalLink
        ariaLabel="GitHub Repository Link"
        href={gitHubURL}
        title="GitHub Repository"
      >
        <GitHubIcon className="project-links-icons" />
      </ExternalLink>
      <ExternalLink ariaLabel="Live Website" href={url} title={url}>
        <LinkedInIcon className="project-links-icons" />
      </ExternalLink>
    </SocialIconsContainer>
  );
};

export default ProjectLinks;
