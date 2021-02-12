import { useRouter } from "next/router";
import NextLink from "next/link";
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

const ProjectsLink = () => {
  // i18n - Next Router
  const router = useRouter();

  // Return "Projects" Word Translation
  const translateProjectsWord = (router) => {
    const { locale } = router;
    let projectsWord;

    if (locale === "en") {
      projectsWord = "Projects";
    }
    if (locale === "fr") {
      projectsWord = "Projets";
    }
    if (locale === "es") {
      projectsWord = "Proyectos";
    }
    return projectsWord;
  };

  return (
    <NextLink href={navLinks[1].href} passHref>
      <a onClick={() => smoothScrollTo(navLinks[1].scrollName)}>
        {translateProjectsWord(router)}
      </a>
    </NextLink>
  );
};

const LongStoryParagraph = () => {
  // i18n - Next Router
  const router = useRouter();
  const { locale } = router;

  // English Translation
  if (locale === "en") {
    return (
      <motion.p
        initial="initial"
        animate="animate"
        exit="initial"
        variants={paragraphVariants}
      >
        Since march 2020, I've been learning Web Development to become a
        <strong> FullStack Developer</strong>, specialized in
        <strong> Front-End Development</strong> .
        <br />
        In order to achieve this purpose, I have completed both{" "}
        <ExternalLink
          ariaLabel="The Odin Project Website"
          href="https://www.theodinproject.com/"
          title="The Odin Project"
        >
          The Odin Project
        </ExternalLink>{" "}
        and the{" "}
        <ExternalLink
          ariaLabel="Full Stack Open"
          href="https://fullstackopen.com/"
          title="Full Stack Open"
        >
          Full Stack Open
        </ExternalLink>{" "}
        curriculums. Throughout those courses, I've been learning programming
        concepts and practical skills, realizing numerous concrete{" "}
        <ProjectsLink />. Since then, I have deeply enjoyed continuously
        learning and resolving problems.
      </motion.p>
    );
  }

  // French Translation
  if (locale === "fr") {
    return (
      <motion.p
        initial="initial"
        animate="animate"
        exit="initial"
        variants={paragraphVariants}
      >
        Depuis mars 2020, j'apprends le Development Web pour devenir
        <strong> Développeur FullStack</strong>, spécialisé en
        <strong> Développement Front-End</strong> .
        <br />
        Pour y parvenir, j'ai complété les cours suivants :{" "}
        <ExternalLink
          ariaLabel="The Odin Project Website"
          href="https://www.theodinproject.com/"
          title="The Odin Project"
        >
          The Odin Project
        </ExternalLink>{" "}
        et{" "}
        <ExternalLink
          ariaLabel="Full Stack Open"
          href="https://fullstackopen.com/"
          title="Full Stack Open"
        >
          Full Stack Open
        </ExternalLink>{" "}
        . À travers ces formations, j'ai à la fois intégré des concepts de
        programmation et acquis des compétences concrètes, tout en réalisant de
        nombreux <ProjectsLink /> effectifs. Depuis lors, je me suis pris de
        passion pour l'apprentissage permanent et la résolution de problèmes.
      </motion.p>
    );
  }

  // Spanish Translation
  if (locale === "es") {
    return (
      <motion.p
        initial="initial"
        animate="animate"
        exit="initial"
        variants={paragraphVariants}
      >
        Desde el mes de marzo de 2020, estuve aprendiendo el Desarrollo Web con
        el fin de volverme <strong> Desarrollador FullStack</strong>,
        specialized in
        <strong> Front-End Development</strong> .
        <br />
        Para cumplir con esta meta, complete los dos cursos siguientes :{" "}
        <ExternalLink
          ariaLabel="The Odin Project Website"
          href="https://www.theodinproject.com/"
          title="The Odin Project"
        >
          The Odin Project
        </ExternalLink>{" "}
        y{" "}
        <ExternalLink
          ariaLabel="Full Stack Open"
          href="https://fullstackopen.com/"
          title="Full Stack Open"
        >
          Full Stack Open
        </ExternalLink>{" "}
        A través de estos, aprendí conceptos de programación y competencias
        concretas, llevando a cabo muchos <ProjectsLink /> efectivos. Desde
        entonces, me apasiona el aprendizaje permanente y la resolución de
        problemas.
      </motion.p>
    );
  }
};

export default LongStoryParagraph;
