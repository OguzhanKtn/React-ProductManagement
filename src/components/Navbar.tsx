import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Admin } from "../model/Admin";

function Navbar(item: {admin:Admin}) {

  const navigate = useNavigate()

  useEffect(() => {
    if(item.admin){

    }else{
      navigate('/')
    }
  }, [])
  

  const logout = () =>{
    sessionStorage.removeItem('admin')
    navigate('/')
  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" role="button" onClick={logout}>
                  Logout
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">{item.admin && item.admin.firstName} {item.admin && item.admin.lastName}</a>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/basket"><i className="bi bi-cart3"></i> Basket</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
