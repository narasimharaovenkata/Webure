import React from 'react'
import Modal from 'react-bootstrap/Modal'
import servicebg from './servicebg.png'
import ser1 from './ser1.png'
import ser2 from './ser2.png'
import ser3 from './ser3.png'
import ser4 from './ser4.png'
import ser5 from './ser5.png'
import ser6 from './ser6.png'
//import Button from 'react-bootstrap/Button';
import './services.css'
import { Link } from 'react-router-dom'

export default function Sermodal(props) {
    return (
        <Modal dialogClassName="custom-dialog" show={props.modalOpen} onHide={props.handleModalOpen}>
            <div className="container-fluid" closeButton>
                  <div className="row">
                        <div className="col-12 col-md-5" style={{backgroundImage:`url(${servicebg})`,backgroundSize:"cover" ,color:"#ffffff"}}>
                            <h1>services</h1>
                            <p>We offer the same services that thousands of others do. But the real difference is in the execution. Choose any of these services and we’ll show you the difference between us and others. Turn your great ideas into profitable mobile and software products with our excellent services.</p>
                        </div>
                        <div className="col-12 col-md-6 mt-3">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                <Link to="/services">
                                 <button className="modalbutton1" onClick={props.handleModalOpen} >                                
                                    <div className="row">                                                                    
                                        <img className="modalimg p-2" src={ser1} alt="ser"/>                           
                                        <p className="pl-3"><strong>Web Development</strong><br/>Website<br/>Single Page Website <br/> BlogSheet</p>                                   
                                    </div>                                
                                </button>
                                </Link>
                                </div>
                                <div className="col-12 col-md-6">
                                <Link to="/contactus">
                                 <button className="modalbutton1" onClick={props.handleModalOpen} >                                
                                    <div className="row">                                                                    
                                        <img className="modalimg p-2" src={ser2} alt="ser"/>                           
                                        <p className="pl-3"><strong>Mobile App Development</strong><br/>Application<br/>Responsive Website <br/>Icons</p>                                   
                                    </div>
                                </button>
                                </Link>
                                </div>
                                
                                <div className="col-12 col-md-6 "> 
                                <Link to="/contactus">
                                 <button className="modalbutton1" onClick={props.handleModalOpen} > 
                                    <div className="row">                                                                    
                                        <img className="modalimg p-2" src={ser3} alt="ser"/>                           
                                        <p className="pl-3"><strong>Cosulting</strong><br/>Website<br/>Single Page Website <br/> BlogSheet</p>                                   
                                    </div>
                                    </button>
                                </Link>
                                </div>
                                <div className="col-12 col-md-6"> 
                                <Link to="/contactus">
                                 <button className="modalbutton1" onClick={props.handleModalOpen} > 
                                    <div className="row">                                                                    
                                        <img className="modalimg p-2" src={ser4} alt="ser"/>                           
                                        <p className="pl-3"><strong>Game Development</strong><br/>Website<br/>Single Page Website <br/> BlogSheet</p>                                   
                                    </div>
                                    </button>
                                </Link>
                                </div>
                                <div className="col-12 col-md-6">
                                <Link to="/contactus">
                                 <button className="modalbutton1" onClick={props.handleModalOpen} >  
                                    <div className="row">                                                                    
                                        <img className="modalimg p-2" src={ser5} alt="ser"/>                           
                                        <p className="pl-3"><strong>Graphic designing</strong><br/>Website<br/>Single Page Website <br/> BlogSheet</p>                                   
                                    </div>
                                    </button>
                                </Link>
                                </div>
                                <div className="col-12 col-md-6"> 
                                <Link to="/digitalservice">
                                 <button className="modalbutton1" onClick={props.handleModalOpen} >
                                    <div className="row">                                                                    
                                        <img className="modalimg p-2" src={ser6} alt="ser"/>                           
                                        <p className="pl-3"><strong>Digital marketing</strong><br/>Website<br/>Single Page Website <br/> BlogSheet</p>                                   
                                    </div>
                                    </button>
                                </Link>
                                </div>                                                           
                            </div>
                        </div>
                  </div>
              </div>

        </Modal>
    )
}
