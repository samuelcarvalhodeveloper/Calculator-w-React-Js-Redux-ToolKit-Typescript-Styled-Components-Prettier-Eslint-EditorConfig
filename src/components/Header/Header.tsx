import MainStyled from "./Styled";
import logo from "../../assets/imgs/icon.svg";

function Header() {
  return (
    <MainStyled>
      <div className="header__center">
        <img
          src={logo}
          alt=""
          className="header__logo"
        />
      </div>
    </MainStyled>
  );
}

export default Header;
