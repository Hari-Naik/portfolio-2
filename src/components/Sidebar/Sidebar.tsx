import NavItems from "../NavItems/NavItems";
import SocialLinks from "../SocialLinks/SocialLinks";

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-[60px] h-screen bg-[#181818] fixed inset-0 z-10">
      <div className="h-[70%] flex flex-col gap-3 justify-center items-center">
        <NavItems />
      </div>
      <SocialLinks />
    </aside>
  );
};

export default Sidebar;
