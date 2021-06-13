import NextLink from "next/link";
import navLinks from "../../data/navLinks";
import smoothScrollTo from "../../utils/smoothScrollTo";
import LongStoryLink from "./LongStoryLink";

const ProjectsScrollLink = ({ children }) => {
  return (
    <NextLink href={navLinks[1].href} passHref>
      <LongStoryLink onClick={() => smoothScrollTo(navLinks[1].scrollName)}>
        {children}
      </LongStoryLink>
    </NextLink>
  );
};

export default ProjectsScrollLink;
