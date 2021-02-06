import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { toggleSideMenu } from "../../store/slices/sideMenuSlice";
import enablePageScroll from "../../utils/enablePageScroll";

const StyledSideMenuButton = styled(motion.button)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform, 100ms ease-out;

  :focus {
    color: ${({ theme }) => theme.colors.primary.dark};
    outline: thin dotted;
  }

  :hover {
    opacity: 0.8;
  }

  /*** Burger Span ***/

  /* CSS Variable for Span Width */
  --span-width: 2.5rem;

  span {
    display: inline-block;
    width: ${({ openMenu }) => (openMenu ? "3.5rem" : "var(--span-width)")};
    height: ${({ openMenu }) => (openMenu ? "0.4rem" : "0.25rem")};
    background-color: ${({ openMenu, theme }) =>
      openMenu ? theme.colors.default.white : theme.colors.primary.main};
    border-radius: 10px;
    transform-origin: left center;
    transition: transform, width, 300ms ease-out;
  }

  /* First Burger Span */
  span:first-of-type {
    transform: ${({ openMenu }) =>
      openMenu ? "translateX(4px) rotate(30deg)" : "rotate(0)"};
  }

  /* Second Burger Span */
  span:nth-of-type(2n) {
    width: ${({ openMenu }) =>
      openMenu ? "0" : "calc(var(--span-width)/3*2)"};
    margin: 0.5rem 0;
  }

  /* Third Burger Span */
  span:nth-of-type(3n) {
    transform: ${({ openMenu }) =>
      openMenu
        ? "translateX(4px) rotate(-30deg) translateX(0px)"
        : "rotate(0)"};
  }
`;

const buttonVariants = {
  initiate: {
    rotate: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    rotate: 180,
    transition: {
      duration: 0.2,
    },
  },
};

const Burger = ({ menuID }) => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  // USEDISPATCH - REDUX STATE
  const dispatch = useDispatch();

  const isExpanded = isMenuOpen ? true : false;

  const handleBurgerOnClick = () => {
    // Toggle isMenuOpen - Dispatch - Redux State
    dispatch(toggleSideMenu());

    if (isExpanded) {
      // Enable Scroll again
      enablePageScroll();
    } else {
      // Disable Scroll
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <StyledSideMenuButton
      openMenu={isMenuOpen}
      onClick={handleBurgerOnClick}
      aria-label="Toggle SideMenu"
      aria-expanded={isExpanded}
      aria-controls={menuID}
      id="burger-button"
      variants={buttonVariants}
      initiate={isMenuOpen ? "animate" : "initiate"}
      animate={isMenuOpen ? "initiate" : "animate"}
    >
      <span />
      <span />
      <span />
    </StyledSideMenuButton>
  );
};

export default Burger;
