import Trans from "next-translate/Trans";
import { motion } from "framer-motion";
import ExternalLink from "../../Links/ExternalLink";
import ProjectsScrollLink from "../../Links/ProjectsScrollLink";

const paragraphVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

/* Trans Component is used for translations with HTML Tags in it */
const LongStoryParagraph = () => (
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
        ProjectsLink: <ProjectsScrollLink />,
        strongTag: <strong />,
        brTag: <br />,
      }}
    />
  </motion.p>
);

export default LongStoryParagraph;
