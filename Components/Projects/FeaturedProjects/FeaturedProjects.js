import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import FeaturedProjectsStar from "./FeaturedProjectsStar";
import appTheme from "../../../styles/appTheme";

const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  align-items: stretch;
  justify-items: center;
  width: 100%;
  max-width: 850px;

  .project-cards {
    background-color: ${appTheme.colors.featuredProjectsBackground};
  }

  .project-names {
    color: ${appTheme.colors.featuredProjectsName};
  }

  .software-stack {
    border-top: 3px solid ${appTheme.colors.featuredProjectsSoftwareStack};
    border-bottom: 3px solid ${appTheme.colors.featuredProjectsSoftwareStack};
  }

  .project-links-icons {
    color: ${appTheme.colors.featuredProjectsLinksColor};
    background-color: ${appTheme.colors.featuredProjectsLinksBackground};
  }
`;

const StarWrapper = styled(motion.div)`
  display: none;
  grid-row: 2/3;
  grid-column: 1/3;

  @media (min-width: 628px) {
    display: flex;
    opacity: 1;
  }
`;

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <ProjectsContainer>
      {featuredProjects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
      <StarWrapper>
        <FeaturedProjectsStar />
      </StarWrapper>
    </ProjectsContainer>
  );
};

export default FeaturedProjects;
