import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LogInComp from './components/LogInComp';
import HomeFunc from './components/HomeFunc';
import TenantReg from './components/TenantReg';
import ContactUs from './components/ContactUs';
import OwnerReg from './components/OwnerReg';
import AdminHome from './components/AdminHome';
import TenantHome from './components/TenantHome';
import AddProperty1 from './components/AddProperty1';
import OwnerHome from './components/OwnerHome';
import { useSelector } from 'react-redux';
import LogoutComp from './components/LogoutComp';
import ShowMyProperty from './components/ShowMyProperty';
import ShowAllTenant from './components/ShowAllTenant';
import ShowAllOwners from './components/ShowAllOwners';
import ShowAllProperties from './components/ShowAllProperties';
import OwnerInfo from './components/OwnerInfo';
import FooterComponent from './components/Footer';
import Payment from './components/Payment';
import ShowAllTransaction from './components/ShowAllTransaction';
import PropertyRequestedTenant from './components/PropertyRequestedTenant';
import { useState } from 'react';

function App() {

    const mystate = useSelector((state)=>state.logged)
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display:mystate.loggedIn?"none":"block"}}>
            <button
                className={`navbar-toggler ${isNavbarOpen ? 'collapsed' : ''}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={isNavbarOpen}
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Log In</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tenantreg" className="nav-link">Tenant Registration</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ownerreg" className="nav-link">Owner Registration</Link>
                    </li>
                </ul>
            </div>
        </nav>



        <Routes>
            <Route path='/' element={<HomeFunc/>}/>
            <Route path='/login' element={<LogInComp/>}/>
            <Route path='/tenantreg' element={<TenantReg/>}/>
            <Route path='/ownerreg' element={<OwnerReg/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>

            <Route path='/adminhome' element={<AdminHome/>}/>
            <Route path='/getalltenants' element={<ShowAllTenant/>}/>
            <Route path='/getallowners' element={<ShowAllOwners/>}/>
            <Route path='/getallproperties' element={<ShowAllProperties/>}/>
            <Route path='/getalltransactions' element={<ShowAllTransaction/>}/>



            <Route path='/tenanthome' element={<TenantHome/>}/> 
            <Route path='/ownerinfo' element={<OwnerInfo/>} /> 


            <Route path='/ownerhome' element={<OwnerHome/>}/> 
            <Route path='/addproperty' element={<AddProperty1/>}/>
            <Route path='/showmyproperty' element={<ShowMyProperty/>}/>
            <Route path='/propreq' element={<PropertyRequestedTenant/>}/>

            <Route path='/logout' element={<LogoutComp/>}/>
            <Route path='/payment' element={<Payment/>}/>
       </Routes>
       <FooterComponent/>
    </div>
  );
}


export default App;
