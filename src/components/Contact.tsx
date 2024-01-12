import {
  FaEnvelopeSquare,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";
import Container from "./Container";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
const contactData = [
  {
    id: 1,
    icon: <FaEnvelopeSquare className="text-6 mb-2" size={30} />,
    title: "Email",
    value: "chidumagavictoria@gmail.com",
    link: "mailto:chidumagavictoria@gmail.com",
  },
  {
    id: 2,
    icon: <FaFacebookMessenger className="text-5 mb-2" size={30} />,
    title: "Messenger",
    value: "Victoria Chidumaga",
    link: "https://m.me/Victoria Chidumaga",
  },
  {
    id: 3,
    icon: <FaWhatsapp size={30} />,
    title: "Whatsapp",
    value: "+2349075861155",
    link: "https://api.whatsapp.com/send?phone+2349075861155",
  },
];

// interface ExampleProps {
//   buttonRef: Ref<HTMLFormElement>
// }

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [data, setData] = useState<string>("");
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setData("");
      }, 1000);
    }
  }, [data]);

  const handleChange = (e: React.SyntheticEvent): void => {
    const { target } = e;
    const targ = target as HTMLInputElement;
    setFormValue({ ...formValue, [targ.name]: targ.value });
  };
  const sendEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // function getFormData(object:{name:string, email:string, message:string}) {
    //   const formData = new FormData();
    //    formData.append('name', object['name']);
    //    formData.append('email', object['email']);
    //    formData.append('message', object['message']);
    //   return formData;
    // }
    try {
      const result = await emailjs.sendForm(
        "service_o1u3tia",
        "template_ppf2kkf",
        e.currentTarget.outerHTML,
        "CjdVA5-nx01odesRO"
      );

      console.log(result.text);
      setData(result.text);
      const { target } = e;
      const tarrrr = target as HTMLFormElement;
      tarrrr.reset();
    } catch (error) {
      setData(String(error));
      console.log(error);
    }
  };

  return (
    <section id="contact" className="max-h-fit mb-4">
      <h5 className="">Get in Touch</h5>
      <h2 className="">Contact Me</h2>
      <Container className="contact_container w-[58%] grid grid-cols-1 lg:grid-cols-[30%,58%] gap-[12%] min-h-screen lg:min-h-fit mb-100px">
        <div className="contact_options flex flex-col gap-[1.2rem]">
          {contactData.map(({ id, icon, title, value, link }) => (
            <article
              className="contact_option color-bg-variant p-[1.2rem] rounded-2xl text-center flex flex-col items-center border-transparent border border-solid hover:border-[#4db5ff] hover:bg-transparent duration-500"
              key={id}
            >
              {icon}
              <h4 className="">{title}</h4>
              <h5 className="">{value}</h5>
              <a href={link} className="block mt-3 text-4" target="_blank">
                Send a Message
              </a>
            </article>
          ))}
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 h-fit"
        >
          {data && (
            <p className="text-center text-white font-bolder text-2xl">
              {data}
            </p>
          )}
          <input
            type="text"
            className="w-full p-6 rounded-md bg-transparent border-2 border-solid border-[rgba(77,181,255,0.4)] resize-none color-white"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-full p-6 rounded-md bg-transparent border-2 border-solid border-[rgba(77,181,255,0.4)] resize-none color-white"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            className="w-full p-6 rounded-md bg-transparent border-2 border-solid border-[rgba(77,181,255,0.4)] resize-none color-white"
            id="message"
            rows={7}
            placeholder="Your Message"
            required
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn btn-primary" id="submit">
            Send Message
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
