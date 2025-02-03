import { useState } from "react";
import Logo from "../Logo";
import NavItems from "../NavItems/NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <>
      <header className="w-full h-[50px] bg-[#181818] sticky top-0 z-50 p-2 md:hidden flex justify-between items-center">
        <Logo />
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleShowMenu}
          className="text-white hover:text-[#ffd700] text-[30px] cursor-pointer"
        />
      </header>
      {/* <NavItems showMenu={showMenu} /> */}
      <nav
        className={`w-full h-max bg-[#181818] absolute top-[49px] md:hidden z-40
       ${
         showMenu ? "left-0 " : "-left-full"
       } transition-all duration-500 delay-300 px-2 py-3 flex items-center justify-between md:flex-col md:justify-normal md:gap-3`}>
        <NavItems />
      </nav>
    </>
  );
};

export default Header;
