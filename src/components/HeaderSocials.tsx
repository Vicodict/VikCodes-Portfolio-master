import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="flex-col items-center gap-4 absolute left-0 bottom-12 hidden md:flex">
      <a href="https://linkedin.com" target="_blank" className="">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank" className="">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_blank" className="">
        <FaFacebook />
      </a>
      <div className="w-[1px] h-8 bg-[#4db5ff]"></div>
    </div>
  );
};

export default HeaderSocials;
