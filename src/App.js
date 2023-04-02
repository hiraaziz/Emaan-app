import './App.css';
import Home from './components/Home';
import Aboutus from './components/About/aboutus/Aboutus'
import Message from './components/About/message/Message'
import Rector from './components/About/Rector/Rector'

import Academics from './components/Academics/Academics'
import Alumni from './components/Alumni/AlumniTop/Alumni'
import MobileAppdevelopement from './components/Certificates/MobileAppdevelopement'
import Pythoncourse from './components/Certificates/Pythoncourse'
import Blockchain from './components/Certificates/Blockchain'
import PenetrationTesting from './components/Certificates/PenetrationTesting'
import EthicalHacking from './components/Certificates/EthicalHacking'
import NetDevelopment from './components/Certificates/NetDevelopment'


import Contact from './components/Contact/Contact'
import Lms from './components/Lms/Lms'

import Qec from './components/Qec/Qec'
import FinalMsg from './components/Qec/FinalMsg'

import Research from './components/Research/Research'
import FeeStructure from './components/Admission/feeStructure/FeeStructure';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Topheader from './components/Home/topHeader/Topheader';
import Eligibility from './components/Admission/eligibility/Eligibility';
import Scholarship from './components/Admission/scholarship/Scholarship'
import Oric from './components/Research/ORIC/Oric';
// import Researchgrands from './components/Research/ORIC/Research Grands/Researchgrands ';
import Researchgrands1 from './components/Research/ORIC/Research Grands/Researchgrands1';
import Researchgrands2 from './components/Research/ORIC/Research Grands/Researchgrands2';
import Researchgrands3 from './components/Research/ORIC/Research Grands/Researchgrands3';
import Researchgrands4 from './components/Research/ORIC/Research Grands/Researchgrands4';
import AdmissionPolicy from './components/Admission/admissionpolicy/AdmissionPolicy';
import Mba from './components/Department/masterbusinessadministration/Mba';
function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
      <Routes>
      <Route path="/mba" element={<Mba/>}/>
        <Route path="/" element={<Home/>} />

              {/* About us */}
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/rectormessages" element={<Rector/>} />

              {/* QEC */}
        <Route path="/intro" element={<Qec/>} />
        <Route path="/finalmessage" element={<FinalMsg/>} />
      
              {/* Admissions */}
       <Route path='/feestructure' element={<FeeStructure/>}/>
       <Route path='/eligibility' element={<Eligibility/>}/>
       <Route path="/scholarship" element={<Scholarship/>} />
       <Route path= '/admissionpolicy' element={<AdmissionPolicy/>}/>

              {/* Lms */}
        <Route path="/lms" element={<Lms/>} />

               {/* Cetificate Courses */}
        <Route path="/mobileappdevelopement" element={<MobileAppdevelopement/>} />
        <Route path="/pythoncourse" element={<Pythoncourse/>} />
        <Route path="/blockchain" element={<Blockchain/>} />
        <Route path="/penetrationtesting" element={<PenetrationTesting/>} />
        <Route path="/ethicalhacking" element={<EthicalHacking/>} />
        <Route path="/netdevelopement" element={<NetDevelopment/>} />

               {/* Alumni */}
        <Route path="/alumni" element={<Alumni/>} />

               {/* Contact */}
        <Route path="/contact" element={<Contact/>} />

               {/* Research */}
        <Route path="/oric" element={<Oric/>} />
        <Route path="/researchgrands1" element={<Researchgrands1/>}/>
        <Route path="/researchgrands2" element={<Researchgrands2/>}/>
        <Route path="/researchgrands3" element={<Researchgrands3/>}/>
        <Route path="/researchgrands4" element={<Researchgrands4/>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
