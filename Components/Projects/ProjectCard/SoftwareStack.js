import styled from "@emotion/styled";
import appTheme from "../../../styles/appTheme";

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  list-style: none;
`;

const ListElement = styled.li`
  margin: 4px;
  padding: 4px 8px;
  color: ${appTheme.colors.secondary.darker};
  font-size: ${appTheme.fontSizes.sm};
  font-family: ${appTheme.fontFamily.nexaThinItalic},
  ${appTheme.fontFamily.alternativeFonts};
  text-align: center;
  background-color: ${appTheme.colors.white};
  border-radius: 8px;
`;

const SoftwareStack = ({ softwareStack }) => {
  return (
    <List className="software-stack">
      {softwareStack.map((software, index) => (
        <ListElement key={`${index}-${software}`}>{software}</ListElement>
      ))}
    </List>
  );
};

export default SoftwareStack;
