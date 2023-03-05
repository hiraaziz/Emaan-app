import './App.css';
import Navbar from './components/navigationBar/Navbar';
import Topheader from './components/topHeader/Topheader';
import Middlebar from './components/middleBar/Middlebar';
import Banner from './components/banner/Banner';
import Vision from './components/vision/Vision';
import Programs from './components/programs/Programs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="font-poppins">
      <Topheader/>
      <Middlebar/>
      <Navbar/>
      <Banner/>
      <Vision/>
      <Programs/>
      <Footer/>
    </div>
  );
}

export default App;
