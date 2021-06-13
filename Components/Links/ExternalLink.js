import styled from "@emotion/styled";

const Link = styled.a`
  text-decoration: none;
`;

const ExternalLink = ({ children, ariaLabel, href, title }) => {
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

export default ExternalLink;
