import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
// import { useState } from "react"
// import Counter from "./components/samples/Counter"
// import Heading from "./components/samples/Heading"
// import Section from "./components/samples/Section"
// import List from "./components/samples/List"
// import HooksSample from "./components/samples/HooksSample"

const App = () => {
  // const [value, setValue] = useState<number>(1)
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />








      {/* <Heading title="Hello My Good People" />
      <Section title="The Greatest Of This Is Love">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi dolore aut ex beatae quaerat fugit consequuntur ducimus inventore mollitia?
        </p>
        <Counter setValue={setValue} value={ value} />
        <List items={['coffee', "Tacos", "Code"]} render={(item:string) => <span className="text-[gold] font-bold">{item}</span>} />
        <HooksSample />
      </Section> */}

    </>
  )
}

export default App
