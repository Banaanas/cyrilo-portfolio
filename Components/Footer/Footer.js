import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import NavBar from "./NavBar";
import SubFooter from "./SubFooter";
import HalfMoon from "./HalfMoon";

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  margin-top: 64px; /* For HalfMoon */
  padding-top: 8px;
  background: linear-gradient(
    -180deg,
    var(--secondary-main) 50%,
    var(--secondary-dark) 50%
  );
  filter: ${({ isMenuOpen }) => (isMenuOpen ? "blur(20px)" : "blur(0)")};
  transition: filter, 300ms ease;
`;

const Footer = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  return (
    <>
      <StyledFooter isMenuOpen={isMenuOpen}>
        <HalfMoon />
        <NavBar />
        <SubFooter />
      </StyledFooter>
    </>
  );
};

export default Footer;
