import styled from "@emotion/styled";
import { css } from "@emotion/react";
import appTheme from "../../../styles/appTheme";

export const linkHoverEffect = css`
  background-image: linear-gradient(
    transparent calc(50% - 9px),
    ${appTheme.colors.primary.default} calc(50% - 9px) calc(50% - 9px)
  );
  background-size: 100% 200%;
  border-radius: 3px;
  transition: background-position 120ms ease-in-out 0s;

  /* Hover Background Links Effect */
  :hover {
    background-image: linear-gradient(
      transparent calc(50% - 9px),
      ${appTheme.colors.primary.default} calc(50% - 9px) calc(50% - 9px)
    );
    background-position: 0 100%;
  }
`;

const Link = styled.a`
  text-decoration: none;
  ${linkHoverEffect}
`;

const LongStoryExternalLink = ({ children, ariaLabel, href, title }) => {
  return (
    <Link
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {children}
    </Link>
  );
};

export default LongStoryExternalLink;
