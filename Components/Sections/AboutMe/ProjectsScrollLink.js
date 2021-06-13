import NextLink from "next/link";
import styled from "@emotion/styled";
import { linkHoverEffect } from "./LongStoryExternalLink";
import smoothScrollTo from "../../../utils/smoothScrollTo";
import navLinks from "../../../data/navLinks";

const Link = styled.a`
  text-decoration: none;
  ${linkHoverEffect}
`;

const ProjectsScrollLink = ({ children }) => {
  return (
    <NextLink href={navLinks[1].href} passHref>
      <Link onClick={() => smoothScrollTo(navLinks[1].scrollName)}>
        {children}
      </Link>
    </NextLink>
  );
};

export default ProjectsScrollLink;
