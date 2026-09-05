import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, label: "GitHub", link: "https://github.com/akinbo-emmanuel" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", link: "https://linkedin.com/in/emmanuel-akinbo" },
  { icon: <FaInstagram />, label: "Instagram", link: "https://instagram.com/_emmanuelakinbo" },
  { icon: <FaTwitter />, label: "X (Twitter)", link: "https://twitter.com/_emmanuelakinbo" },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Emmanuel Akinbo on ${item.label}`}
          className={iconStyles}
        >
          <span aria-hidden="true">{item.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
