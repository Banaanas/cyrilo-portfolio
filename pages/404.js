import { useSelector } from "react-redux";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";

const Custom404 = () => {
  // SIDE MENU - REDUX STATE
  const isMenuOpen = useSelector((state) => state.sideMenu.isMenuOpen);

  return (
    <StyledPageMain isMenuOpen={isMenuOpen}>
      <h1>404</h1>
    </StyledPageMain>
  );
};

export default Custom404;
