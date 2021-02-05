import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import FocusLock from "react-focus-lock";
import { useThrottledFn, useWindowResize } from "beautiful-react-hooks";
import useOnClickOutside from "../../custom-hooks/useOnClickOutside";
import Burger from "./Burger";
import NavBar from "./NavBar";
import enablePageScroll from "../../utils/enablePageScroll";
import { closeSideMenu } from "../../store/slices/sideMenuSlice";

const StyledRefDiv = styled.div`
  @media (min-width: 710px) {
    display: none;
  }
`;

const SideMenu = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  // USEDISPATCH - REDUX STATE
  const dispatch = useDispatch();

  // Width initially set to 0 instead of window.innerWidth
  // Because, if SSR, Window is NOT defined on the Node.js Server
  const [width, setWidth] = useState(0);

  // Defined Width when Component is mounted
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  const DOMRef = useRef(null);
  const menuId = "side-menu";

  // Close Side SideMenu when click outside the Ref- custom Hook
  useOnClickOutside(DOMRef, () => {
    // Close SideMenu - Dispatch - Redux State
    dispatch(closeSideMenu());

    // Enable Scroll again
    enablePageScroll();
  });

  // useThrottledFn - CUSTOM HOOK
  // Throttle the callback function to optimize component performances by
  // preventing too many useless renders
  const onWindowResizeHandler = useThrottledFn(() => {
    // If SSR, Return (because Window is NOT defined on the Node.js Server)
    if (typeof window === "undefined") return;

    // Set Width
    setWidth(width);

    // Close SideMenu if it was Open,
    if (window.innerWidth > 710 && isMenuOpen === true) {
      // Close SideMenu - Dispatch - Redux State
      dispatch(closeSideMenu());

      // Enable Scroll again
      enablePageScroll();
    }
  }, 200);

  // useWindowResize - CUSTOM HOOK
  // Resize Event Listener (Add AND Cleanup Event)
  useWindowResize(onWindowResizeHandler);

  return (
    <>
      <StyledRefDiv ref={DOMRef}>
        <FocusLock disabled={!isMenuOpen}>
          <Burger menuID={menuId} />
          <NavBar menuID={menuId} />
        </FocusLock>
      </StyledRefDiv>
    </>
  );
};

export default SideMenu;
