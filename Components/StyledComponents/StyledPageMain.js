import { motion } from "framer-motion";
import styled from "@emotion/styled";

const StyledPageMain = styled(motion.main)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme }) => theme.globalMaxWidth};
  height: auto;
  font-weight: bold;
  text-align: justify;
  filter: ${({ isMenuOpen }) => (isMenuOpen ? "blur(20px)" : "blur(0)")};
  transition: filter, 300ms ease;
`;

export default StyledPageMain;
