const socialMedia = [
  {
    id: "linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/harinaik",
  },
  {
    id: "GitHub",
    icon: faGithub,
    url: "https://www.github.com/Hari-Naik",
  },
  {
    id: "Youtube",
    icon: faYoutube,
    url: "https://www.youtube.com/",
  },
];

import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = () => {
  return (
    <ul className="h-[30%] flex flex-col items-center gap-3">
      {socialMedia.map(media => (
        <li key={media.id}>
          <a href={media.url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={media.icon} color="#4d4d4e" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
