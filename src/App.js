import './App.css';
import Navbar from './components/navigationBar/Navbar';
import Topheader from './components/topHeader/Topheader';
import Middlebar from './components/middleBar/Middlebar';
import Banner from './components/banner/Banner';
import ProgramCards from './components/programs/ProgramCards';

function App() {
  return (
    <div className="font-montserrat">
      <Topheader/>
      <Middlebar/>
      <Navbar/>
      <Banner/>
      <ProgramCards/>
    </div>
  );
}

export default App;
