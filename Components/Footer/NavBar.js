import NextLink from "next/link";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import smoothScrollTo from "../../utils/smoothScrollTo";
import navLinks from "../../data/navLinks";

const Nav = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 352px;
  height: 50%;
`;

const List = styled.ul`
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  list-style: none;
`;

const Link = styled.a`
  color: var(--default-white);
  font-weight: bolder;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  text-decoration: none;

  :hover {
    opacity: 0.6;
  }

  @media (min-width: 340px) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const NavBar = () => {
  // Iterate through navLinks Array
  // And also through translation array in Locales Directory

  // i18n - Translation
  const { t } = useTranslation("common");

  return (
    <Nav>
      <List>
        {navLinks.map((navLink, index) => (
          <li key={`${index}-${navLink.href}`}>
            <NextLink href={navLink.href} passHref>
              <Link onClick={() => smoothScrollTo(navLinks[index].scrollName)}>
                {t(`navLinks.${index}`)}
                {/* Iterate through translation array in Locales directory */}
              </Link>
            </NextLink>
          </li>
        ))}
      </List>
    </Nav>
  );
};

export default NavBar;
