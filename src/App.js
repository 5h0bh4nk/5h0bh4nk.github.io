import Navbar from './Components/Navpage'
import Home from './Components/Home'
// import { fab } from '@fortawesome/free-brands-svg-icons'

import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      {/*
      <About />
      <Contact /> */}
    </div>
  );
}

export default App;
