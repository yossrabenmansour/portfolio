import './App.css';
import Navbar from './Components/NavBar'
import Banner from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './Components/Skills';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Skills/>
    </div>
  );
}

export default App;
