import NextLink from "next/link";
import Trans from "next-translate/Trans";
import { motion } from "framer-motion";
import ExternalLink from "../../Links/ExternalLink";
import navLinks from "../../../data/navLinks";
import smoothScrollTo from "../../../utils/smoothScrollTo";

const paragraphVariants = {
  initial: {
    opacity: 0,
    pointerEvents: "none",
  },
  animate: {
    opacity: 1,
    pointerEvents: "auto",
  },
  transition: {
    type: "spring",
  },
};

const ProjectsLink = ({ children }) => {
  return (
    <NextLink href={navLinks[1].href} passHref>
      <a onClick={() => smoothScrollTo(navLinks[1].scrollName)}>{children}</a>
    </NextLink>
  );
};

/* Trans Component is used for translations with HTML Tags in it */
const LongStoryParagraph = () => {
  return (
    <motion.p
      initial="initial"
      animate="animate"
      exit="initial"
      variants={paragraphVariants}
    >
      <Trans
        i18nKey="aboutMeSection:longStory.text"
        components={{
          TheOdinProjectLink: (
            <ExternalLink
              ariaLabel="The Odin Project Website"
              href="https://www.theodinproject.com/"
              title="The Odin Project"
            />
          ),
          FullStackOpenLink: (
            <ExternalLink
              ariaLabel="Full Stack Open"
              href="https://fullstackopen.com/"
              title="Full Stack Open"
            />
          ),
          ProjectsLink: <ProjectsLink />,
          strongTag: <strong />,
          brTag: <br />,
        }}
      />
    </motion.p>
  );
};

export default LongStoryParagraph;
