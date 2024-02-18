import { BsTwitter } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMobile = () => {
  return (
    <div className="social__mobile">
      <a
        href="https://twitter.com/lexiz_uchenna_"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>

      <a
        href="https://linkedin.com/in/lexizuchenna"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/lexizuchenna"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialMobile;
