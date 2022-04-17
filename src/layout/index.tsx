import "./style.scss";

import { ThemeProvider } from "../contexts";

import ThemeSwitch from "../components/molecules/theme-switch";
import Header from "../components/organism/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <ThemeSwitch />
      <Header />

      <div className="myClass">{children}</div>
    </ThemeProvider>
  );
};

export default Layout;
