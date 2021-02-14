import NextLink from "next/link";
import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import { TiHome as HomeIcon } from "react-icons/ti";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledLink from "../Components/StyledComponents/StyledLink";
import StyledSection from "../Components/StyledComponents/StyledSection";

const StyledH1 = styled.h1`
  margin-bottom: 5rem; /* Margin between H1 and Link */
  color: var(--404-h1-color);
  font-size: ${({ theme }) => theme.fontSizes.xl4};
  font-family: "Nexa Black", sans-serif;
  text-align: center;
  text-transform: uppercase;
  text-wrap: normal;

  #r-letter {
    display: inline-flex;
    color: var(--404-r-letter);
    transform: scaleX(-1);
  }

  @media (min-width: 360px) {
    font-size: ${({ theme }) => theme.fontSizes.xl5};
  }
  @media (min-width: 448px) {
    font-size: ${({ theme }) => theme.fontSizes.xl6};
  }
`;

const Custom404 = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  // i18n - Translation
  const { t } = useTranslation("404");
  const textLink = t("textLink");

  return (
    <StyledPageMain isMenuOpen={isMenuOpen}>
      <StyledSection>
        <StyledH1>
          404 - Er<span id="r-letter">r</span>or
        </StyledH1>
        <NextLink href="/" passHref>
          <StyledLink>
            <span>{textLink}</span>
            <HomeIcon />
          </StyledLink>
        </NextLink>
      </StyledSection>
    </StyledPageMain>
  );
};

export default Custom404;
