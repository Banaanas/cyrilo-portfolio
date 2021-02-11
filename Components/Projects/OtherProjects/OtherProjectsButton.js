import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  MdExpandMore as ShowMoreIcon,
  MdExpandLess as ShowLessIcon,
} from "react-icons/md";
import { toggleOtherProjects } from "../../../store/slices/otherProjectsSlice";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  padding: 1rem 1rem;
  color: var(--action-button-color);
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: "Nexa Black", sans-serif;
  text-transform: uppercase;
  background-color: var(--action-button-background);
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;

  span {
    line-height: 100%; /* To Align Span and Icon */
    text-align: center;
  }

  svg {
    color: var(--action-button-icon-color);
    font-size: ${({ theme }) => theme.fontSizes.xl3};
  }
`;

const OtherProjectsButton = () => {
  // OTHER PROJECTS - REDUX STATE
  const showOtherProjects = useSelector(
    (state) => state.otherProjects.showOtherProjects,
  );

  // USEDISPATCH - REDUX STATE
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleOtherProjects());
  };
  return (
    <StyledButton onClick={handleClick} showOtherProjects={showOtherProjects}>
      <span>{showOtherProjects ? "Hide Projects" : "Other Projects"}</span>
      {showOtherProjects ? <ShowLessIcon /> : <ShowMoreIcon />}
    </StyledButton>
  );
};

export default OtherProjectsButton;
