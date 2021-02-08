import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";

const StyledSVG = styled(motion.svg)`
  position: relative;
  width: 100%;
  max-width: 32rem;
  padding: 1rem;
  overflow: visible; /* To make the Glow visible */

  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection}) {
    min-width: 32rem;
    max-width: 40rem;
  }

  ellipse {
    fill: ${({ theme }) => theme.colors.primary.main};
    stroke: none;
  }

  #glow {
    opacity: 0.5;
    animation: glowing 5000ms infinite alternate-reverse;
  }

  @keyframes glowing {
    0% {
      flood-color: ${({ theme }) => theme.colors.secondary.main};
    }

    100% {
      flood-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
const PlanetCyril = () => {
  const appTheme = useTheme();

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 584 546"
      initial={{ opacity: 0.9995, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <filter id="glow-filter">
        <feFlood id="glow" in="SourceGraphic" />
        <feComposite operator="in" in2="SourceGraphic" />
        <feGaussianBlur id="gaussian-blur" stdDeviation="10" />
        <feComponentTransfer result="glow1">
          <feFuncA id="fe-funca" type="linear" slope="1" intercept="0" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="glow1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <ellipse
        filter="url(#glow-filter)"
        rx="272"
        ry="252"
        transform="matrix(1 0 .00256 1 272.646 293.999)"
      />
      <motion.path
        initial={{ pathLength: 1, pathOffset: 0, opacity: 0.5 }}
        animate={{ pathLength: 0, pathOffset: 1, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        fill={appTheme.colors.primary.main}
        fillRule="nonzero"
        d="M576.019 64.029l-6.721 7.846 6.721 7.875-9.144-5.798-9.144 5.798 6.721-7.875-6.721-7.846 9.144 5.769 9.144-5.769zm-24.173.029L547 61l3.548 4.154L547 69.308l4.846-3.058 4.846 3.058-3.577-4.154L556.663 61l-4.817 3.058zm28.875 10.73l-3.202-2.019 2.365 2.769-2.365 2.77 3.202-2.02 3.202 2.02-2.366-2.77 2.366-2.769-3.202 2.019z"
      />
      <path
        fill={appTheme.colors.secondary.main}
        fillRule="nonzero"
        d="M527.144 0c.26 17.711-14.106 18.606-18.144 18.519 4.01.346 18.144 2.683 18.115 18.404h.029c0-15.952 16.067-18.173 18.779-18.433-.26.029-.635.029-1.068.029-4.5 0-17.797-1.442-17.711-18.519zm3.837 22.183c-.606-.491-4.385-3.231-7.789.057 3.375-3.231.923-6.519.202-7.356.779.808 3.923 3.491 7.673-.202-1.471 1.385-1.961 2.712-1.961 3.837 0 1.933 1.5 3.346 1.875 3.664zM552.144 141c.26 17.711-14.106 18.606-18.144 18.519 4.01.346 18.144 2.683 18.115 18.404h.029c0-15.952 16.067-18.173 18.779-18.433-.26.029-.635.029-1.068.029-4.5 0-17.797-1.442-17.711-18.519zm3.837 22.182c-.606-.49-4.385-3.23-7.789.058 3.375-3.231.923-6.519.202-7.356.779.808 3.923 3.491 7.673-.201-1.471 1.384-1.961 2.711-1.961 3.836 0 1.933 1.5 3.346 1.875 3.663zM547.144 80c.26 17.711-14.106 18.606-18.144 18.519 4.01.346 18.144 2.683 18.115 18.404h.029c0-15.952 16.067-18.173 18.779-18.433-.26.029-.635.029-1.068.029-4.5 0-17.797-1.442-17.711-18.519zm3.837 22.182c-.606-.49-4.385-3.23-7.789.058 3.375-3.231.923-6.519.202-7.355.779.807 3.923 3.49 7.673-.202-1.471 1.384-1.961 2.711-1.961 3.836 0 1.933 1.5 3.346 1.875 3.663zM527.144 53c.26 17.711-14.106 18.606-18.144 18.519 4.01.346 18.144 2.683 18.115 18.404h.029c0-15.952 16.067-18.173 18.779-18.433-.26.029-.635.029-1.068.029-4.5 0-17.797-1.442-17.711-18.519zm3.837 22.183c-.606-.491-4.385-3.231-7.789.057 3.375-3.231.923-6.519.202-7.355.779.807 3.923 3.49 7.673-.202-1.471 1.384-1.961 2.711-1.961 3.836 0 1.933 1.5 3.346 1.875 3.664z"
      />
      <path
        fill={appTheme.colors.primary.main}
        fillRule="nonzero"
        d="M501.019 38.029l-6.721 7.846 6.721 7.875-9.144-5.798-9.144 5.798 6.721-7.875-6.721-7.846 9.144 5.769 9.144-5.769zm-24.173.029L472 35l3.548 4.154L472 43.308l4.846-3.058 4.846 3.058-3.577-4.154L481.663 35l-4.817 3.058zm28.875 10.73l-3.202-2.019 2.365 2.769-2.365 2.769 3.202-2.019 3.202 2.019-2.366-2.769 2.366-2.769-3.202 2.019zm13.298 60.241l-6.721 7.846 6.721 7.875-9.144-5.798-9.144 5.798 6.721-7.875-6.721-7.846 9.144 5.769 9.144-5.769zm-24.173.029L490 106l3.548 4.154-3.548 4.154 4.846-3.058 4.846 3.058-3.577-4.154 3.548-4.154-4.817 3.058zm28.875 10.73l-3.202-2.019 2.365 2.769-2.365 2.77 3.202-2.02 3.202 2.02-2.366-2.77 2.366-2.769-3.202 2.019zm-35.702-48.759l-6.721 7.846 6.721 7.875-9.144-5.798-9.144 5.798 6.721-7.875-6.721-7.846 9.144 5.769 9.144-5.769zm-24.173.029L459 68l3.548 4.154L459 76.308l4.846-3.058 4.846 3.058-3.577-4.154L468.663 68l-4.817 3.058zm28.875 10.73l-3.202-2.019 2.365 2.769-2.365 2.77 3.202-2.02 3.202 2.02-2.366-2.77 2.366-2.769-3.202 2.019z"
      />
      <path
        fill={appTheme.colors.secondary.main}
        fillRule="nonzero"
        d="M426.144 31c.26 17.711-14.106 18.606-18.144 18.519 4.01.346 18.144 2.683 18.115 18.404h.029c0-15.952 16.067-18.173 18.779-18.433-.26.029-.635.029-1.068.029-4.5 0-17.797-1.442-17.711-18.519zm3.837 22.182c-.606-.49-4.385-3.23-7.789.058 3.375-3.231.923-6.519.202-7.355.779.807 3.923 3.49 7.673-.202-1.471 1.384-1.961 2.711-1.961 3.836 0 1.933 1.5 3.346 1.875 3.663z"
      />
      <use
        width="448"
        height="437"
        transform="translate(48.646 75.499)"
        href="#Cyril-drawing"
      />
      <defs>
        <image
          id="Cyril-drawing"
          width="448"
          height="437"
          href="/images/Cyrilo-drawing.svg"
        />
      </defs>
    </StyledSVG>
  );
};

export default PlanetCyril;