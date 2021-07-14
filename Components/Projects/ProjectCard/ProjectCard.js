import NextImage from "next/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import SoftwareStack from "./SoftwareStack";
import ProjectLinks from "./ProjectLinks";
import ExternalLink from "../../Links/ExternalLink";
import appTheme from "../../../styles/appTheme";

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 296px;
  min-height: 360px; /* Minimal Height in order to harmonize between one and multiple lines SoftwareStack */
  margin: 8px;
  padding: 16px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: ${appTheme.elevation.projectCard};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 160px;
  overflow: hidden;
  border-radius: 10px;
  filter: contrast(110%);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProjectName = styled.div`
  padding: 8px 0;
  font-family: ${appTheme.fontFamily.nexaBold},
  ${appTheme.fontFamily.alternativeFonts};
  text-align: left;
  text-transform: uppercase;
`;

const ProjectCard = ({ project, otherProject }) => {
  const { name, softwareStack } = project;

  const projectGestures = {
    scale: 1.05,
    rotateX: -10,
    rotate: -10,
  };

  const projectVariants = {
    hidden: { opacity: 0.8, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <ProjectContainer
      whileHover={projectGestures}
      whileTap={projectGestures}
      className="project-cards"
      variants={projectVariants}
    >
      <ExternalLink
        ariaLabel="Live Website"
        href={project.url}
        title={project.name}
      >
        <ImageWrapper>
          <NextImage
            src={project.imageSource}
            layout="fill"
            objectFit="fill"
            quality={100}
            alt={`${project.name} Screenshot`}
            loading="eager" /* !== Lazy load */
          />
        </ImageWrapper>
      </ExternalLink>
      <SoftwareStack softwareStack={softwareStack} />
      <Container>
        <ExternalLink
          ariaLabel="Live Website"
          href={project.url}
          title={project.name}
        >
          <ProjectName className="project-names" otherProject={otherProject}>
            {name}
          </ProjectName>
        </ExternalLink>
        <ProjectLinks project={project} />
      </Container>
    </ProjectContainer>
  );
};

export default ProjectCard;
