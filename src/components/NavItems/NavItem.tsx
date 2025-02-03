import React from "react";
import { NavLink } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavItemProps = {
  label: string;
  icon?: IconProp;
};

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  const styles = `group relative p-2 after:content-['${label}'] after:absolute after:left-0 after:opacity-0 after:transition after:duration-300 after:delay-100 hover:after:opacity-100 after:uppercase after:text-[#ffd700] after:text-[10px]`;

  return (
    <NavLink
      to={label === "home" ? "/" : `/${label}`}
      className={styles}
      style={({ isActive }) => ({
        color: isActive ? "#ffd700" : "#4d4d4e",
      })}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="w-6 h-6 group-hover:opacity-0"
        />
      )}
    </NavLink>
  );
};

export default NavItem;
