import React, { Component } from 'react'
import webserimage from './webservice.svg'
import reactserlogo from './reactserlogo.svg'
import './services.css'
import { Link } from 'react-router-dom'

export default class Services extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <img className="w-75" src={webserimage}  alt="mainlogo"/>
                    </div>
                    <div className="col-12 col-md-6 mt-5 mb-5">
                        <div className="card p-3">
                            <h1 className= "text-left">Front End</h1>   
                            <div className="row divbutton">                        
                                <button className="servicebutton">React</button>
                                <button className="servicebutton">Node.js</button>  
                            </div>
                            <div className="row divbutton">                                 
                                <button className="servicebutton">Angular</button>
                                <button className="servicebutton">Express</button>  
                            </div>
                            <h1 className= "text-left">Back End</h1>   
                            <div className="row divbutton">                        
                                <button className="servicebutton">React</button>
                                <button className="servicebutton">Node.js</button>  
                            </div>
                            <div className="row divbutton">                                 
                                <button className="servicebutton">Angular</button>
                                <button className="servicebutton">Express</button>  
                            </div> 
                                                     
                        </div>
                    </div>
                    
                    </div>
                    <h1 className="text-center mt-5">Front End</h1>
                    <h1 className="text-center">React Development</h1>
                    <div className="sercard mb-5">
                        <div className="row">
                        <div className="col-12 col-md-6 pt-3 pb-3">
                            <img className="w-50" src={reactserlogo}  alt="mainlogo"/>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <p>Compelling UI experiences powered by JavaScript, turbocharged through custom libraries. Performance optimization for a smooth UX o all platforms.</p>
                        </div>
                        </div>
                    </div>                
                    <div className="text-center mb-3">
                     <Link to="/reactservice">   
                     <button className="buttonexplore">Explore <i class="fa fa-long-arrow-alt-right"></i></button>
                     </Link>
                    </div>                
                </div>
            </div>
        )
    }
}
