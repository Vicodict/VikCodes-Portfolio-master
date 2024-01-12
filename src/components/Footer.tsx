import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const links = [
  {
    id: 1,
    href: "#",
    title: "Home",
  },
  {
    id: 2,
    href: "#about",
    title: "About",
  },
  {
    id: 3,
    href: "#experiences",
    title: "Experiences",
  },
  {
    id: 4,
    href: "#services",
    title: "Services",
  },
  {
    id: 5,
    href: "#portfolio",
    title: "Portfolio",
  },
  {
    id: 6,
    href: "#testimonials",
    title: "Testimonials",
  },
  {
    id: 7,
    href: "#contact",
    title: "Contact",
  },
];
const linkIcons = [
  {
    id: 1,
    href: "https://facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    href: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 1,
    href: "https://twitter.com",
    icon: <FaTwitter />,
  },
];
const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#4db5ff] py-[3rem] px-0 mt-[20rem] md:mt-[5rem] text-[0.9rem] text-center"
    >
      <a href="#" className="text-white text-[2rem] font-black inline-block">
        VIK<span className="text-red-700">CODES</span>
      </a>
      <ul className="flex flex-wrap justify-center gap-2 mt-0 mx-auto mb-10 flex-col sm:flex-row sm:gap-4">
        {links.map(({ id, href, title }) => (
          <li className="text-[]" key={id}>
            <a href={href} className="text-[#1f1f38]">
              {title}
            </a>
          </li>
        ))}
      </ul>
      <div className="footer_social flex justify-center gap-4 mb-16">
        {linkIcons.map(({ id, href, icon }) => (
          <a
            href={href}
            className="text-white color-bg p-2 rounded-md border border-solid border-transparent hover:border-[#1f1f38] hover:bg-transparent duration-500 "
            key={id}
          >
            {icon}{" "}
          </a>
        ))}
      </div>
      <div className="footer_copywrite mb-16 text-[#1f1f38]">
        <small className="">
          &copy; VIKCODES {new Date().getFullYear()}. All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
