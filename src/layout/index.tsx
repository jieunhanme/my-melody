import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "../contexts";

import ThemeSwitch from "../components/molecules/theme-switch";
import Header from "../components/organism/header";

import HomePage from "../pages/home-page";
import MusicPage from "../pages/music-page";
import ConfigPage from "../pages/config-page";

import "./style.scss";

const Layout = () => {
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
