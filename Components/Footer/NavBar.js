import NextLink from "next/link";
import styled from "@emotion/styled";
import smoothScrollTo from "../../utils/smoothScrollTo";
import navLinks from "../../data/navLinks";

const StyledNav = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 350px;
  height: 50%;
`;

const StyledList = styled.ul`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  list-style: none;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.default.white};
  font-weight: bolder;
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-transform: uppercase;
  text-decoration: none;

  :hover {
    opacity: 0.6;
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <StyledList>
        {navLinks.map((navLink, index) => (
          <li key={`${index}-${navLink}`}>
            <NextLink href={navLink.href} passHref>
              <StyledLink
                onClick={() => smoothScrollTo(navLinks[index].scrollName)}
              >
                {navLink.name}
              </StyledLink>
            </NextLink>
          </li>
        ))}
      </StyledList>
    </StyledNav>
  );
};

export default NavBar;
