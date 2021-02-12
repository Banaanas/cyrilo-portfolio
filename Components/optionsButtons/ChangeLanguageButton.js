import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  /* When click on Button */
  :focus {
    outline: none; /* Outline is unaesthetically squared because SVG has a rounded border */
    box-shadow: 0 0 3pt 2pt var(--change-theme-button-background); /* To replace the Outline */
  }

  /* Style SVG with Next Theme Colors */
  span {
    padding: 4px;
    color: var(--change-theme-button-color);
    font-size: ${({ theme }) => theme.fontSizes.lg};
    stroke-width: 1px;
    font-family: "Nexa Black", sans-serif;
    background-color: var(--change-theme-button-background);
    border: solid 5px var(--change-theme-button-color);
    border-radius: 50%;
  }
`;

// Cf. -> Note 1 - Flash
// Button to change the Colors Theme
const ChangeColorsThemeButton = () => {
  const [buttonText, setButtonText] = useState("EN");

  // i18n - Next Router
  const router = useRouter();

  useEffect(() => {
    const { locale } = router;
    setButtonText(locale.toUpperCase());
  }, [router]);

  const changeLanguage = () => {
    const { locale } = router;

    /* "Shallow: true" to prevent Page Reload */
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
      <span>{buttonText}</span>
    </StyledButton>
  );
};

export default ChangeColorsThemeButton;
