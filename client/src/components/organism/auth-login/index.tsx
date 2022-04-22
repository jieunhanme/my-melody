import { ButtonText } from "../../atoms/buttons";
import scope from "../../../consts/authorization-scope";
import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";

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

interface AuthLoginProps {
  code: string | null;
}

const AuthLogin = ({ code }: AuthLoginProps) => {
  console.log("🚀 ~ file: index.tsx ~ line 28 ~ AuthLogin ~ code", code);
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    if (!code) return;
    axios
      .post("/api/login", { code })
      .then(({ data }) => {
        setAccessToken(data.access_token);
        setRefreshToken(data.refresh_token);
        setExpiresIn(data.expires_in);

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.access_token}`;
        window.history.pushState({}, "", "/");
      })
      .catch(() => (window.location.href = "/"));
  }, [code]);

  return (
    <div className="btn-login">
      {accessToken ? (
        <ButtonText title="LOGOUT" />
      ) : (
        <a href={AUTH_URL}>
          <ButtonText title="LOGIN" />
        </a>
      )}
    </div>
  );
};
export default AuthLogin;
