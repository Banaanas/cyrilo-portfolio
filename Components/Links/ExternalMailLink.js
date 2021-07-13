// Contrary to ExternalLink Component, ExternalMailLink does
// NOT open a new Tab when clicked on (target="_blank")

import styled from "@emotion/styled";

const Link = styled.a`
  text-decoration: none;
`;

const ExternalMailLink = ({ children, ariaLabel, href, title }) => {
  return (
    <Link
      aria-label={ariaLabel}
      href={href}
      rel="noopener noreferrer"
      title={title}
    >
      {children}
    </Link>
  );
};

export default ExternalMailLink;
