import { useDispatch, useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import enablePageScroll from "../../utils/enablePageScroll";
import ContactIcons from "./ContactIcons";
import smoothScrollTo from "../../utils/smoothScrollTo";
import navLinks from "../../data/navLinks";
import { closeSideMenu } from "../../store/slices/sideMenuSlice";

const StyledMenu = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh; /* cf. -> Note 3 */
  overflow: hidden;
  font-family: "Nexa Bold", sans-serif;
  text-align: left;
  background: linear-gradient(
    to bottom,
    var(--secondary-darker) 25%,
    var(--secondary-dark) 25%,
    var(--secondary-dark) 50%,
    var(--primary-main) 50%,
    var(--primary-main) 75%,
    var(--primary-light) 75%,
    var(--primary-light) 100%
  );
`;

const StyledNavContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 24rem;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  color: var(--default-white);
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xl2};
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: var(--sidemenu-navbar-text-shadow);

  :hover {
    opacity: 0.8;
  }
`;

const StyledContactIconsContainer = styled(motion.div)`
  position: absolute;
  bottom: -2rem;
  left: -50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;

  svg {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
    color: var(--default-white);
    background-color: var(--secondary-dark);
    border-radius: 15px;

    :hover {
      color: var(--primary-light);
    }
  }
`;

const navBarVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 200,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const menuItemVariant = {
  hidden: {
    y: "-100vh",

    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  visible: {
    y: "0",

    transition: {
      type: "spring",
      stiffness: 250,
      delay: 0.2,
    },
  },
};

const NavBar = ({ menuID }) => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  // USEDISPATCH - REDUX STATE
  const dispatch = useDispatch();

  const isMenuDisplayed = !!isMenuOpen;
  const tabIndex = isMenuDisplayed ? 0 : -1;

  // Handle Close Side Menu - FUNCTION
  const handleCloseMenu = () => {
    // Close SideMenu - Dispatch - Redux State
    dispatch(closeSideMenu());

    // Enable Scroll again
    enablePageScroll();
  };

  // React Swipe Event Handler - Close SideMenu when onSwipedLeft
  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => handleCloseMenu(),
  });

  // Iterate through navLinks Array
  // And also through translation array in Locales Directory

  // i18n - Translation
  const { t } = useTranslation("common");

  return (
    <StyledMenu
      isMenuOpen={isMenuOpen}
      id={menuID}
      aria-hidden={!isMenuDisplayed}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...handlers}
      initial={isMenuOpen ? "visible" : "hidden"}
      animate={isMenuOpen ? "visible" : "hidden"}
      variants={navBarVariants}
    >
      <StyledNavContainer>
        <StyledNav>
          <StyledList>
            {navLinks.map((navLink, index) => (
              <motion.li
                key={`${index}-${navLink.href}`}
                initial={isMenuOpen ? "visible" : "hidden"}
                animate={isMenuOpen ? "visible" : "hidden"}
                variants={menuItemVariant}
              >
                <NextLink href={navLink.href} passHref>
                  <StyledLink
                    tabIndex={tabIndex}
                    onClick={() => {
                      handleCloseMenu();
                      smoothScrollTo(navLinks[index].scrollName);
                    }}
                  >
                    {t(`navLinks.${index}`)}
                    {/* Iterate through translation array in Locales directory */}
                  </StyledLink>
                </NextLink>
              </motion.li>
            ))}
          </StyledList>
        </StyledNav>
        <StyledContactIconsContainer
          initial={isMenuOpen ? "hidden" : "visible"}
          animate={isMenuOpen ? "visible" : "hidden"}
          variants={menuItemVariant}
        >
          <ContactIcons />
        </StyledContactIconsContainer>
      </StyledNavContainer>
    </StyledMenu>
  );
};

export default NavBar;
