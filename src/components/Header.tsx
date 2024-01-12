import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Ekene from "../assets/Vicky png2.png";

const Header = (): JSX.Element => {
  return (
    <header className="min-h-screen pt-7 md:pt-[7rem] md:overflow-hidden w-full">
      <div className="w-[90%] md:w-[86%] lg:w-[75%] text-center h-full relative flex items-center flex-col  mx-auto">
        <h5 className="text-center">Hello I am</h5>
        <h1 className="text-center">Ezeudo Victoria Chidumaga.</h1>
        <h5 className="text-light text-center">
          Frontend Developer and UI/UX Designer
        </h5>
        <CTA />
        <div className="bg-gradient-to-t from-[#4db5ff] to-transparent w-[90%] max-w-[22rem] sm:w-[22rem]  h-[30rem]  mx-auto md:mt-16 mt-4 rounded-t-full overflow-hidden md:pt-20 pt-5">
          <img src={Ekene} alt="my passport" className="w-full h-full " />
        </div>
        <a
          href="#contact"
          className="hidden md:block absolute right-[-2.3rem] bottom-20 rotate-90 font-medium text-lg"
        >
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
