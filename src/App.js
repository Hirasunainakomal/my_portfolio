import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
//import Projects from "./containers/project";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      {/* particles js */}

      

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        {/*<Route path="/project" element={<Projects />} />*/}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;