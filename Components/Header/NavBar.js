import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import smoothScrollTo from "../../utils/smoothScrollTo";
import navLinks from "../../data/navLinks";

const StyledNav = styled.nav`
  display: none;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    min-width: 480px;
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
  height: 100%;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* Hover Effect */
    ::after {
      width: 90%;
      height: 3px;
      background: var(--primary-main);
      transform: scale(0);
      transition: transform 250ms ease-out;
      content: "";
    }

    :hover::after {
      transform: scale(1);
    }
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

  @media (min-width: 850px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

// Iterate through navLinks Array
// And also through translation array in Locales Directory
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
                  {/* Iterate through translation array in Locales directory */}
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
