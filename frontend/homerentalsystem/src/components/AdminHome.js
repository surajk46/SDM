import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ShowAllProperties from './ShowAllProperties';
import { useState } from 'react';




export default function AdminHome() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
      setIsNavbarOpen(!isNavbarOpen);
  };
  return (

    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link  className="navbar-brand">Home Rental System</Link>
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
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/getalltenants" className="nav-link">Show All Tenants</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/getallowners" className="nav-link">Show All Owners</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/getallproperties" className="nav-link">Show All Properties</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/getalltransactions" className="nav-link">Show All Transactions</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link">Log Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
      
    </div>
  );
}