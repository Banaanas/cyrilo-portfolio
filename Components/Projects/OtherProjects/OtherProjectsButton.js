import { useDispatch, useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import styled from "@emotion/styled";
import { MdExpandLess as ShowLessIcon, MdExpandMore as ShowMoreIcon } from "react-icons/md";
import { toggleOtherProjects } from "../../../store/slices/otherProjectsSlice";
import appTheme from "../../../styles/appTheme";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  padding: 16px 16px;
  color: ${appTheme.colors.actionButtonColor};
  font-size: ${appTheme.fontSizes.xl};
  font-family: ${appTheme.fontFamily.nexaBlack},
  ${appTheme.fontFamily.alternativeFonts};
  text-transform: uppercase;
  background-color: ${appTheme.colors.actionButtonBackground};
  border: none;
  border-radius: 4px;
  box-shadow: ${appTheme.elevation.xl};
  cursor: pointer;

  span {
    line-height: 100%; /* To Align Span and Icon */
    text-align: center;
  }

  svg {
    color: ${appTheme.colors.actionButtonIconColor};
    font-size: ${appTheme.fontSizes.xl3};
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
