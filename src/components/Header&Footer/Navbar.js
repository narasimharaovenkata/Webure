import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header&footer.css'
import logo from "./logo.png"
import Sermodal from '../Services/Sermodal'
//import { Link } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';


export default class Navbar extends Component {
    state = {
        navCollapsed: true,
        modalOpen: false
      }

    handleModalOpen = () => {
        this.setState((prevState) => {
           return{
              modalOpen: !prevState.modalOpen
           }
        })
     }
    
    _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
    }    
    render() {
        const {navCollapsed} = this.state

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light navbackground">
                <div className="container-fluid">
                    <a class="navbar-brand pr-3" href="/">
                        <img src={logo} width="40" height="40" class="d-inline-block align-top" alt="logo"/>
                        <span style={{color:"#000000",fontWeight:"500",fontSize:"25px"}}>Webure</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="toggler" aria-expanded="false" aria-label="Toggle navigation" onClick={this._onToggleNav}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} >
                    <div class="navbar-nav d-flex justify-content-between" style={{fontWeight:"500",fontSize:"20px"}}>
                       <Link to="/">
                        <p class="nav-link btn" style={{color:"#f54b08"}}>Home</p>
                        </Link>
                        <Link to="/">
                        <p class="nav-link btn">About Us</p>
                        </Link>
                        <Link>
                        <p class="nav-link btn" onClick={this.handleModalOpen}>Services</p>
                        </Link>
                        <Link to="/">
                        <p class="nav-link btn" >Career</p>
                        </Link>
                        <Link to="/">
                        <p class="nav-link btn" >Clienentlee</p>
                        </Link>
                        <div className="text-center">
                        <Link to="/contactus"><button className="navbutton">Contact Us <i class="fa fa-long-arrow-alt-right"></i></button></Link>
                        </div>
                    </div>
                    </div>                    
                </div>
            </nav>
            <Sermodal modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}/>
            </div>
        )
    }
}
