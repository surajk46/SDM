

import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { useEffect, useReducer, useState } from "react"


export default function ShowAllTenant() {
    const[tenant,setTenant]=useState();

    useEffect(() => {
        const firstURL = 'http://localhost:9000/getalltenants';
        const secondURL = 'http://51.20.34.217:8080/getalltenants';
    
        fetch(firstURL)
          .then(response => {
            if (!response.ok) {
              throw new Error('First URL request failed');
            }
            return response.json();
          })
          .then(data => {
            setTenant(data);
          })
          .catch(firstURLError => {
            console.error('Error fetching from the first URL:', firstURLError);
    
            // If there was an error with the first URL, try fetching from the second URL
            fetch(secondURL)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Second URL request failed');
                }
                return response.json();
              })
              .then(data => {
                setTenant(data);
              })
              .catch(secondURLError => {
                console.error('Error fetching from the second URL:', secondURLError);
              });
          });
      }, []);

    
  
     const deleteTenant =(id) =>
    {
       fetch("http://51.20.34.217:8080/deletetenant/"+id,{method : "DELETE"})
       .then(resp => {
           if(resp.ok)
           { 
               console.log(resp)
               return resp.text();
           }
         else
           {
              console.log("server error")
             throw  new Error("server error")  
           }
         })
         .then(text => text.length ? JSON.parse(text):{})
       .then(obj => {
               if(Object.keys(obj).length===0)
               {

                  // alert("Tenant deleted successfully");
                   window.location.reload();
               }
               else{
                   //alert("Tenant can not deleted");
                   window.location.reload();

               }
       })

    }
  
    
      const [isNavbarOpen, setIsNavbarOpen] = useState(false);
      const toggleNavbar = () => {
          setIsNavbarOpen(!isNavbarOpen);
      };
        return (
          <div className="container">
    <div className="row">
        <div className="col-md-12">
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
            <h1 className="mt-3">Welcome, Admin!</h1>
            <div className="table-responsive">
    <table className="table table-hover table-bordered">
        <thead className="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
                <th scope="col">Requests Remaining</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {tenant && tenant.map((t) => (
                <tr key={t.id}>
                    <th scope="row">{t.id}</th>
                    <td>{t.fname}</td>
                    <td>{t.lname}</td>
                    <td>{t.address}</td>
                    <td>{t.no_of_req_rem}</td>
                    <td>{t.contact_no}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            id="c-displanbtn"
                            onClick={() => deleteTenant(t.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

        </div>
    </div>
</div>

      

        );
    }


   


