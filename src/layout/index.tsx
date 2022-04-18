import { Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";

import { ThemeProvider } from "../contexts";
import { CLIENT_ID, CLIENT_SECRET } from "../consts";
import { getToken } from "../services";

import ThemeSwitch from "../components/molecules/theme-switch";
import Header from "../components/organism/header";

import HomePage from "../pages/home-page";
import MusicPage from "../pages/music-page";
import ConfigPage from "../pages/config-page";

import "./style.scss";

const Layout = () => {
  // NOTE get token data
  const { status } = useQuery(
    ["auth"],
    getToken({ CLIENT_ID, CLIENT_SECRET }),
    { staleTime: 3600000 }
  );

  // TODO 토큰을 못ㅏ져올 경우
  if (status === "loading") return <div>LOADING...AUTH</div>;
  if (status === "error") return <div>ERROR :( AUTH</div>;

  return (
    <ThemeProvider>
      <ThemeSwitch />
      <Header />
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
