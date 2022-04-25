import scope from "../../../consts/authorization-scope";

import { ButtonText } from "../../atoms/buttons";
import CustomNavLink from "../../atoms/custom-nav-link";

import "./style.scss";

const custom_scope = [
  scope.users.userReadEmail,
  scope.users.userReadPrivate,
  scope.library.userLibraryRead,
  scope.library.userLibraryModify,
  scope.playback.streaming,
  scope.connect.userReadPlaybackState,
  scope.connect.userModifyPlaybackState,
];

const AUTH_URL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${
  process.env.REACT_APP_CLIENT_ID
}&scope=${encodeURI(custom_scope.join(" "))}&redirect_uri=${
  process.env.REACT_APP_REDIRECT_URI
}`;
interface HeaderProps {
  isLogin: boolean;
  onClickLogout: () => void;
}

const Header = ({ isLogin, onClickLogout }: HeaderProps) => {
  return (
    <div className="header-wrapper">
      <CustomNavLink to="/" title="HOME" />
      <CustomNavLink to="/music" title="MUSIC" />
      <CustomNavLink to="/config" title="CONFIG" />

      <div className="btn-login">
        {isLogin ? (
          <ButtonText title="LOGOUT" onClick={onClickLogout} />
        ) : (
          <a href={AUTH_URL}>
            <ButtonText title="LOGIN" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
