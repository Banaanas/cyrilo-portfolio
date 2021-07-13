import styled from "@emotion/styled";

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  list-style: none;
`;

const ListElement = styled.li`
  margin: 0.2rem;
  padding: 6px 8px;
  color: var(--secondary-darker);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: "Nexa Thin Italic", sans-serif;
  text-align: center;
  background-color: var(--default-white);
  border-radius: 50px;
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
