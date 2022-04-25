import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "../contexts";

import ThemeSwitch from "../components/molecules/theme-switch";
import Header from "../components/organism/header";

import HomePage from "../pages/home-page";
import MusicPage from "../pages/music-page";
import ConfigPage from "../pages/config-page";

import "./style.scss";

const code = new URLSearchParams(window.location.search).get("code");

const Layout = () => {
  const [accessToken, setAccessToken] = useState<string | null>();
  const [refreshToken, setRefreshToken] = useState<string | null>();
  const [expiresIn, setExpiresIn] = useState<number | null>();

  useEffect(() => {
    if (!code) return;
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`,
        {
          headers: {
            Authorization:
              "Basic " +
              btoa(
                process.env.REACT_APP_CLIENT_ID +
                  ":" +
                  process.env.REACT_APP_CLIENT_SECRET
              ),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
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
  }, []);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    // NOTE 토큰 만료 1분전에 refresh token 진행
    const timeout = setTimeout(() => {
      axios
        .post(
          "https://accounts.spotify.com/api/token",
          `grant_type=refresh_token&refresh_token=${refreshToken}`,
          {
            headers: {
              Authorization:
                "Basic " +
                btoa(
                  process.env.REACT_APP_CLIENT_ID +
                    ":" +
                    process.env.REACT_APP_CLIENT_SECRET
                ),
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then(({ data }) => {
          setAccessToken(data.access_token);
          setExpiresIn(data.expires_in);

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.access_token}`;

          window.history.pushState({}, "", "/");
        })
        .catch(() => (window.location.href = "/"));
    }, (expiresIn - 60) * 1000);

    return () => clearTimeout(timeout);
  }, [expiresIn, refreshToken]);

  const onClickLogout = useCallback(() => {
    setAccessToken(null);
    setRefreshToken(null);
    setExpiresIn(null);
    // NOTE 토큰 값 제거
    delete axios.defaults.headers.common["Authorization"];
  }, []);

  return (
    <ThemeProvider>
      <ThemeSwitch />
      <Header
        isLogin={accessToken ? true : false}
        onClickLogout={onClickLogout}
      />
      <div className="myClass">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/config" element={<ConfigPage />} />
          <Route path="*" element={<div>WRONG PAGE</div>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
