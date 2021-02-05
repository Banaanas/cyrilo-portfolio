// Contrary to ExternalLink Component, ExternalMailLink does
// NOT open a new Tab when clicked on (target="_blank")

import styled from "@emotion/styled";

const StyledLink = styled.a`
  text-decoration: none;
`;

const ExternalMailLink = ({ children, ariaLabel, href, title }) => {
  return (
    <StyledLink
      aria-label={ariaLabel}
      href={href}
      rel="noopener noreferrer"
      title={title}
    >
      {children}
    </StyledLink>
  );
};

export default ExternalMailLink;
