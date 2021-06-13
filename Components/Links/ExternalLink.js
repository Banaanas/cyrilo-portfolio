import LongStoryLink from "./LongStoryLink";

const ExternalLink = ({ children, ariaLabel, href, title }) => {
  return (
    <LongStoryLink
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {children}
    </LongStoryLink>
  );
};

export default ExternalLink;
