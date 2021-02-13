import { useRouter } from "next/router";
import NextLink from "next/link";
import styled from "@emotion/styled";
import smoothScrollTo from "../../utils/smoothScrollTo";
import navLinks from "../../data/navLinks";
import setLanguageProperty from "../../utils/setLanguageProperty";
import useTranslation from "next-translate/useTranslation";

const StyledNav = styled.nav`
  display: none;

  @media (min-width: 710px) {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    min-width: 450px;
    margin-left: auto;
  }

  @media (min-width: 850px) {
    min-width: 550px;
  }
`;

const StyledList = styled.ul`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;

  li {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--default-white);
  font-weight: bolder;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: "Nexa Bold", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  opacity: 1;

  :hover {
    opacity: 0.6;
  }

  @media (min-width: 850px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

// Iterate through navLinks Array
// And also through locales translations files
const NavBar = () => {
  // i18n - Translation
  const { t } = useTranslation("common");

  return (
    <>
      <StyledNav>
        <StyledList>
          {navLinks.map((navLink, index) => (
            <li key={`${index}-${navLink.ref}`}>
              <NextLink href={navLink.href} passHref>
                <StyledLink
                  onClick={() => smoothScrollTo(navLinks[index].scrollName)}
                >
                  {t(`navLinks.${index}`)}
                  {/* Iterate through locales translations files */}
                </StyledLink>
              </NextLink>
            </li>
          ))}
        </StyledList>
      </StyledNav>
    </>
  );
};

export default NavBar;
