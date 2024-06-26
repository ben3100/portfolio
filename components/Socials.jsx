import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-6">
      <a href="https://www.linkedin.com/in/ben-belaouedj/" className="text-accent" aria-label="LinkedIn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/ben3100" className="text-accent" aria-label="GitHub">
        <FaGithub size={24} />
      </a>
      <a href="https://ben-belaouedj.fr" className="text-accent" aria-label="Website">
        <FaGlobe size={24} />
      </a>
    </div>
  );
};

export default Socials;
