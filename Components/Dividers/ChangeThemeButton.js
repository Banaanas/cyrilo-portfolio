import styled from "@emotion/styled";
import { FaPaintBrush } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "../../store/slices/sideMenuSlice";
import enablePageScroll from "../../utils/enablePageScroll";

const StyledButton = styled.button`
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 100;
  color: ${({ theme }) => theme.colors.secondary.main};
  background-color: ${({ theme }) => theme.colors.default.white};
  cursor: pointer;
`;

const ChangeThemeButton = ({ toggleFunction }) => {
  return (
    <StyledButton onClick={toggleFunction}>
      <FaPaintBrush>Change Color</FaPaintBrush>
    </StyledButton>
  );
};

export default ChangeThemeButton;
