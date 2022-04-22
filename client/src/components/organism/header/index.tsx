import CustomNavLink from "../../atoms/custom-nav-link";
import AuthLogin from "../auth-login";

import "./style.scss";

interface HeaderProps {
  code: string | null;
}

const Header = ({ code }: HeaderProps) => {
  return (
    <div className="header-wrapper">
      <CustomNavLink to="/" title="HOME" />
      <CustomNavLink to="/music" title="MUSIC" />
      <CustomNavLink to="/config" title="CONFIG" />

      <AuthLogin code={code} />
    </div>
  );
};

export default Header;
