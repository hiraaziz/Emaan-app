import './App.css';
import Home from './components/Home';
import Aboutus from './components/About/aboutus/Aboutus'
import Message from './components/About/message/Message'
import Academics from './components/Academics/Academics'
import Alumni from './components/Alumni/Alumni'
import PHPwebdevelopement from './components/Certificates/PHPwebdevelopement'
import Contact from './components/Contact/Contact'
import Department from './components/Department/Department'
import Lms from './components/Lms/Lms'
import Login from './components/Login/Login'
import Qec from './components/Qec/Qec'
import Research from './components/Research/Research'
import FeeStructure from './components/Admission/feeStructure/FeeStructure';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Topheader from './components/Home/topHeader/Topheader';
import Eligibility from './components/Admission/eligibility/Eligibility';
import Scholarship from './components/Admission/scholarship/Scholarship'
import Oric from './components/Research/ORIC/Oric';
import Researchgrands from './components/Research/ORIC/Research Grands/Researchgrands ';
function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/message" element={<Message/>} />
       <Route path='/feestructure' element={<FeeStructure/>}/>
       <Route path='/eligibility' element={<Eligibility/>}/>
        <Route path="/phpwebdevelopement" element={<PHPwebdevelopement/>} />
        <Route path="/scholarship" element={<Scholarship/>} />
        <Route path="/lms" element={<Lms/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/alumni" element={<Alumni/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/oric" element={<Oric/>} />
        <Route path="/researchgrands" element={<Researchgrands/>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
