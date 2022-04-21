import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { ButtonFlat } from "../buttons";

interface CustomNavLinkProps {
  to: string;
  title: string;
}

const CustomNavLink = ({ to, title }: CustomNavLinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink to={to}>
      <ButtonFlat title={title} isActive={match ? true : false} />
    </NavLink>
  );
};

export default CustomNavLink;
