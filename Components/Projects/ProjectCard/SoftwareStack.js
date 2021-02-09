import styled from "@emotion/styled";

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  list-style: none;
  border-top: 3px solid var(--default-white);
  border-bottom: 3px solid var(--default-white);
`;

const StyledElement = styled.li`
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
    <StyledList>
      {softwareStack.map((software, index) => (
        <StyledElement key={`${index}-${software}`}>{software}</StyledElement>
      ))}
    </StyledList>
  );
};

export default SoftwareStack;
