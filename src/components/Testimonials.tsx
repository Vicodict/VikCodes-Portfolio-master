import p1 from "../assets/avatar.jpg";
// import p2 from "../assets/avatar.jpg";
import p3 from "../assets/avatar.jpg";
import p4 from "../assets/peace.jpg";
// import p5 from "../assets/avatar.jpg";
import p6 from "../assets/onyinye.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TestimonialData = [
  {
    id: 1,
    image: p1,
    Name: "The CEO Kencodict Tech",
    review:
      "The experience working with Ezeudo Victoria Chidumaga has been fantastic. Se always want to ensure she give plenty of value to any customer that she works with, and in that regard she really excels. I enjoyed working with a really responsive team, and when I threw curve balls or suggested unique functionality, she quickly went to work to make it a reality.",
  },

  {
    id: 3,
    image: p3,
    Name: "Ebube",
    review:
      "Very helpful when building my website, I now have my ecommerce store built from scratch",
  },
  {
    id: 4,
    image: p4,
    Name: "Peace Iwuji",
    review:
      "Without doubt one of the most passionate and talented programmers out there.  I always go back to Ezeudo Victoria when I'm out of my depth and she's never failed to deliver what I ask for.   Smart, trustworthy and professional.   You won't be disappointed.",
  },

  {
    id: 6,
    image: p6,
    Name: "Onyebuchi Onyinyechi Peace",
    review:
      "Fantastic service and great lady. she works with passion and is always eager to advance in her learning",
  },
];

// interface SingleTestimonialProps {
//    item: {
//     id: number;
//     image: string;
//     Name: string;
//     review: string;
//    }
// }

const Testimonials = () => {
  return (
    <div id="testimonials" className="max-h-fit mb-10 mt-[8rem]">
      <h5 className="text-center text-[rgba(255,255,255, 0.6)]">
        Reviews From Clients
      </h5>
      <h2 className="text-center text-[#4db5ff] mb-[3rem]">Testimonials</h2>
      <Carousel className=" mx-auto w-[70%] sm:w-[60%] lg:w-[40%]">
        {TestimonialData.map(({ id, image, Name, review }) => (
          <div
            className="testimonial color-bg-variant text-center p-8 rounded-3xl select-none pb-16"
            key={id}
          >
            <div className="client_avatar w-16 aspect-square overflow-hidden rounded-full mt-0 mx-auto mb-4 border-[0.4rem] border-solid border-[rgba(77,181,255,0.4)] ">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="">{Name}</h5>
            <small className="client_review .color-light font-medium block mt-[0.8rem] mx-auto mb-0">
              {review}
            </small>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
