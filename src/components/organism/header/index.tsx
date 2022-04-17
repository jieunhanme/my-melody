import CustomNavLink from "../../atoms/custom-nav-link";

import "./style.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <CustomNavLink to="/" title="HOME" />
      <CustomNavLink to="/music" title="MUSIC" />
      <CustomNavLink to="/config" title="CONFIG" />
    </div>
  );
};

export default Header;
