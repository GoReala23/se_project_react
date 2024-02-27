import avatar from "../../public/images/Avatar.png";
import logo from "../../public/images/Logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <container className="header__container">
        <button>Add Clothes</button>
        {/* <p>{user}</p> */}
      </container>
      <img src={avatar} alt="avatar" className="header__avatar" />
    </header>
  );
}
