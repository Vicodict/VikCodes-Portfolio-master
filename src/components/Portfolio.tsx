import Container from "./Container";
import port1 from "../assets/orbitexsolarenergy_homepage.png";
import port2 from "../assets/kencodicttech_homepage.png";
import port4 from "../assets/KennySchool.png";
import port5 from "../assets/myProjectImg.png";

const portfolioData = [
  {
    id: 1,
    title: "Solar Energy Website",
    demo: "https://orbitexsolarenergy.com.ng/",
    github: "https://github.com/Ezeora-Kenechukwu/obsessed-wep",
    image: port1,
  },
  {
    id: 2,
    title: "Tech Company Website",
    demo: "https://kencodicttech.obsessed.com.ng/",
    github:"https://github.com/Ezeora-Kenechukwu/KencodictTech",
    image: port2,
  },
  {
    id: 4,
    title: "School Management System ",
    demo: "https://kennyschoolsfronter.vercel.app/",
    github:"https://github.com/Ezeora-Kenechukwu/kennyschoolsfronter",
    image: port4,
  },
  {
    id: 5,
    title: "E-Commerse website",
    demo: "https://sellit-nine.vercel.app",
    github:"",
    image: port5,
  },
];
interface SinglePortFolioprops {
  portifolioData: {
    id: number;
    title: string;
    demo: string;
    github: string;
    image: string;
  };
}

const SinglePortFolio = ({ portifolioData }: SinglePortFolioprops) => {
  const { id, title, demo, github, image } = portifolioData;
  return (
    <article
      className="portfolio_item color-bg-variant p-2 md:p-[1.3rem] rounded-3xl border-solid border border-transparent duration-500 hover:bg-transparent hover:border-[rgba(77,181,255,0.4)] h-fit"
      key={id}
    >
      <div className="portfolio_item_image rounded-3xl h-2/3">
        <img src={image} alt={title} className="rounded-3xl h-full" />
      </div>
      <h3 className="mt-5 mx-0 mb-8">{title}</h3>
      <div className="flex items-center justify-between w-4/5 mx-auto my-4">
        <a href={github} className="btn" target="_blank">
          Github
        </a>
        <a href={demo} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="">My Recent Work</h5>
      <h2>Portfolio</h2>
      <Container className="services_container grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-[50px] gap-x-[20px] gap-y-[20px]">
        {portfolioData.map((item) => (
          <SinglePortFolio portifolioData={item} />
        ))}
      </Container>
    </section>
  );
};

export default Portfolio;
