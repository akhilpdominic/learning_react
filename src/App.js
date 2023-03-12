
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/aboutMe';
import Contact from './components/contact'
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
