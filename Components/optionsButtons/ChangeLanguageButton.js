import { useRouter } from "next/router";
import styled from "@emotion/styled";

const StyledButton = styled.button`
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

const ChangeLanguageButton = () => {
  // i18n - Next Router
  const router = useRouter();

  const { locale } = router;

  const changeLanguage = () => {
    const { locale } = router;

    // Return Next Language
    let nextLocale;
    if (locale === "en") nextLocale = "fr";
    if (locale === "fr") nextLocale = "es";
    if (locale === "es") nextLocale = "en";

    // Change Locale to Next Language
    router.push("/", "/", { locale: `${nextLocale}`, scroll: false });
  };

  return (
    <StyledButton onClick={changeLanguage} title="Change Language">
      {locale?.toUpperCase()}
    </StyledButton>
  );
};

export default ChangeLanguageButton;
