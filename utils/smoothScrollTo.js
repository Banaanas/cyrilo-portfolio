import * as Scroll from "react-scroll";

// React-Scroll
// (Smooth) Scroll to Element
const smoothScrollTo = (name) => {
  const { scroller } = Scroll;
  scroller.scrollTo(name, {
    duration: 1000,
    delay: 0,
    smooth: true,
    offset: -50, // Scroll to element + / - X pixels down/up the page
  });
};

export default smoothScrollTo;
