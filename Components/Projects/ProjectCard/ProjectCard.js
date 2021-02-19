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
  box-shadow: var(--projects-shadow);
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
  font-family: "Nexa Bold", sans-serif;
  text-align: center;
  text-transform: uppercase;
  word-break: break-all;
`;

const ProjectCard = ({ project, otherProject }) => {
  const { name, softwareStack } = project;

  const featuredProjectAnimate = {
    scale: 1.05,
    rotateX: -10,
    rotate: -10,
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <StyledProjectContainer
      whileHover={featuredProjectAnimate}
      whileTap={featuredProjectAnimate}
      className="project-cards"
      variants={item}
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
            loading="eager" /* !== Lazy load */
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
