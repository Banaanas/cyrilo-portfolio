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
`;

const StarWrapper = styled(motion.div)`
  display: none;
  grid-row: 2/3;
  grid-column: 1/3;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 10s ease-in-out;

  @media (min-width: 628px) {
    display: block;
    opacity: 1;
  }
`;

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <StyledProjectsContainer>
      {featuredProjects.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          backgroundColor="var(--secondary-darker)"
          otherProject={
            false
          } /* FeaturedProjectCard has different Project Name's color than OtherProjectCard  */
        />
      ))}
      <StarWrapper
        animate={{ rotate: 360, scale: [1, 1.5, 2, 2.5, 2, 1.5, 1] }}
        transition={{
          duration: 5,
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
