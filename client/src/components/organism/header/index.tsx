import { ButtonText } from "../../atoms/buttons";
import CustomNavLink from "../../atoms/custom-nav-link";

import "./style.scss";

const Header = () => {
  // const { isLoading, isError, data } = useQuery(["auth0"], Login(), {
  //   staleTime: 24 * 60 * 60 * 1000,
  // });
  // console.log(
  //   "🚀 ~ file: index.tsx ~ line 18 ~ const{isLoading,isError,data}=useQuery ~ data",
  //   data
  // );

  return (
    <div className="header-wrapper">
      <CustomNavLink to="/" title="HOME" />
      <CustomNavLink to="/music" title="MUSIC" />
      <CustomNavLink to="/config" title="CONFIG" />

      <div className="btn-login">
        <ButtonText title="LOGIN" />
      </div>
    </div>
  );
};

export default Header;
