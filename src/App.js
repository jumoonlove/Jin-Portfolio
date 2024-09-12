import HomeHeader from "./components/HomeHeader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
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
