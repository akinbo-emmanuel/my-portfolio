import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/akinbo-emmanuel" },
  { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/emmanuel-akinbo" },
  { icon: <FaInstagram />, link: "https://instagram.com/_emmanuelakinbo" },
  { icon: <FaTwitter />, link: "https://twitter.com/_emmanuelakinbo" },
];

interface SocialsProps {
  containerStyles: any;
  iconStyles: any;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target="_blank"
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
