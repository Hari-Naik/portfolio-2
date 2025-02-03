export type Project = {
  id: number;
  title: string;
  img: string;
  description: string;
  techStack: string[];
  links: {
    github: string;
    live: string;
  };
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Application 🛒",
    img: "/ecommerce-application.png",
    description:
      "A full-stack e-commerce platform designed to provide a seamless and user-friendly shopping experience. The application includes features such as user authentication, advanced product filtering and sorting, secure payment integration, and order management.",

    techStack: [
      "React.JS",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node ",
    ],
    links: {
      github: "https://github.com/Hari-Naik/E-commerce-application",
      live: "https://hari-ecommerce-application.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Linkedin 💼",
    img: "/linkedin-clone.png",
    description:
      "The LinkedIn Clone project is a web-based professional networking platform designed to replicate the core functionalities of LinkedIn. Users can create, delete, like, and comment on posts, fostering professional interactions and networking opportunities within a familiar interface.",
    techStack: ["React.JS", "Tailwind CSS"],
    links: {
      github: "https://github.com/Hari-Naik/linkedin-clone",
      live: "https://linkedin-clone-three-mu.vercel.app",
    },
  },
  {
    id: 3,
    title: "You Tube 📺",
    img: "/youtube-clone.png",
    description:
      "Implemented a YouTube clone using React.js, showcasing expertise in frontend development and user interface design. Successfully replicated core functionalities of the popular video-sharing platform, including seamless video playback, content discovery, and user interaction.",
    techStack: ["React.JS", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Hari-Naik/youtube-clone",
      live: "https://youtube-clone-two-xi.vercel.app/",
    },
  },
  {
    id: 4,
    title: "Movies App 📺",
    img: "/movies-application.png",
    description:
      "Implemented responsive OTT platform app like Netflix Clone where users can log in and can see a movies like popular, trending, top-rated, and also can search movies and view specific movie details.",
    techStack: ["React.JS", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Hari-Naik/youtube-clone",
      live: "https://youtube-clone-two-xi.vercel.app/",
    },
  },
  {
    id: 1,
    title: "E-Commerce Application 🛒",
    img: "/ecommerce-application.png",
    description:
      "A full-stack e-commerce platform designed to provide a seamless and user-friendly shopping experience. The application includes features such as user authentication, advanced product filtering and sorting, secure payment integration, and order management.",

    techStack: [
      "React.JS",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node ",
    ],
    links: {
      github: "https://github.com/Hari-Naik/E-commerce-application",
      live: "https://hari-ecommerce-application.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Linkedin 💼",
    img: "/linkedin-clone.png",
    description:
      "The LinkedIn Clone project is a web-based professional networking platform designed to replicate the core functionalities of LinkedIn. Users can create, delete, like, and comment on posts, fostering professional interactions and networking opportunities within a familiar interface.",
    techStack: ["React.JS", "Tailwind CSS"],
    links: {
      github: "https://github.com/Hari-Naik/linkedin-clone",
      live: "https://linkedin-clone-three-mu.vercel.app",
    },
  },
  {
    id: 3,
    title: "You Tube 📺",
    img: "/youtube-clone.png",
    description:
      "Implemented a YouTube clone using React.js, showcasing expertise in frontend development and user interface design. Successfully replicated core functionalities of the popular video-sharing platform, including seamless video playback, content discovery, and user interaction.",
    techStack: ["React.JS", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Hari-Naik/youtube-clone",
      live: "https://youtube-clone-two-xi.vercel.app/",
    },
  },
  {
    id: 4,
    title: "Movies App 📺",
    img: "/movies-application.png",
    description:
      "Implemented responsive OTT platform app like Netflix Clone where users can log in and can see a movies like popular, trending, top-rated, and also can search movies and view specific movie details.",
    techStack: ["React.JS", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Hari-Naik/youtube-clone",
      live: "https://youtube-clone-two-xi.vercel.app/",
    },
  },
];
