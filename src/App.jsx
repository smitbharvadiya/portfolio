import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Project from './pages/projects';
import TechStack from './pages/techStack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Project />} />
        <Route path="/tech-stack" element={<TechStack/>} />
      </Routes>
    </Router>
  );
}

export default App;
