import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLightbulb } from "@fortawesome/free-regular-svg-icons";

const NavItems = () => {
  const styles =
    "group relative p-2 after:absolute after:left-1 after:opacity-0 after:transition after:duration-300 after:delay-100 hover:after:opacity-100 after:uppercase after:text-[#ffd700] after:text-[10px] flex items-center justify-center";

  return (
    <>
      <NavLink
        to="/"
        className={`${styles} after:content-['Home']`}
        style={({ isActive }) => ({
          color: isActive ? "#ffd700" : "#4d4d4e",
        })}>
        <FontAwesomeIcon
          icon={faHome}
          className="w-6 h-6 group-hover:opacity-0"
        />
      </NavLink>
      <NavLink
        to="/about"
        className={`${styles} after:content-['about']`}
        style={({ isActive }) => ({
          color: isActive ? "#ffd700" : "#4d4d4e",
        })}>
        <FontAwesomeIcon
          icon={faUser}
          className="w-6 h-6 group-hover:opacity-0"
        />
      </NavLink>
      <NavLink
        to="/skills"
        className={`${styles} after:content-['skills']`}
        style={({ isActive }) => ({
          color: isActive ? "#ffd700" : "#4d4d4e",
        })}>
        <FontAwesomeIcon
          icon={faLightbulb}
          className="w-6 h-6 group-hover:opacity-0"
        />
      </NavLink>
      <NavLink
        to="/projects"
        className={`${styles} after:content-['projects']`}
        style={({ isActive }) => ({
          color: isActive ? "#ffd700" : "#4d4d4e",
        })}>
        <FontAwesomeIcon
          icon={faEye}
          className="w-6 h-6 group-hover:opacity-0"
        />
      </NavLink>
      <NavLink
        to="/contact"
        className={`${styles} after:content-['contact']`}
        style={({ isActive }) => ({
          color: isActive ? "#ffd700" : "#4d4d4e",
        })}>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-6 h-6 group-hover:opacity-0"
        />
      </NavLink>
    </>
  );
};

export default NavItems;
