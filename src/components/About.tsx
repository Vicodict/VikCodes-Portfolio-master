import { FaAward, FaFolder, FaUsers } from "react-icons/fa";
import kenCodict from "../assets/VickyImage.png";

const data = [
  {
    id: 1,
    title: "Experience",
    desc: "3 years Working",
    icon: <FaAward className="about__icon text-[#4db5ff] mb-4 text-2xl" />,
    className: "",
  },
  {
    id: 2,
    title: "Clents",
    desc: "10+ Clients WorldWide",
    icon: <FaUsers className="about__icon text-[#4db5ff] mb-4 text-2xl" />,
    className: "",
  },
  {
    id: 3,
    title: "Projects",
    desc: "5+ Completed",
    icon: <FaFolder className="about__icon text-[#4db5ff] mb-4 text-2xl" />,
    className: "",
  },
];
const About = () => {
  return (
    <section id="about">
      <h5 className="">Get To Know</h5>
      <h2 className="">About Me</h2>
      <div className="about-cont w-[90%] md:w-[86%] lg:grid-cols-[35%,50%] grid lg:gap-[15%] lg:w-[75%] mx-auto md:grid-cols-1 md:gap-0 ">
        <div className="about__me md:w-1/2 md:mt-8 md:mx-auto md:mb-16  lg:w-full aspect-square rounded-3xl bg-gradient-to-tr from-transparent via-[#4db5ff] to-transparent grid place-items-center max-w-sm mb-10 mx-auto">
          <div className="about__me-image rounded-3xl overflow-hidden rotate-6 duration-500 hover:rotate-0 h-full w-full md:max-w-sm max-w-sm">
            <img
              src={kenCodict}
              alt="Ezeudo Victoria Passport"
              className="h-full w-full md:max-w-sm "
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
            {data.map((item) => {
              const { id, title, desc, icon, className } = item;
              return (
                <article
                  className={`about__card bg-[#2c2c6c] border-2 border-solid border-transparent rounded-2xl p-8 text-center flex items-center flex-col duration-500 hover:bg-transparent hover:border-[#2c2c6c] cursor-pointer ${className}`}
                  key={id}
                >
                  {icon}
                  <h5 className="text-[0.95rem]">{title}</h5>
                  <small className="text-[0.7rem] text-light">{desc}</small>
                </article>
              );
            })}
          </div>
          <p className="mt-[2rem] mx-0 mb-[2.6rem] text-light md:mb-6 md:mt-4 md:mx-0 text-2xl">
            I specialize in website design and development and UI/UX design
            services. My web experiences is high-performing, feature-packed and
            digitally transformative, designed to be user-friendly, fully
            functional, very secure and able to scale as your enterprise grows.
            I love designing a Unique Website that convert visitors into
            customers and Help your business grow. I love advancing in Tech and
            also working as a team.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
