import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import TextContainer from "./TextContainer";
import skillsList from "../../../data/skills-list";
import appTheme from "../../../styles/appTheme";

const StyledSkillsList = styled(TextContainer)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${appTheme.colors.primary.default};
  background-color: ${appTheme.colors.secondary.default};

  h3 {
    align-self: flex-start;
    white-space: nowrap; /* To wrap the double colon --> ":" */
  }

  li {
    color: ${appTheme.colors.white};
    font-family: "Nexa", sans-serif;
  }

  @media (max-width: 350px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const List = styled.ul`
  align-self: center;
  max-width: 800px;
  padding-left: 32px;
  text-align: left;
  text-indent: -30px;
  columns: 2;
  list-style: none;
`;

const ListElement = styled.li`
  margin-right: 12.8px;
  line-height: 28.8px;
  text-align: left;

  ::before {
    margin-right: 8px;
    color: ${appTheme.colors.primary.default};
    content: "►";
  }
`;

const SkillsList = () => {
  // i18n - Translation
  const { t } = useTranslation("aboutMeSection");
  const title = t("thingsICodeWith");

  return (
    <StyledSkillsList>
      <h3>{title} :</h3>
      <List>
        {skillsList.map((skill, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ListElement key={`${index}-${skill}`}>{skill}</ListElement>
        ))}
      </List>
    </StyledSkillsList>
  );
};

export default SkillsList;
