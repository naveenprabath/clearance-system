import './App.css';
import Dashboard from './pages/Dashbord';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


import CS from './pages/CS';
import RequestAccount from './pages/RequestAccount';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccademiStaffSignup from './pages/AccademiStaffSignup';
import NonAccademiStaffSignup from './pages/NonAccademiStaffSignup';
import LoginAlertMessage from './pages/LoginAlertMessage';
import Zoo from './pages/Zoo';
import Botny from './pages/Botny';



function App() {
  return (
    <Router>
       <div>

        <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/home' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/RequestAccount' element={<RequestAccount/>}/>
        <Route path='/AccademiStaffSignup' element={<AccademiStaffSignup/>}/>
        <Route path='/NonAccademicStaffSignup' element={<NonAccademiStaffSignup/>}/>
        <Route path='/LoginAlertMessage' element={<LoginAlertMessage/>}/>
        <Route path='/CS' element={<CS/>}/>
        <Route path='/Zoo' element={<Zoo/>}></Route>
        <Route path='/Botny' element={<Botny/>}></Route>
       
        
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
