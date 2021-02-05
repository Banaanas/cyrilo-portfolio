import { useEffect } from "react";
import { Element as ScrollWrapper } from "react-scroll";
import { useInView } from "react-intersection-observer";
import StyledSection from "../../StyledComponents/StyledSection";
import updateHashNameURL from "../../../utils/updateHashNameURL";
import projectsList from "../../../data/projects-list";
import FeaturedProjects from "../../Projects/FeaturedProjects/FeaturedProjects";
import StyledTitle from "../../StyledComponents/StyledTitle";
import OtherProjects from "../../Projects/OtherProjects/OtherProjects";
import FeaturedProjectsDivider from "../../Dividers/FeaturedProjectsDivider";
import OtherProjectsDivider from "../../Dividers/OtherProjectsDivider";

const Projects = () => {
  // React Intersection Observer
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  // Update HashName when Element Scrolled
  useEffect(() => {
    /* if (inView) {
      updateHashNameURL("projects");
    }*/
  }, [inView]);

  // 4 Featured FeaturedProjects
  const featuredProjectsNumber = 4;

  const featuredProjects = projectsList
    .slice(Math.max(projectsList.length - featuredProjectsNumber, 1))
    .reverse();

  // Other ProjectsSections
  const otherProjects = projectsList
    .slice(0, Math.max(projectsList.length - featuredProjectsNumber))
    .reverse();

  return (
    <>
      <StyledSection id="projects">
        <ScrollWrapper name="projects-scroll" />
        <StyledTitle ref={ref}>Featured Projects</StyledTitle>
        <FeaturedProjects featuredProjects={featuredProjects} />
      </StyledSection>
      <FeaturedProjectsDivider />
      <StyledSection>
        <OtherProjects otherProjects={otherProjects} />
      </StyledSection>
      <OtherProjectsDivider />
    </>
  );
};

export default Projects;
