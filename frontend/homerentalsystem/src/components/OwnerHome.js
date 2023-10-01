import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { useEffect, useReducer, useState } from "react"


export default function OwnerHome() {
    const[owner,setOwner]=useState();

    const [id, setId] = useState([]);

            useEffect(() => {
            const items = JSON.parse(localStorage.getItem('loggedUser')).id;
            if (items) {
            setId(items);
            fetch("http://13.53.190.118:8080/getownerbyloginid/"+items)
            .then(res => res.json())
            .then(data => {setOwner(data);localStorage.setItem("loggedOwner",JSON.stringify(data))})
            }
            }, []);

    const getId=()=>{
     
       
    }


   

    
    
 
   
        return (
            <div className="container mt-5">
            <h1 className="text-center mb-4">Welcome, Property Owner!</h1>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-4">
                    <div className="border bg-primary bg-opacity-50 p-3 mb-3">
                        <p className="text-light text-center mb-0">Add to your Dream Property</p>
                        <Link to="/addproperty" className="d-block text-center">
                            <button className="btn btn-light mt-2" onClick={getId}>Add Property</button>
                        </Link>
                    </div>
                </div>
        
                <div className="col-lg-4">
                    <div className="border bg-primary bg-opacity-50 p-3 mb-3">
                        <p className="text-light text-center mb-0">Show Your Dream Property</p>
                        <Link to="/showmyproperty" className="d-block text-center">
                            <button className="btn btn-light mt-2">Show Property</button>
                        </Link>
                    </div>
                </div>
        
                <div className="col-lg-4">
                    <div className="border bg-primary bg-opacity-50 p-3 mb-3">
                        <p className="text-light text-center mb-0"></p>
                        <Link to="/logout" className="d-block text-center">
                            <button className="btn btn-light mt-2">Logout</button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="border bg-primary bg-opacity-50 p-3 mb-3">
                        <p className="text-light text-center mb-0"></p>
                        <Link to="/propreq" className="d-block text-center">
                            <button className="btn btn-light mt-2">Property requests</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }


   


