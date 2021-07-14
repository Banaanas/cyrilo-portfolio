import styled from "@emotion/styled";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme }) => theme.globalMaxWidth};
  padding: 16px;
`;

export default StyledSection;
