import { useRouter } from "next/router";

const ShortStoryParagraph = () => {
  // i18n - Next Router
  const router = useRouter();
  const { locale } = router;

  if (locale === "en") {
    return (
      <p>
        I'm <strong id="Cyril-name">Cyril</strong>, a brand new{" "}
        <strong>JavaScript Developer</strong> based in Lyon, France. After two
        Master in International Law (2006-2007) and years as teacher and
        International Law consultant, I've decided to give my career a shining
        new direction 🌞.
      </p>
    );
  }

  if (locale === "fr") {
    return (
      <p>
        Je me prénomme <strong id="Cyril-name">Cyril</strong>, et je suis{" "}
        <strong>Développeur JavaScript</strong>. Après deux Master 2 en Droit
        International (2006-2007) et des années en tant qu'enseignant et
        consultant en Droit International, j'ai décidé d'imprimer à ma vie
        professionnelle une direction nouvelle🌞.
      </p>
    );
  }

  if (locale === "es") {
    return (
      <p>
        Soy <strong id="Cyril-name">Cyril</strong>, nuevo{" "}
        <strong>Desarrollador JavaScript</strong>, establecido en Lyon, Francia.
        Despues de dos Master 2 en Derecho Internacional (2006-2007) y años como
        docente y consultor en Derecho Internacional, decidí darle a mi vida
        profesional un nuevo giro. 🌞.
      </p>
    );
  }
};

export default ShortStoryParagraph;
