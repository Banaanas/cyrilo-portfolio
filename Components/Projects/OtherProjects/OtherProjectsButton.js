import { useDispatch, useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import { MdExpandLess as ShowLessIcon, MdExpandMore as ShowMoreIcon } from "react-icons/md";
import { toggleOtherProjects } from "../../../store/slices/otherProjectsSlice";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  padding: 16px 16px;
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

  // i18n - Translation
  const { t } = useTranslation("otherProjectsSection");
  const buttonShowText = t("buttonShow");
  const buttonHideText = t("buttonHide");

  return (
    <Button onClick={handleClick} showOtherProjects={showOtherProjects}>
      <span>{showOtherProjects ? buttonHideText : buttonShowText}</span>
      {showOtherProjects ? <ShowLessIcon /> : <ShowMoreIcon />}
    </Button>
  );
};

export default OtherProjectsButton;
