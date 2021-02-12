import { useEffect } from "react";
import { useState } from "react";
import { useThrottledFn, useWindowScroll } from "beautiful-react-hooks";
import styled from "@emotion/styled";

const StyledProgressBar = styled.div`
  position: fixed;
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
  const [progress, setProgress] = useState("0%");

  // useThrottledFn - CUSTOM HOOK
  // Throttle the callback function to optimize component performances by
  // preventing too many useless renders
  const windowScrollHandler = useThrottledFn(() => {}, 1);

  // useWindowScroll - CUSTOM HOOK
  // Resize Event Listener (Add AND Cleanup Event)
  // useWindowScroll(windowScrollHandler);

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

      setProgress(`${(totalScroll / windowHeight) * 100}%`);
      const scrolled = (totalScroll / windowHeight) * 100;
      setProgress(scrolled);
      console.log("PROGRESS : ", progress);
    };

    // Add the Event Listener - MouseDown instead of click for UX purpose
    window.addEventListener("scroll", progressBarHandler);

    // Remove the Event Listener - useEffect Clean Up
    return () => window.removeEventListener("scroll", progressBarHandler);
  }, [progress]);

  return (
    <StyledProgressBar>
      <StyledProgressDiv progressPercentage={`${progress}%`} />
    </StyledProgressBar>
  );
};

export default ScrollProgressBar;
