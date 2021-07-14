import { useState } from "react/";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useThrottledFn, useWindowScroll } from "beautiful-react-hooks";
import ChangeLanguageButton from "./ChangeLanguageButton";
import ChangeColorsThemeButton from "./ChangeColorsThemeButton";

const Container = styled(motion.div)`
  position: fixed;
  right: 8px;
  bottom: ${({ bottom }) => bottom};
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.32px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;

  /* Gap Between the two Buttons */
  button:nth-of-type(1) {
    margin-bottom: 8px;
  }
`;

const OptionButtonsContainer = () => {
  const [bottom, setBottom] = useState("8px");
  // useThrottledFn - CUSTOM HOOK
  // Throttle the callback function to optimize component performances by
  // preventing too many useless renders
  const windowScrollHandler = useThrottledFn(() => {
    // If SSR, Return (because Window is NOT defined on the Node.js Server)
    if (typeof window === "undefined") return;

    // Set Button Bottom position in function of scrollY
    const { scrollY } = window;

    // Change Bottom Position when reach Footer
    if (window.innerHeight + scrollY + 64 >= document.body.scrollHeight) {
      setBottom("96px");
    } else {
      setBottom("8px");
    }
  }, 50);

  // useWindowScroll - CUSTOM HOOK
  // Resize Event Listener (Add AND Cleanup Event)
  useWindowScroll(windowScrollHandler);

  return (
    <Container layout bottom={bottom}>
      <ChangeColorsThemeButton />
      <ChangeLanguageButton />
    </Container>
  );
};

export default OptionButtonsContainer;
