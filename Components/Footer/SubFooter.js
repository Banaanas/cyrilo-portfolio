import styled from "@emotion/styled";
import { FaOm as AumIcon } from "react-icons/fa";
import ExternalLink from "../Links/ExternalLink";

const StyledContainer = styled.div`
  display: flex;
  height: 50%;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0;
  color: var(--default-white);
  font-size: ${({ theme }) => theme.fontSizes.md};

  a {
    color: var(--primary-main);
    text-decoration: none;
  }

  span:nth-of-type(2) {
    margin: 0 0.5rem;
    color: var(--default-white);
    text-decoration: none;
  }
  span:nth-of-type(3) {
    color: var(--primary-main);
    text-decoration: none;
  }
`;

const StyledAumIcon = styled(AumIcon)`
  margin: 0 0.5rem;
  color: var(--default-white);
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
const SubFooter = () => (
  <StyledContainer>
    <StyledSpan>
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
    </StyledSpan>
  </StyledContainer>
);

export default SubFooter;
