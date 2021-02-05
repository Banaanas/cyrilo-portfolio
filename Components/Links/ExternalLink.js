import styled from "@emotion/styled";

const StyledLink = styled.a`
  text-decoration: none;
`;

const ExternalLink = ({ children, ariaLabel, href, title }) => {
  return (
    <StyledLink
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {children}
    </StyledLink>
  );
};

export default ExternalLink;
