import { useRouter } from "next/router";
import styled from "@emotion/styled";
import setLanguageTranslation from "../../../utils/setLanguageTranslation";

const StyledDiv = styled.div`
  font-family: "Nexa Black", sans-serif;
  text-transform: uppercase;
`;

export const FirstQuestion = () => {
  // i18n - Next Router
  const router = useRouter();
  const translation = setLanguageTranslation(router);

  return <StyledDiv>{translation.contactSection.importantQuestion}</StyledDiv>;
};

export const SecondQuestion = () => {
  // i18n - Next Router
  const router = useRouter();
  const translation = setLanguageTranslation(router);
  return (
    <StyledDiv>{translation.contactSection.firstSubsidiaryQuestion}</StyledDiv>
  );
};

export const ThirdQuestion = () => {
  // i18n - Next Router
  const router = useRouter();
  const { locale } = router;

  if (locale === "en") {
    return (
      <StyledDiv>
        Just Want to Say <em>"Hi"</em> ?
      </StyledDiv>
    );
  }
  if (locale === "fr") {
    return <StyledDiv>Échanger quelques mots ?</StyledDiv>;
  }
  if (locale === "es") {
    return <StyledDiv>Platicar conmigo ?</StyledDiv>;
  }
};
