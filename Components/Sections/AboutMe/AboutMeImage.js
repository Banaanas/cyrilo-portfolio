import styled from "@emotion/styled";

const StyledSVG = styled.svg`
  width: 100%;
  max-width: 20rem;
  height: auto;
  margin: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.heroBannerSection2}) {
    align-self: flex-start;
    justify-self: flex-start;
    max-width: 25rem;
    margin-right: 2rem;
  }
`;

const AboutMeImage = () => {
  return (
    <>
      <StyledSVG
        width="610"
        height="748"
        viewBox="0 0 610 748"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M470.883 101.11C519.693 150.385 558.659 202.45 581.628 261.953C604.597 321.921 610.75 388.862 609.93 461.381C609.519 533.435 601.726 611.068 559.479 640.819C517.642 670.571 441.761 653.37 376.134 673.36C310.917 693.814 255.955 752.387 211.656 747.738C167.358 743.09 133.314 675.684 111.575 614.787C90.2467 553.424 80.4027 498.57 56.6129 434.883C32.413 370.732 -6.14277 297.283 0.83009 234.061C7.39278 170.375 59.4841 116.45 118.138 72.7528C176.382 28.5905 241.189 -5.3447 302.714 0.698557C364.239 6.27695 422.073 52.2987 470.883 101.11Z"
          fill="var(--secondary-main)"
        />
        <path
          d="M455.422 318.417C481.541 397.105 474.769 488.048 417.05 536.745C359.008 585.441 250.018 591.891 192.298 545.452C134.579 499.336 127.807 400.653 156.506 318.417C184.882 236.503 248.083 171.36 309.35 172.005C370.616 172.972 429.303 239.406 455.422 318.417Z"
          fill="var(--primary-main)"
        />
        <path
          d="M455.422 318.417C481.541 397.105 474.769 488.048 417.05 536.745C359.008 585.441 250.018 591.891 192.298 545.452C134.579 499.336 127.807 400.653 156.506 318.417C184.882 236.503 248.083 171.36 309.35 172.005C370.616 172.972 429.303 239.406 455.422 318.417Z"
          fill="url(#pattern0)"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#Cyril"
              transform="translate(0.115869) scale(0.00194496 0.00158479)"
            />
          </pattern>
          <image
            id="Cyril"
            width="1425"
            height="660"
            x="-90%"
            y="2%"
            href="/images/Cyril.png"
          />
        </defs>
      </StyledSVG>
    </>
  );
};

export default AboutMeImage;
