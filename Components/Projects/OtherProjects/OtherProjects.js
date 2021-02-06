import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import OtherProjectsStar from "./OtherProjectsStar";
import OtherProjectsButton from "./OtherProjectsButton";
import StyledTitle from "../../StyledComponents/StyledTitle";
import appTheme from "../../../styles/appTheme";

const StyledProjectsContainer = styled(motion.div)`
  display: grid;
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  align-items: stretch;
  justify-items: center;
  width: 100%;
  max-width: 1320px;
`;

const otherProjectsContainerVariants = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
  },
  transition: {
    type: "spring",
  },
};

const OtherProjects = ({ otherProjects }) => {
  // OTHER PROJECTS - REDUX STATE
  const showOtherProjects = useSelector(
    (state) => state.otherProjects.showOtherProjects,
  );

  // Project Card background color will change in function of the Inde
  const findIndexMultiple = (index) => {
    if (index === 0) return appTheme.colors.primary.darker;
    if (index % 3 === 0) return appTheme.colors.primary.darker;
    if (index % 2 === 0) return appTheme.colors.secondary.dark;
    return appTheme.colors.primary.dark;
  };

  return (
    <>
      <OtherProjectsStar />
      {showOtherProjects ? null : <OtherProjectsButton />}

      {showOtherProjects ? (
        <>
          <StyledTitle>Other Projects</StyledTitle>
          <StyledProjectsContainer>
            {otherProjects.map((project, index) => (
              <React.Fragment key={project.id}>
                <ProjectCard
                  project={project}
                  key={project.id}
                  backgroundColor={findIndexMultiple(index)}
                  otherProject
                />
              </React.Fragment>
            ))}
          </StyledProjectsContainer>
          <OtherProjectsButton />
        </>
      ) : null}
      <OtherProjectsStar secondary />
    </>
  );
};

export default OtherProjects;
