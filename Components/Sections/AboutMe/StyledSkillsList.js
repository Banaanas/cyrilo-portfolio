import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import TextContainer from "./TextContainer";
import skillsList from "../../../data/skills-list";

const StyledSkillsList = styled(TextContainer)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--primary-main);
  background-color: var(--secondary-main);

  h3 {
    align-self: flex-start;
    white-space: nowrap; /* To wrap the double colon --> ":" */
  }
  li {
    color: var(--default-white);
    font-family: "Nexa", sans-serif;
  }

  @media (max-width: 350px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const List = styled.ul`
  align-self: center;
  max-width: 50rem;
  padding-left: 32px;
  text-align: left;
  text-indent: -1.8rem;
  columns: 2;
  list-style: none;
`;

const ListElement = styled.li`
  margin-right: 0.8rem;
  line-height: 1.8rem;
  text-align: left;

  ::before {
    margin-right: 8px;
    color: var(--primary-main);
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
          <ListElement key={`${index}-${skill}`}>{skill}</ListElement>
        ))}
      </List>
    </StyledSkillsList>
  );
};

export default SkillsList;
