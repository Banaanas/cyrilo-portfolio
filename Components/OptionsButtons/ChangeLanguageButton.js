import { useRouter } from "next/router";
import styled from "@emotion/styled";
import buttonFocusStyle from "../../styles/css-composition";
import appTheme from "../../styles/appTheme";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: ${appTheme.colors.changeLanguageButtonColor};
  font-size: ${appTheme.fontSizes.md};
  stroke-width: 1px;
  font-family: ${appTheme.fontFamily.nexaBlack},
  ${appTheme.fontFamily.alternativeFonts};
  background-color: ${appTheme.colors.changeLanguageButtonBackground};
  border: solid 5px ${appTheme.colors.changeLanguageButtonBackground};
  border-radius: 50%;
  cursor: pointer;

  /* When click on Link */

  :focus {
    ${buttonFocusStyle}
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
    <Button onClick={changeLanguage} title="Change Language">
      {locale?.toUpperCase()}
    </Button>
  );
};

export default ChangeLanguageButton;
