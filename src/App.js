import Navbar from "./Components/NavBar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Project from "./Components/proj/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
