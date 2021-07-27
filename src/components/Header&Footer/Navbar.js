import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header&footer.css';
import logo from './logo.png';
import Sermodal from '../Services/Sermodal';
//import { Link } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';

export default class Navbar extends Component {
  state = {
    modalOpen: false,
  };

  handleModalOpen = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen,
      };
    });
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light nav-background d-flex align-items-center">
          <a
            className="navbar-brand pr-3 d-flex align-items-center mr-5"
            href="/"
          >
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top mr-3"
              alt="logo"
            />
            <span className="navbar-brand-name">Webure</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-container ml-auto justify-content-between">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/">
                About Us
              </Link>
              <Link className="nav-link" to="/">
                Services
              </Link>
              <Link className="nav-link" to="/">
                Career
              </Link>
              <Link className="nav-link" to="/">
                Clienentlee
              </Link>
              <div>
                <Link to="/contactus">
                  <button className="navbutton">
                    Contact Us <i class="fa fa-long-arrow-alt-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Sermodal
          modalOpen={this.state.modalOpen}
          handleModalOpen={this.handleModalOpen}
        />
      </>
    );
  }
}
