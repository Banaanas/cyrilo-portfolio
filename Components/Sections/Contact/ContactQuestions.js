import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  font-family: "Nexa Black", sans-serif;
  text-transform: uppercase;
`;

export const FirstQuestion = () => {
  const { t } = useTranslation("contactSection");
  const importantQuestion = t(`importantQuestion`);

  return <StyledDiv>{importantQuestion}</StyledDiv>;
};

export const SecondQuestion = () => {
  const { t } = useTranslation("contactSection");
  const firstSubsidiaryQuestion = t(`firstSubsidiaryQuestion`);

  return <StyledDiv>{firstSubsidiaryQuestion}</StyledDiv>;
};

/* Trans Component is used for translations with HTML Tags in it
 *  In this case, it's ony for the English Translation ( emphasized "Hi")
 * */

export const ThirdQuestion = () => {
  return (
    <StyledDiv>
      <Trans
        i18nKey="contactSection:secondSubsidiaryQuestion"
        components={{
          emphasize: <em />,
        }}
      />
    </StyledDiv>
  );
};
