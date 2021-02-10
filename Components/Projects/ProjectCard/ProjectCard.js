import Image from "next/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import SoftwareStack from "./SoftwareStack";
import ProjectLinks from "./ProjectLinks";
import ExternalLink from "../../Links/ExternalLink";

const StyledProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 18.5rem;
  min-height: 22.5rem; /* Minimal Height in order to harmonize between one and multiple lines SoftwareStack */
  margin: 0.5rem;
  padding: 1rem;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: var(--featured-projects-shadow);
`;

const StyledImage = styled.div`
  position: relative;
  width: 15rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 10px;
  filter: contrast(110%);
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledProjectName = styled.div`
  /* If it's Other Project's Card, then color is white */
  font-family: "Nexa Bold", sans-serif;
  text-align: center;
  text-transform: uppercase;
  /*
  text-shadow: 0 0 3px var(--secondary-darker); !* To make Project's Name more readable *!
  */
  word-break: break-all;
`;

const ProjectCard = ({ project, otherProject }) => {
  const { name, softwareStack } = project;

  const featuredProjectAnimate = {
    scale: 1.05,
    rotateX: -10,
    rotate: -10,
  };

  return (
    <StyledProjectContainer
      whileHover={featuredProjectAnimate}
      whileTap={featuredProjectAnimate}
      className="project-cards"
    >
      <ExternalLink
        ariaLabel="Live Website"
        href={project.url}
        title={project.name}
      >
        <StyledImage>
          <Image
            src={project.imageSource}
            layout="fill"
            objectFit="fill"
            quality={100}
            alt={`${project.name} Screenshot`}
          />
        </StyledImage>
      </ExternalLink>
      <SoftwareStack softwareStack={softwareStack} />
      <StyledContainer>
        <ExternalLink
          ariaLabel="Live Website"
          href={project.url}
          title={project.name}
        >
          <StyledProjectName
            className="project-names"
            otherProject={otherProject}
          >
            {name}
          </StyledProjectName>
        </ExternalLink>
        <ProjectLinks project={project} />
      </StyledContainer>
    </StyledProjectContainer>
  );
};

export default ProjectCard;
