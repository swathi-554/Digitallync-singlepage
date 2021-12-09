import './App.css';
import Cards from './Pages/Cards';
import Navbar from './Pages/Navbar';
import Devcloud from './Pages/Devcloud';
import Kavnav from './Pages/Kavyanav';
import Contact from './Pages/Contact';
import Location from './Pages/Location';
import Help from './Pages/Help';
import Followus from './Pages/Followus';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <Devcloud />
      <Kavnav/>
      <Contact/>
      <Location/>
      <Help/>
      <Followus/>
    </div>
  );
}

export default App;
