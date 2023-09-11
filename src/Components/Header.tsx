import Navlist from "./Navlist";

const Header = () => {
  const navList = ["Home", "About", "Contact", "Others"];

  return (
    <div>
      <nav className="navigation">
        <div className="logo">
          <li>Elohim Community Church</li>
        </div>
        <ul className="nav-items">
          {navList.map((item, index) => (
            <Navlist key={index} text = {item}/>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
