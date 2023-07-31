import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import { Footer } from "./components/Footer";
import Video from "./components/Video";
import TechTeam from "./components/TechTeam";
import Founder from "./components/Founder";
import Member from "./components/Member";

// const App = () => {
//   return (
//     <>
//     <Routes>
//       <Route path="/member" element={<Member />}/>
//     </Routes>
//       <div className="relative z-40 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//           <About />

//         <Video />
//         <Experience />
//         <Works />
//         {/* <div id="members">
//         </div> */}
//         <AccordionItem />
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

const App = () => {
  const location = useLocation();
  const isMemberPage = location.pathname === "/member";

  return (
    <>
      <Routes>
        <Route path="/member" element={<Member />} />
        {/* Default route when not on /member */}
        <Route
          path="/"
          element={
            isMemberPage ? null : (
              <>
                <div className="relative z-40 bg-primary">
                  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                  </div>
                  <About />
                  <Video />
                  <Experience />
                  <Works />
                  {isMemberPage && (
                    <div id="members">
                      {/* Render other components specific to the /member route */}
                    </div>
                  )}
                  <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                  </div>
                  <div>
                    <Footer />
                  </div>
                </div>
              </>
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
