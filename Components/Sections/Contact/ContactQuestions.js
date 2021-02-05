import styled from "@emotion/styled";

const StyledDiv = styled.div`
  font-family: "Nexa Black", sans-serif;
  text-transform: uppercase;
`;

export const FirstQuestion = () => {
  return <StyledDiv>Have a Project in Mind ?</StyledDiv>;
};

export const SecondQuestion = () => {
  return <StyledDiv>Want to Ask Something ?</StyledDiv>;
};

export const ThirdQuestion = () => {
  return (
    <StyledDiv>
      Just Want to Say <em>"Hi"</em> ?
    </StyledDiv>
  );
};
