import Container from "./Container"
import { BiCheck } from "react-icons/bi";
import { servicesData } from "./ServicesData";

interface SingleServiceProps {
service: {
  id: number;
  title: string;
  serviceLists: string[];
}
}
interface ServiceListProps {
  list: string;
}
const ServiceList = ({list}:ServiceListProps) => {
  return (
    <li className="flex items-center gap-4 mb-3">
    <BiCheck className="service_list_icon text-[#4db5ff]" />
    <p className="text-[0.9rem]">{list}</p>
  </li>
  )
}
const SingleService = ({service:{id, title, serviceLists}}:SingleServiceProps) => {
  return (
    <article className="service bg-[#2c2c6c] rounded-b-[2rem] h-fit duration-500 border-solid border-2 border-[#4db5ff] hover:bg-transparent hover:border-[rgba(77,181,255,0.4)] cursor-pointer" key={id} >
    <div className="service_head bg-[#4db5ff] rounded-b-[2rem] p-8 shadow-md shadow-{rgba(0,0,0,0.1)}">
      <h3 className="text-4 text-center text-[#1f1f38]">{title}</h3>
    </div>
    <ul className="service_list p-8">
        {
          serviceLists.map(list => <ServiceList list={list} />)
        }
      </ul>
  </article>
  )
}


const Services = () => {
  return (
    <section id="services">
      <h5 className="">What I Offer</h5>
      <h2 className="">Services</h2>
     <Container className="services_container grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-[50px] gap-x-[20px] gap-y-[20px]">
     {
      servicesData.map(service => (
        <SingleService service={service}/>
      ))
     }
     </Container>
    </section>
  )
}

export default Services