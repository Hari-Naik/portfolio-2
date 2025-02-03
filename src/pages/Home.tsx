import { Link } from "react-router-dom";
import logoH from "../assets/logoH.svg";

const Home = () => {
  const nameArray = ["H", "a", "r", "i", "n", "a", "i", "k"];
  const jobArray = "Web develoer".split("");
  return (
    <section className="w-full h-full md:px-10 flex items-center overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center md:justify-between">
        <div className="flex flex-col gap-2 absolute lg:relative z-30 lg:z-0 px-2">
          <h1 className="text-5xl text-white ">
            <span>H</span>
            <span>i,</span>
            <br />
            <span>I'</span>
            <span>m</span>
            <span> </span>
            {nameArray.map(char => (
              <span
                key={char}
                className="hover:text-[#ffd700] hover:animate-bounce transition-all duration-200 delay-300 cursor-pointer ">
                {char}
              </span>
            ))}
          </h1>
          <h2 className="text-5xl text-white mt-2">
            {jobArray.map(char => (
              <span
                key={char}
                className="hover:text-[#ffd700] hover:animate-bounce transition-all duration-200 delay-300 cursor-pointer ">
                {char}
              </span>
            ))}
          </h2>
          <p className="text-[rgba(141,141,141)] text-sm font-sans tracking-[3px]">
            Frontend Developer / React Developer
          </p>
          <Link
            to="/contact"
            className="py-2 px-6 w-max border-2 border-[#ffd700] text-sm text-[rgba(141,141,141)] md:text-[#ffd700] uppercase tracking-[3px] mt-5 hover:bg-[#ffd700] hover:text-[#181818] cursor-pointer transition duration-300">
            <span>contact me</span>
          </Link>
        </div>
        <div className="relative w-full h-screen lg:w-[60%] flex items-center justify-center">
          {/* <img
            src="/profile.png"
            // src="https://res.cloudinary.com/dgwmfee0i/image/upload/v1642781168/6882_1_jfhk6r.jpg"

            className="rounded-full object-fill"
            alt="proifle"
          /> */}
          <img
            src={logoH}
            alt="logo"
            className="object-cover w-full h-full md:rotate-12 absolute left-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
