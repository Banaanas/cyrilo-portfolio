import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import smoothScrollTo from "../../utils/smoothScrollTo";
import navLinks from "../../data/navLinks";
import appTheme from "../../styles/appTheme";

const Nav = styled.nav`
  display: none;
  height: 100%;

  @media (min-width: ${appTheme.breakpoints.heroBannerSection2}) {
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

const List = styled.ul`
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
      background: ${appTheme.colors.primary.default};
      border-radius: 4px;
      transform: scale(0);
      transition: transform 250ms ease-out;
      content: "";
    }

    :hover::after {
      transform: scale(1);
    }
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${appTheme.colors.white};
  font-weight: bolder;
  font-size: ${appTheme.fontSizes.xl};
  font-family: ${appTheme.fontFamily.nexaBold},
  ${appTheme.fontFamily.alternativeFonts};
  text-transform: uppercase;
  text-decoration: none;

  @media (min-width: 850px) {
    font-size: ${appTheme.fontSizes.xl};
  }
`;

// Iterate through navLinks Array
// And also through translation array in Locales Directory
const NavBar = () => {
  // i18n - Translation
  const { t } = useTranslation("common");

  return (
    <>
      <Nav>
        <List>
          {navLinks.map((navLink, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${index}-${navLink.ref}`}>
              <NextLink href={navLink.href} passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link
                  onClick={() => smoothScrollTo(navLinks[index].scrollName)}
                >
                  {t(`navLinks.${index}`)}
                  {/* Iterate through translation array in Locales directory */}
                </Link>
              </NextLink>
            </li>
          ))}
        </List>
      </Nav>
    </>
  );
};

export default NavBar;
