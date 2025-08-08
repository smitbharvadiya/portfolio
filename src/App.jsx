import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Project from './pages/projects';
import TechStack from './pages/techStack';
import Contact from './pages/contactMe';
import About from './pages/aboutMe';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project />} />
        <Route path="/tech-stack" element={<TechStack/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about-me" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
