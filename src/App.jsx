import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";
import { Footer } from "./components/Footer";
import AccordionItem from "./components/Accordion";
import Video from "./components/Video";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-40 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Video/>
        <Experience />
        <Works />
        <div id="members">
        <Feedbacks />
        </div>
        <AccordionItem/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
