import styled from "@emotion/styled";
import { VscGithubInverted as GitHubIcon } from "react-icons/vsc";
import { ImLinkedin as LinkedInIcon } from "react-icons/im";
import ExternalLink from "../../Links/ExternalLink";
import appTheme from "../../../styles/appTheme";

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;

  a {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 0 8px;
    text-decoration: none;
  }

  span {
    align-self: baseline;
    margin-left: 8px;
    vertical-align: middle;
  }

  svg {
    align-self: baseline;
    color: ${appTheme.colors.primary.dark};
    font-size: ${appTheme.fontSizes.xl};
    transform: scale(1);
    opacity: 0.9;
    transition: transform, opacity, 200ms ease;
  }

  svg:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const ContactLinks = () => (
  <SocialIconsContainer>
    <ExternalLink
      ariaLabel="LinkedIn Profile"
      href="https://www.linkedin.com/in/cyril-dev/"
      title="LinkedIn Profile"
    >
      <LinkedInIcon />
      <span>LinkedIn</span>
    </ExternalLink>
    <ExternalLink
      ariaLabel="GitHub Profile Link"
      href="https://github.com/Banaanas"
      title="GitHub Profile"
    >
      <GitHubIcon />
      <span>Github</span>
    </ExternalLink>
  </SocialIconsContainer>
);

export default ContactLinks;
