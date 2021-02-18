import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import OtherProjectsStar from "./OtherProjectsStar";
import OtherProjectsButton from "./OtherProjectsButton";
import StyledTitle from "../../StyledComponents/StyledTitle";

const StyledProjectsContainer = styled(motion.div)`
  display: grid;
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  align-items: stretch;
  justify-items: center;
  width: 100%;
  max-width: 1320px;
  overflow: hidden;

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
    opacity: 1,
    height: 0,
    transition: {
      duration: 1,
    },
  },
  animate: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 1,
    },
  },
};

const OtherProjects = ({ otherProjects }) => {
  // OTHER PROJECTS - REDUX STATE
  const showOtherProjects = useSelector(
    (state) => state.otherProjects.showOtherProjects,
  );

  // i18n - Translation
  const { t } = useTranslation("otherProjectsSection");
  const sectionTitle = t("buttonShow");

  return (
    <>
      <OtherProjectsStar />
      {showOtherProjects ? null : <OtherProjectsButton />}

      <AnimatePresence>
        {showOtherProjects ? (
          <>
            <StyledTitle>{sectionTitle}</StyledTitle>
            <StyledProjectsContainer
              initial="initial"
              animate="animate"
              exit="initial"
              variants={otherProjectsContainerVariants}
            >
              {otherProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </StyledProjectsContainer>
            <OtherProjectsButton />
          </>
        ) : null}
      </AnimatePresence>

      {/* <AnimatePresence>
        {showOtherProjects ? (
          <>
            <StyledTitle>{sectionTitle}</StyledTitle>
            <StyledProjectsContainer
              initial="initial"
              animate="animate"
              exit="initial"
              variants={otherProjectsContainerVariants}
            >
              {otherProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </StyledProjectsContainer>
            <OtherProjectsButton />
          </>
        ) : null}
      </AnimatePresence> */}
      <OtherProjectsStar secondary />
    </>
  );
};

export default OtherProjects;
