import { useRouter } from "next/router";
import NextLink from "next/link";
import styled from "@emotion/styled";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--change-theme-button-color);
  font-size: ${({ theme }) => theme.fontSizes.md};
  stroke-width: 1px;
  font-family: "Nexa Black", sans-serif;
  background-color: var(--change-theme-button-background);
  border: solid 5px var(--change-theme-button-background);
  border-radius: 50%;
  cursor: pointer;

  /* When click on Link */
  :focus {
    outline: none; /* Outline is unaesthetically squared because SVG has a rounded border */
    box-shadow: 0 0 3pt 2pt var(--change-theme-button-background); /* To replace the Outline */
  }
`;

// Cf. -> Note 1 - Flash
// Button to change the Language
const ChangeLanguageButton = () => {
  // i18n - Next Router
  const router = useRouter();
  const { locale } = router;

  const returnNextLocale = (routerObj) => {
    const { locale } = routerObj;

    // Return Next Language
    if (locale === "en") return "fr";
    if (locale === "fr") return "es";
    if (locale === "es") return "en";
  };

  return (
    <NextLink
      href={router.asPath}
      locale={returnNextLocale(router)}
      scroll={false}
    >
      <StyledLink>{locale.toUpperCase()}</StyledLink>
    </NextLink>
  );
};

export default ChangeLanguageButton;

/*

const ChangeLanguageButton = () => {
  //const [buttonText, setButtonText] = useState("EN");

  // i18n - Next Router
  const router = useRouter();

  /!*  useEffect(() => {
    const { locale } = router;
    setButtonText(locale.toUpperCase());
  }, [router]);*!/

  const { locale } = router;

  const changeLanguage = () => {
    const { locale } = router;

    /!* "Shallow: true" to prevent Page Reload *!/
    if (locale === "en") {
      router.push("/", "/", { locale: "fr", shallow: "true" });
      return;
    }
    if (locale === "fr") {
      router.push("/", "/", { locale: "es", shallow: "true" });
      return;
    }
    if (locale === "es") {
      router.push("/", "/", { locale: "en", shallow: "true" });
    }
  };

  return (
      <StyledButton onClick={changeLanguage} title="Change Language">
        <span>{locale.toUpperCase()}</span>
      </StyledButton>
  );
};

export default ChangeLanguageButton;
*/
