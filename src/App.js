import './App.css';
import Navbar from './Components/NavBar'
import Banner from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './Components/Skills';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;
