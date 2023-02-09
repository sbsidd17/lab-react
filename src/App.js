import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import tsParticlesConfig from "./helper/tsParticlesConfig";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const location = useLocation();
  // console.log(location.pathname);
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <>
      {/* Particles Js */}
      {location.pathname === "/" ? (
        <Particles
          id="particles"
          options={tsParticlesConfig}
          init={particlesInit}
        />
      ) : (
        <div></div>
      )}

      {/* Navbar Component */}
      <div className="app-navbar-wrapper">
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="app-main-content-wrapper">
        {/* Theme Switcher */}
        <ThemeSwitcher />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
