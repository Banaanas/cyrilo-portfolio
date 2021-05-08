import { Element as ScrollWrapper } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
import StyledSection from "../../StyledComponents/StyledSection";
import projectsList from "../../../data/projects-list";
import FeaturedProjects from "../../Projects/FeaturedProjects/FeaturedProjects";
import StyledTitle from "../../StyledComponents/StyledTitle";
import OtherProjects from "../../Projects/OtherProjects/OtherProjects";
import FeaturedProjectsDivider from "../../Dividers/FeaturedProjectsDivider";
import OtherProjectsDivider from "../../Dividers/OtherProjectsDivider";

const Projects = () => {
  // 4 Featured FeaturedProjects
  const featuredProjectsNumber = 4;

  const featuredProjects = projectsList
    .slice(Math.max(projectsList.length - featuredProjectsNumber, 1))
    .reverse();

  // Other ProjectsSections
  const otherProjects = projectsList
    .slice(0, Math.max(projectsList.length - featuredProjectsNumber))
    .reverse();

  // i18n - Translation
  const { t } = useTranslation("featuredProjectsSection");
  const sectionTitle = t("title");

  return (
    <>
      <StyledSection id="projects">
        <ScrollWrapper name="projects-scroll" />
        <StyledTitle>{sectionTitle}</StyledTitle>
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
