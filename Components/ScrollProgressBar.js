import { useState } from "react";
import { useThrottledFn, useWindowScroll } from "beautiful-react-hooks";
import styled from "@emotion/styled";

const StyledProgressBar = styled.div`
  position: fixed;
  z-index: 5000;
  width: 100%;
  height: 5px;
  background: transparent;
  transform: rotate(90);
`;

const StyledProgressDiv = styled.div`
  width: ${({ progressPercentage }) => progressPercentage};
  height: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
`;

const ScrollProgressBar = () => {
  const [scrollY, setScrollY] = useState(null);
  const [progress, setProgress] = useState("0%");

  // useThrottledFn - CUSTOM HOOK
  // Throttle the callback function to optimize component performances by
  // preventing too many useless renders
  const windowScrollHandler = useThrottledFn(() => {
    // If SSR, Return (because Window is NOT defined on the Node.js Server)
    if (typeof window === "undefined") return;

    // Set Scroll Position
    setScrollY(window.scrollY);

    // Set Scroll Progress Percentage
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setProgress(`${(scrollY / height) * 100}%`);
  }, 1);

  // useWindowScroll - CUSTOM HOOK
  // Resize Event Listener (Add AND Cleanup Event)
  useWindowScroll(windowScrollHandler);

  return (
    <StyledProgressBar>
      <StyledProgressDiv progressPercentage={progress} />
    </StyledProgressBar>
  );
};

export default ScrollProgressBar;
