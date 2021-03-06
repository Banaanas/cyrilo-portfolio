import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import OtherProjectsStar from "./OtherProjectsStar";
import OtherProjectsButton from "./OtherProjectsButton";
import StyledTitle from "../../StyledComponents/StyledTitle";
import appTheme from "../../../styles/appTheme";

// AnimatePresence does not work with React.Fragment because it needs
// an exit animation from the first animatable child. That's why this
// Container Div was set up
const AnimatePresenceContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden; /* Framer Motion - Height Animation */
`;

const ProjectsContainer = styled(motion.div)`
  display: grid;
  grid-row-gap: 48px;
  grid-column-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  align-items: stretch;
  justify-items: center;
  width: 100%;
  max-width: 1320px;

  /* Other Projects Card - ODD */

  .project-cards:nth-of-type(odd) {
    background-color: ${appTheme.colors.otherProjectsBackgroundOdd};

    .project-names {
      color: ${appTheme.colors.otherProjectsNameOdd};
    }

    .software-stack {
      border-top: 3px solid ${appTheme.colors.otherProjectsSoftwareStackOdd};
      border-bottom: 3px solid ${appTheme.colors.otherProjectsSoftwareStackOdd};
    }

    .project-links-icons {
      color: ${appTheme.colors.otherProjectsLinksColorOdd};
      background-color: ${appTheme.colors.otherProjectsLinksBackgroundColorOdd};
    }
  }

  /* Other Projects Card - EVEN */

  .project-cards:nth-of-type(even) {
    background-color: ${appTheme.colors.otherProjectsBackgroundEven};

    .project-names {
      color: ${appTheme.colors.otherProjectsNameEven};
    }

    .software-stack {
      border-top: 3px solid ${appTheme.colors.otherProjectsSoftwareStackEven};
      border-bottom: 3px solid ${appTheme.colors.otherProjectsSoftwareStackEven};
    }

    .project-links-icons {
      color: ${appTheme.colors.otherProjectsLinksColorEven};
      background-color: ${appTheme.colors
              .otherProjectsLinksBackgroundColorEven};
    }
  }
`;

const StyledAnimatePresenceContainerVariants = {
  initial: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
    },
  },
  animate: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const StyledProjectsContainerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.1,
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
      {/* AnimatePresence does not work with React.Fragment because it needs
      an exit animation from the first animatable child. That's why this
      Container Div was set up */}
      <AnimatePresence>
        {showOtherProjects ? (
          <AnimatePresenceContainer
            initial="initial"
            animate="animate"
            exit="initial"
            variants={StyledAnimatePresenceContainerVariants}
            key="StyledAnimatePresenceContainerVariants" /* AnimatePresence Key */
          >
            <StyledTitle>{sectionTitle}</StyledTitle>
            <ProjectsContainer
              variants={StyledProjectsContainerVariants}
              initial="hidden"
              animate="show"
            >
              {otherProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </ProjectsContainer>
          </AnimatePresenceContainer>
        ) : null}
      </AnimatePresence>
      <OtherProjectsButton />
      <OtherProjectsStar secondary />
    </>
  );
};

export default OtherProjects;
