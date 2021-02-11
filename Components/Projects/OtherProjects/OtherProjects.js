import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import OtherProjectsStar from "./OtherProjectsStar";
import OtherProjectsButton from "./OtherProjectsButton";
import StyledTitle from "../../StyledComponents/StyledTitle";
import setLanguageTranslation from "../../../utils/setLanguageTranslation";

const StyledProjectsContainer = styled(motion.div)`
  display: grid;
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  align-items: stretch;
  justify-items: center;
  width: 100%;
  max-width: 1320px;

  /* Other Projects Card - ODD */
  .project-cards:nth-of-type(odd) {
    background-color: var(--other-projects-background-odd);

    .project-names {
      color: var(--other-projects-name-odd);
    }

    .software-stack {
      border-top: 3px solid var(--other-projects-software-stack-odd);
      border-bottom: 3px solid var(--other-projects-software-stack-odd);
    }

    .project-links-icons {
      color: var(--other-projects-links-color-odd);
      background-color: var(--other-projects-links-background-color-odd);
    }
  }

  /* Other Projects Card - EVEN */
  .project-cards:nth-of-type(even) {
    background-color: var(--other-projects-background-even);

    .project-names {
      color: var(--other-projects-name-even);
    }

    .software-stack {
      border-top: 3px solid var(--other-projects-software-stack-even);
      border-bottom: 3px solid var(--other-projects-software-stack-even);
    }

    .project-links-icons {
      color: var(--other-projects-links-color-even);
      background-color: var(--other-projects-links-background-color-even);
    }
  }
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

  // i18n - Next Router
  const router = useRouter();
  const translation = setLanguageTranslation(router);

  return (
    <>
      <OtherProjectsStar />
      {showOtherProjects ? null : <OtherProjectsButton />}

      {showOtherProjects ? (
        <>
          <StyledTitle>{translation.otherProjectsSection.title}</StyledTitle>
          <StyledProjectsContainer>
            {otherProjects.map((project) => (
              <React.Fragment key={project.id}>
                <ProjectCard project={project} key={project.id} />
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
