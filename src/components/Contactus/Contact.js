import React, { Component } from 'react'
import bgimage from './SVG/Bg.svg'
import faq from './SVG/Faq.svg'
import faq1 from './SVG/faq1.svg'
import emaillogo from './iCONS/emaillogo.png'
import calllogo from './iCONS/calllogo.png'
import canada from './iCONS/canada.png'
import invercargill from './iCONS/invercargill.png'
import statueofliberty from './iCONS/statueofliberty.png'
import tajmahal from './iCONS/tajmahal.png'
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row pb-5" style={{backgroundImage:`url(${bgimage})`,backgroundSize:'cover'}}>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center pl-5">
                            <h1>Contactus</h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            </p>
                            <div className="row">
                            <div className="row ml-3 mr-4">
                                    <img className="imgsize" src={calllogo} alt="imglogo"/>
                                    <div>                                      
                                        <p>Call <br/>+91 9870123456</p>                                        
                                    </div>
                            </div>
                            <div className="row">
                                    <img className="imgsize" src={emaillogo} alt="imglogo"/>
                                    <div>                                      
                                        <p>Email <br/> connect@webure.in</p>                                        
                                    </div>
                            </div>
                            </div>
                            
                    </div>
                    <div className="col-12 col-md-6 pt-5">
                    <div class="row">
                            <p class="col-4 links btn ">General Inquires</p>
                            <p class="col-4 links btn" >Callback Form</p>
			                <p class="col-4 links btn ">Quote Form</p>                     
                                <div class="contactcard p-5 p-md-5">
                                    <form>  
                                    <div class="row">
                                    <div class="col-12 m-2">                     
                                        <input type="text" placeholder='Full Name'/>                  
                                    </div>
                                    <div class="col-12 m-2">                      
                                        <input type="email" placeholder='Email'/>                 
                                    </div>
                                    <div class="col-12 m-2">                    
                                        <input type="tel" placeholder="Phone"/>                      
                                    </div>
                                    <div class="col-12 m-2">                     
                                        <input type="text" placeholder="Website Name"/>                      
                                    </div>
                                    <div class="col-12 m-2">                      
                                        <input type="text" placeholder="Drop a Line"/>
                                    </div>

                                    </div>  
                                    <div class="d-flex justify-content-center">
                                    <button type="button" class="buttonsubmit">Send</button>
                                    </div>  
                                </form>   
                                </div>                   
                        </div>
                    </div>
                </div>
                <div className="row pl-5">
                    <div className="col-12">
                            <h1><strong>Our Locations</strong></h1>
                    </div>
                    <div className="col-12">
                    <div className="row mb-5">
                    <div class="col-12 col-md-3">
                        <div class="card p-3 mb-3">
                         <div className="text-center">   
                            <img src={tajmahal} class="card-image" alt="tajmahal"/>
                        </div>
                        <h1 class="card-title mt-3">Indial</h1>
                        <p class="card-description">
                            Webure gathers the complete
                            requirement and assigns a dedicated
                            person for the project who gives you
                            regular updates with the project to
                            customer.
                        </p>
                        <button className="buttondirections">Get directions <i class="fa fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="card p-3 mb-3">
                        <div className="text-center">   
                            <img src={canada} class="card-image" alt="canada"/>
                        </div>
                        <h1 class="card-title mt-3">Cannada</h1>
                        <p class="card-description">
                        We start the designing and
                        development of the project based on
                        the requirement and our dedicated
                        Account Manager defines the
                        timelines.
                        </p>
                        <button className="buttondirections">Get directions <i class="fa fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="card p-3 mb-3">
                        <div className="text-center">   
                            <img src={statueofliberty} class="card-image" alt="statue"/>
                        </div>
                        <h1 class="card-title mt-3">New York</h1>
                        <p class="card-description">
                            Collaborating our services and web
                            application under mobile friendly web
                            interface to ensure seamless
                            collaboration as your extended team for
                            technology.
                        </p>
                        <button className="buttondirections">Get directions <i class="fa fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>                    
                    <div class="col-12 col-md-3">
                        <div class="card p-3 mb-3">
                        <div className="text-center">   
                            <img src={invercargill} class="card-image" alt="invercargill"/>
                        </div>
                        <h1 class="card-title mt-3">New Zealand</h1>
                        <p class="card-description">
                            Collaborating our services and web
                            application under mobile friendly web
                            interface to ensure seamless
                            collaboration as your extended team for
                            technology.
                        </p>
                        <button className="buttondirections">Get directions <i class="fa fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>                    

                </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="contactcard m-3">
                        <img src={faq} alt="faq"/>
                    </div>
                    <div className="contactcard m-3">
                        <img src={faq1} alt="faq1"/>
                    </div>

                </div>
            </div>
            
        )
    }
}
