import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import FeaturedProjectsStar from "./FeaturedProjectsStar";

const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  align-items: stretch;
  justify-items: center;
  width: 100%;
  max-width: 850px;

  .project-cards {
    background-color: var(--featured-projects-background);
  }

  .project-names {
    color: var(--featured-projects-name);
  }

  .software-stack {
    border-top: 3px solid var(--featured-projects-software-stack);
    border-bottom: 3px solid var(--featured-projects-software-stack);
  }

  .project-links-icons {
    color: var(--featured-projects-links-color);
    background-color: var(--featured-projects-links-background-color);
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
