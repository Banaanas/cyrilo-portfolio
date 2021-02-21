import { useEffect, useState } from "react";
import { useThrottledFn } from "beautiful-react-hooks";
import styled from "@emotion/styled";

const StyledProgressBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 5px;
  background: transparent;
  transform: rotate(90);
`;

const StyledProgressDiv = styled.div`
  width: ${({ progressPercentage }) => progressPercentage};
  height: 100%;
  background: var(--primary-main);
`;

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressBarHandler = () => {
      // If SSR, Return (because Window is NOT defined on the Node.js Server)
      if (typeof window === "undefined") return;

      const totalScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      // Set Scroll Progress Percentage
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // Set Scrolled String Percentage
      const scrolled = `${(totalScroll / windowHeight) * 100}%`;

      // Update Progress State with String Percentage
      setProgress(scrolled);
    };

    // Add the Event Listener - MouseDown instead of click for UX purpose
    window.addEventListener("scroll", progressBarHandler);

    // Remove the Event Listener - useEffect Clean Up
    return () => window.removeEventListener("scroll", progressBarHandler);
  }, [progress]);

  return (
    <StyledProgressBar>
      <StyledProgressDiv progressPercentage={progress} />
    </StyledProgressBar>
  );
};

export default ScrollProgressBar;
