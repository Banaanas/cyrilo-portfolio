import styled from "@emotion/styled";
import { VscGithubInverted as GitHubIcon } from "react-icons/vsc";
import { ImLinkedin as LinkedInIcon } from "react-icons/im";
import ExternalLink from "../../Links/ExternalLink";

const StyledSocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;

  a {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 0 0.5rem;
    text-decoration: none;
  }

  span {
    align-self: baseline;
    margin-left: 0.5rem;
    vertical-align: middle;
  }

  svg {
    align-self: baseline;
    color: var(--primary-dark);
    font-size: ${({ theme }) => theme.fontSizes.xl};
    /* background-color: var(--secondary-main); */
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
  <StyledSocialIconsContainer>
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
  </StyledSocialIconsContainer>
);

export default ContactLinks;
