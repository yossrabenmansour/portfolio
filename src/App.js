import './App.css';
import Navbar from './Components/NavBar'
import Banner from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer  from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
