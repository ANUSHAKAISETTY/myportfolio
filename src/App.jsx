// src/App.jsx
import './App.css'; 
import SimpleNavbar from './components/Navbar/SimpleNavbar';
import Home from './components/Home/Home';
import About from './components/About/About'; 
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'; 
import Achievements from './components/Achievements/Achievements';
import Connect from './components/Connect/Connect'; // FINAL IMPORT

function App() {
  return (
    <div className="portfolio-app">
      <SimpleNavbar />
      
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      
      {/* Final Connect section goes here */}
      <Connect />
    </div>
  );
}

export default App;