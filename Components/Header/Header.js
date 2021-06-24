import { useState } from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { useThrottledFn, useWindowScroll } from "beautiful-react-hooks";
import { Element as ScrollWrapper } from "react-scroll";
import { motion } from "framer-motion";
import SideMenu from "../SideMenu/SideMenu";
import NavBar from "./NavBar";
import HalfMoon from "./HalfMoon";
import CyriLogo from "./CyriLogo";

const StyledHeader = styled.header`
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-width: ${({ theme }) => theme.globalMinWidth};
  height: 4rem;
  padding: 0.5rem;
  background: linear-gradient(
    180deg,
    var(--header-halfmoon-shade-1) 50%,
    var(--header-halfmoon-shade-2) 50%
  );
  transform: translateY(${({ translateY }) => translateY});
  transition: transform 100ms ease-out;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: ${({ theme }) => theme.globalMinWidth};
  max-width: ${({ theme }) => theme.globalMaxWidth};
`;

const groupVariants = {
  initial: {
    scale: 0.5,
    rotate: -180,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevOffset, setPrevOffset] = useState(0);
  const [translateY, setTranslateY] = useState("0%");

  // useThrottledFn - CUSTOM HOOK
  // Throttle the callback function to optimize component performances by
  // preventing too many useless renders
  const windowScrollHandler = useThrottledFn(() => {
    // If SSR, Return (because Window is NOT defined on the Node.js Server)
    if (typeof window === "undefined") return;

    // Set Scroll Direction
    const { scrollY } = window;
    if (scrollY === 0) {
      setScrollDirection(null);
    }
    if (scrollY > prevOffset) {
      setScrollDirection("down");
    } else if (scrollY < prevOffset) {
      setScrollDirection("up");
      setTranslateY("100%");
    }

    // Set Previous Offset
    setPrevOffset(scrollY);

    // Hide Header if Scroll Down - Display Header if Scroll Up
    if (window.pageYOffset > 0 && scrollDirection !== "up") {
      setTranslateY("-100%");
    } else {
      setTranslateY("0%");
    }
  }, 50);

  // useWindowScroll - CUSTOM HOOK
  // Resize Event Listener (Add AND Cleanup Event)
  useWindowScroll(windowScrollHandler);

  return (
    <>
      <StyledHeader translateY={translateY}>
        <StyledHeaderWrapper>
          <NextLink href="/" passHref>
            <motion.a
              aria-label="Cyrilo Logo"
              initial="initial"
              animate="animate"
              variants={groupVariants}
              whileHover={{
                scale: 1.1,
              }}
            >
              <CyriLogo />
            </motion.a>
          </NextLink>
          <NavBar />
          <SideMenu />
        </StyledHeaderWrapper>
      </StyledHeader>
      <ScrollWrapper name="hero-banner-scroll" />
      {/* ScrollWrapper not in bannerHeroSection in order to include the top of the page */}
      <HalfMoon />
    </>
  );
};

export default Header;
