import Navbar from './Components/Navpage'
import Home from './Components/Home'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css';


function App() {
  return (
    <div className="App"
    style={{
      backgroundColor: '#152238',
    }}
    >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
