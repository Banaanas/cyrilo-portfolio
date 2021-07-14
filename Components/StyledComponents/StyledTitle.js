import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const StyledTitle = styled.h2`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    color: ${appTheme.colors.styledTitle};
    font-size: ${appTheme.fontSizes.xl2};
    font-family: ${appTheme.fontFamily.nexaBlack},
    ${appTheme.fontFamily.alternativeFonts};
    text-align: center;
    text-transform: uppercase;
`;
export default StyledTitle;
