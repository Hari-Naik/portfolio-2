const Skills = () => {
  const headingStyles = "hover:text-white transition duration-200";

  return (
    <section className="w-full h-full md:h-full md:flex md:items-center p-10 md:p-20 gap-4">
      <div className="w-full h-max flex flex-col gap-4 md:w-[60%] lg:w-[40%] md:justify-center">
        <h1 className="text-5xl text-[#ffd700] font-semibold flex flex-wrap gap-2 cursor-pointer">
          <span className={headingStyles}>Skills</span>
          <span className={headingStyles}>&</span>
          <span className={headingStyles}>Experince</span>
        </h1>
        <p className="text-white text-sm mt-5">
          Expert in front-end development including technologies like
          <span className="text-[#ffd700] font-semibold"> HTML5</span>,
          <span className="text-[#ffd700] font-semibold"> CSS3</span>,
          <span className="text-[#ffd700] font-semibold"> JavaScript</span>,
          <span className="text-[#ffd700] font-semibold"> React</span>,
          <span className="text-[#ffd700] font-semibold"> TypeScript</span>,
          etc.
        </p>
        <p className="text-white text-sm">
          I’m not a designer but I have a good sense of aesthetics, and
          experience in responsive, mobile-first web design. I put special
          effort into optimizing my code and providing the best user experience.
          I would love to give you any kind of support also after the project's
          completion. I guarantee a commitment during work on your project.
        </p>
        <p className="text-white text-sm">
          Visit my
          <a
            href="https://www.linkedin.com/in/harinaik"
            target="_blank"
            rel="noreferrer"
            className="text-[#ffd700] font-semibold underline mx-1">
            Linkedin
          </a>
          profile for more details. Also you can checkout my cv on this
          <a
            href="https://drive.google.com/file/d/1nEWXFEnAzEyh0OSKm9lVRwX1s2vixE-j/view"
            target="_blank"
            rel="noreferrer"
            className="text-[#ffd700] font-semibold underline mx-1">
            link
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Skills;
