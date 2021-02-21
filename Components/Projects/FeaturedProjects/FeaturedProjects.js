import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import FeaturedProjectsStar from "./FeaturedProjectsStar";

const StyledProjectsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
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
  opacity: 0;
  transition: opacity 10s ease-in-out;

  @media (min-width: 628px) {
    display: flex;
    opacity: 1;
  }
`;

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <StyledProjectsContainer>
      {featuredProjects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
      <StarWrapper
        animate={{
          rotate: [0, 360],
          scale: [0.1, 0.2, 1.5, 2, 2.5, 2, 1.5, 0.2, 0.1],
          x: [0, 10, 20, 10, 0, -10, -20, -10, 0],
          y: [0, 10, 20, 10, 0, -10, -20, -10, 0],
        }}
        transition={{
          duration: 15,
          type: "tween",
          stiffness: 260,
          damping: 20,
          repeat: Infinity,
        }}
      >
        <FeaturedProjectsStar />
      </StarWrapper>
    </StyledProjectsContainer>
  );
};

export default FeaturedProjects;
