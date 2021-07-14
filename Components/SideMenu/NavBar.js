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
import appTheme from "../../styles/appTheme";

const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 384px;
`;

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
  height: 100vh;
  overflow: hidden;
  font-family: ${appTheme.fontFamily.nexaBold},
  ${appTheme.fontFamily.alternativeFonts};
  text-align: left;
  background: linear-gradient(to bottom,
  ${appTheme.colors.secondary.darker} 25%,
  ${appTheme.colors.secondary.dark} 25%,
  ${appTheme.colors.secondary.dark} 50%,
  ${appTheme.colors.primary.default} 50%,
  ${appTheme.colors.primary.default} 75%,
  ${appTheme.colors.primary.light} 75%,
  ${appTheme.colors.primary.light} 100%);
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledList = styled(motion.ul)`
  padding: 0;
  list-style: none;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  color: ${appTheme.colors.white};
  font-weight: bold;
  font-size: ${appTheme.fontSizes.xl2};
  letter-spacing: 0.32px;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: ${appTheme.elevation.sideMenuNavBarTextShadow};

  :hover {
    opacity: 0.8;
  }
`;

const StyledContactIconsContainer = styled(motion.div)`
  position: absolute;
  top: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 320px;
  padding: 0;

  svg {
    width: 32px;
    height: 32px;
    padding: 4px;
    color: ${appTheme.colors.white};
    background-color: ${appTheme.colors.secondary.dark};
    border-radius: 15px;

    :hover {
      color: ${appTheme.colors.primary.light};
    }
  }
`;

const navBarVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
    transition: {
      ease: "easeIn",
      when: "afterChildren",
      delay: 0.6,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      when: "afterChildren",
    },
  },
};

const menuItemVariant = {
  hidden: {
    x: "-100vh",
    transition: {
      delayChildren: 0.2,
    },
  },
  visible: {
    x: "0",
    transition: {
      delayChildren: 0.2,
    },
  },
};

const listVariant = {
  hidden: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      staggerDirection: 1,
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
      aria-modal="true"
      tabIndex={tabIndex}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...handlers}
      initial="hidden"
      animate={isMenuOpen ? "visible" : "hidden"}
      variants={navBarVariants}
    >
      <StyledNavContainer>
        <StyledNav aria-label="mobile navigation">
          <StyledList
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            variants={listVariant}
          >
            {navLinks.map((navLink, index) => (
              <motion.li
                key={`${index}-${navLink.href}`}
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
      </StyledNavContainer>
      <StyledContactIconsContainer
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={menuItemVariant}
      >
        <ContactIcons />
      </StyledContactIconsContainer>
    </StyledMenu>
  );
};

export default NavBar;
