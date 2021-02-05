import { VscGithubInverted as GitHubIcon } from "react-icons/vsc";
import { IoMdMail as MailIcon } from "react-icons/io";
import { ImLinkedin as LinkedInIcon } from "react-icons/im";
import ExternalLink from "../Links/ExternalLink";
import ExternalMailLink from "../Links/ExternalMailLink";

const ContactIcons = () => (
  <>
    <ExternalLink
      ariaLabel="GitHub Profile Link"
      href="https://github.com/Banaanas"
      title="GitHub Profile"
    >
      <GitHubIcon />
    </ExternalLink>
    <ExternalMailLink
      ariaLabel="Cyrilo Dev Mail"
      href="mailto:cyrilo.dev@gmail.com"
      title="cyrilo.dev@gmail.com"
    >
      <MailIcon />
    </ExternalMailLink>
    <ExternalLink
      ariaLabel="LinkedIn Profile"
      href="https://www.linkedin.com/in/cyril-dev/"
      title="LinkedIn Profile"
    >
      <LinkedInIcon />
    </ExternalLink>
  </>
);

export default ContactIcons;
