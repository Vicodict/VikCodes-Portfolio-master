import { BsPatchCheckFill } from "react-icons/bs";
import Container from "./Container";
import { frontendData, graphics } from "./experienceData";

interface ExperiencePropTypes {
  title: string;
  className?: string;
  experiences: {
    id: number;
    title: string;
    icon: JSX.Element;
    rating: number;
    level: string;
  }[];
}
interface SingleExperienceProps {
  singleExperience: {
    id: number;
    title: string;
    icon: JSX.Element;
    rating: number;
    level: string;
  };
}
const SingleExperience = ({
  singleExperience: { id, title, rating, level },
}: SingleExperienceProps) => {
  return (
    <article className="flex gap-x-4 shadow-md shadow-[#4db5ff] px-2" key={id}>
      <BsPatchCheckFill className="mt-2 text-[#4db5ff]" />
      <div className="">
        <h4 className="">{title}</h4>
        <small className="text-light">{level}</small>
        <div className="relative w-2/3">
          <p className="w-full border-2 rounded-full h-2 mb-3"></p>
          <p
            className={`top-0 left-0 border-2 bg-[#4db5ff] rounded-full h-2 mb-3 absolute z-index-10 ${
              rating == 5
                ? "w-full"
                : rating >= 4 && rating < 5
                ? "w-[80%]"
                : rating >= 3 && rating < 4
                ? "w-[60%]"
                : rating >= 2 && rating < 3
                ? "w-[40%]"
                : "w-[20%]"
            }`}
          ></p>
        </div>
      </div>
    </article>
  );
};
const ExperienceBox = ({
  title,
  className,
  experiences,
}: ExperiencePropTypes) => {
  return (
    <div
      className={`bg-[#2c2c6c] py-8 px-2 md:px-8 rounded-md border-2 border-solid border-transparent hover:bg-transparent cursor-pointer hover:border-[rgba(77,181,255,0.4)] duration-500 ${className}`}
    >
      <h3 className="text-center mb-8 text-[#4db5ff]">{title}</h3>
      <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-5">
        {experiences.map((experience) => (
          <SingleExperience singleExperience={experience} />
        ))}
      </div>
    </div>
  );
};
const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center">
      <h5 className="">The Skills I Have</h5>
      <h2>My Experience</h2>
      <Container className="experience__container grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] md:gap-[50px] gap-x-0 md:gay-x-[20px] gap-y-[20px] ">
        <ExperienceBox
          title="Web Design & Development"
          experiences={frontendData}
          className=""
        />
        <ExperienceBox
          title="Designs & Others"
          experiences={graphics}
          className=""
        />
      </Container>
    </section>
  );
};

export default Experience;
