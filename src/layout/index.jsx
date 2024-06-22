import React from "react";
import Home from "../pages/Home";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
        <Home />
      {/*<section
        id="about"
        className="h-screen bg-[url('/src/assets/backgrounds/bgHero.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <h2>About</h2>
   
      </section>

      <section id="projects" className=" h-screen bg-[#BBE9FF]">
        <h2>Projects</h2>
     
      </section>

      <section id="testimonials" className=" h-screen bg-[#B1AFFF]">
        <h2>Testimonials</h2>
        
      </section> */}
      <Footer />
    </div>
  );
};

export default Layout;
