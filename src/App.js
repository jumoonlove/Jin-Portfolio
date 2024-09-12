import HomeHeader from "./components/HomeHeader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1600,
      delay: 100,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
