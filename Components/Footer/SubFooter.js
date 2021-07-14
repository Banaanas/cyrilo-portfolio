import styled from "@emotion/styled";
import { FaOm as AumIcon } from "react-icons/fa";
import ExternalLink from "../Links/ExternalLink";
import appTheme from "../../styles/appTheme";

const Container = styled.div`
  display: flex;
  height: 50%;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px 0;
  color: ${appTheme.colors.white};
  font-size: ${appTheme.fontSizes.md};

  a {
    color: ${appTheme.colors.primary.default};
    text-decoration: none;
  }

  span:nth-of-type(2) {
    margin: 0 8px;
    color: ${appTheme.colors.white};
    text-decoration: none;
  }
  span:nth-of-type(3) {
    color: ${appTheme.colors.primary.default};
    text-decoration: none;
  }
`;

const StyledAumIcon = styled(AumIcon)`
  margin: 0 4px;
  color: ${appTheme.colors.white};
  font-size: ${appTheme.fontSizes.md};
`;

const SubFooter = () => (
  <Container>
    <Span>
      <span>
        <ExternalLink
          ariaLabel="Personal Website"
          href="https://cyrilo.dev"
          title="https://cyrilo.dev"
        >
          CyrilO
        </ExternalLink>
      </span>
      <span>|</span>
      <span>Imagined with</span>
      <StyledAumIcon />
    </Span>
  </Container>
);

export default SubFooter;
