
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import { Feature } from "./components/features/Feature";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = ({ title, des }) => {
  return (
    <>
      <div className="w-full h-auto bg-blue-900 text-white pl-4 pr-8">
        <div className="max-w-screen-xl mx-auto ">
          <Navbar />
          <Banner />
          <Feature />
          <Projects />
          <Resume />
          <Contact />

        </div>

      </div>
      <div className=" text-white"> <Footer /></div>

    </>
  )
}
export default App