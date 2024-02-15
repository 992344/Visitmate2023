import React from "react";
import { useSelector } from 'react-redux';
import { selectUserData } from '../Slice/userSlice';
import { Link } from "react-router-dom";
import { FaUser, FaUserGraduate, FaIndustry } from 'react-icons/fa'; // Import icons
import { FaUserPlus } from 'react-icons/fa'; // Import the register icon



function Header() {

 const userData = useSelector(selectUserData);


  return (
    <>
      <nav
        class="navbar navbar-dark bg-black"
        style={{ boxShadow: "0 0 40px 0 rgba(0,0,0,.45)" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand ms-5">
            <Link to="/">
              {" "}
              <h3 style={{ color: 'white' }}>VisitMate</h3>
            </Link>
          </a>
          {/* <!-- Button trigger modal --> */}
          <span className="ms-auto me-5">
            <button
              type="button"
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ backgroundColor: 'white', color: 'black' }}
            >
              <FaUserPlus /> Register
            </button>
          </span>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Register Here 
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
              <div className="d-flex flex-column">
                <Link to="/StudentRegister" className="mb-2 text-decoration-none text-dark">
                  <FaUserGraduate className="me-2" /> Student
                </Link>
                <Link to="/adminResister" className="mb-2 text-decoration-none text-dark">
                  <FaUser className="me-2" /> Teacher
                </Link>
                <Link to="/IndustrialRegister" className="mb-2 text-decoration-none text-dark">
                  <FaIndustry className="me-2" /> Industrial Owner
                </Link>
              </div>
            </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>

          <span class="float-right d-flex ">
            <div class="rounded-circle bg-info me-5">
            </div>
            <span className="float-end me-5 "style={{ color: 'white' }}>Hello {userData?.userData?.name}</span>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Header;

