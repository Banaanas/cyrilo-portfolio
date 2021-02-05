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
  height: 4rem;
  margin-top: 4rem; /* For HalfMoon */
  padding-top: 0.5rem;
  background: linear-gradient(
    -180deg,
    ${({ theme }) => theme.colors.secondary.main} 50%,
    ${({ theme }) => theme.colors.secondary.dark} 50%
  );
  filter: ${({ isMenuOpen }) => (isMenuOpen ? "blur(20px)" : "blur(0)")};
  transition: filter, 300ms ease;
`;

const StyledContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

const Footer = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  return (
    <>
      <StyledFooter isMenuOpen={isMenuOpen}>
        <StyledContainer>
          <HalfMoon />
        </StyledContainer>
        <NavBar />
        <SubFooter />
      </StyledFooter>
    </>
  );
};

export default Footer;
