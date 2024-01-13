import Container from "./Container";
import port1 from "../assets/ngwf.jpg";
import port4 from "../assets/weatherforcast.jpg";
import port5 from "../assets/myProjectImg.png";

const portfolioData = [
  {
    id: 1,
    title: "Nigeria Weather Forcast",
    demo: "https://magnificent-naiad-4fe599.netlify.app/",
    image: port1,
  },
  {
    id: 4,
    title: "Weather Forcast ",
    demo: "https://kencodict.netlify.app/",
    image: port4,
  },
  {
    id: 5,
    title: "E-Commerse website",
    demo: "https://sellit-nine.vercel.app",
    image: port5,
  },
];
interface SinglePortFolioprops {
  portifolioData: {
    id: number;
    title: string;
    demo: string;
    image: string;
  };
}

const SinglePortFolio = ({ portifolioData }: SinglePortFolioprops) => {
  const { id, title, demo, image } = portifolioData;
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
        <a href={""} className="btn" target="_blank">
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
