import styled from "@emotion/styled";
import StyledTextContainer from "./StyledTextContainer";
import skillsList from "../../../data/skills-list";
import useTranslation from "next-translate/useTranslation";

const StyledSkillsList = styled(StyledTextContainer)`
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
  }

  @media (max-width: 350px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const StyledList = styled.ul`
  align-self: center;
  max-width: 50rem;
  padding-left: 2rem;
  text-align: left;
  text-indent: -1.8rem;
  columns: 2;
  list-style: none;
`;

const StyledListItem = styled.li`
  margin-right: 0.8rem;
  line-height: 1.8rem;
  text-align: left;

  ::before {
    margin-right: 0.5rem;
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
      <StyledList>
        {skillsList.map((skill, index) => (
          <StyledListItem key={`${index}-${skill}`}>{skill}</StyledListItem>
        ))}
      </StyledList>
    </StyledSkillsList>
  );
};

export default SkillsList;
