import React, { Component } from 'react'
import digitalser from './digitalser.png'
import './services.css'
//import seo1 from './seo1.png'
import dig1 from './dig1.svg'
import dig2 from './dig2.svg'
import dig3 from './dig3.svg'
import digsol from './digsolutions.svg'
import digsol2 from './digisol2.svg'
import stat1 from './startegy1.svg'
import stat2 from './startegy2.svg'
import stat3 from './startegy3.svg'
import case1 from './case1.svg'
import case2 from './case2.svg'
import case3 from './case3.svg'
import clientcircle from './clientcircle.svg'
import cliimg from './cliimg.svg'

export default class Digitalservice extends Component {
    render() {
        return (
            <div className="digitalbgcolor">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                        <h1>We esure and transform  <br/> business growing</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        <div>
                        <button className="buttonexplore">Get Started</button>
                        <button className="dserbutton1">Learn More</button>
                        </div>
                        <img className="w-25" alt="diglogo" src={digitalser}/>
                    </div>
                        <div className="col-12 mt-5 text-center">
                            <h6>Here how it works</h6>
                            <h1>Simple process to start</h1>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card p-3 mb-3">
                            <div className="text-center">   
                                <img src={dig1} class="card-image" alt="web3"/>
                            </div>
                            <h1 class="card-title mt-3">Digital analysis</h1>
                            <p class="card-description">
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                        <div class="card p-3 mb-3">
                        <div className="text-center">   
                            <img src={dig2} class="card-image" alt="web3"/>
                        </div>
                        <h1 class="card-title mt-3">Digital marketing</h1>
                        <p class="card-description">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                       
                        </div>
                    </div>
                        <div class="col-12 col-md-4">
                        <div class="card p-3 mb-3">
                        <div className="text-center">   
                            <img src={dig3} class="card-image" alt="web3"/>
                        </div>
                        <h1 class="card-title mt-3">Email marketing</h1>
                        <p class="card-description">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        
                        </div>
                    </div>
                        <div className="col-12 text-center">
                            <button className="buttonexplore">All Features</button>
                        </div>
                        <div className="col-12 col-md-6 mt-5 mb-5">
                            <p className="pt-4"><strong style={{color:"#f54b08"}}>Web Solutions</strong></p>
                            <h1 class='text-left' >Strategics experiences ad visual appeal</h1>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <a className="card-link" href="/">Read more <i class="fa fa-long-arrow-alt-right"></i></a>
                        </div>
                        <div className="col-12 col-md-6 text-center mb-3 pt-4">
                            <img className="w-75" src={digsol}  alt="mainlogo"/>
                        </div>
                        <div className="col-12 ">
                        <div className="row pl-4">
                                <div className="col-6 col-md-3 p-2">
                                <div className="rsercard1">
                                    <h1>6</h1>
                                    <p>years on filed</p>
                                </div>
                                </div>
                                <div className="col-6 col-md-3 p-2">
                                <div className="rsercard1">
                                    <h1>10+</h1>
                                    <p>Expertes</p>
                                </div>
                                </div>
                                <div className="col-6 col-md-3 p-2">
                                <div className="rsercard1">
                                    <h1>50+</h1>
                                    <p>Projects</p>
                                </div>
                                </div>
                                <div className="col-6 col-md-3 p-2">
                                <div className="rsercard1">
                                    <h1>20+</h1>
                                    <p>Agency Prtners</p>
                                </div>
                                </div>
                            </div>                            
                        </div>
                        <div className="col-12 col-md-6 ">
                            <p className="pt-4"><strong style={{color:"#f54b08"}}>Why us</strong></p>
                            <h1 class='text-left' >What makes us stand out</h1>

                            <p><img className="startegyimg" src={stat1} alt="logo"/> <strong>Prefect startegy</strong> <br/>Based on research and analysis, we plan to itroduce revolutionary solutions</p>
                            <p><img className="startegyimg" src={stat2} alt="logo"/> <strong>Innovative ideas</strong> <br/>We build electrified relations between products and humans</p>
                            <p><img className="startegyimg" src={stat3} alt="logo"/> <strong>Effective solutions</strong> <br/>Prefected matched activities follou us to achieve goles in short time</p>
                            
                            
                        </div>
                        <div className="col-12 col-md-6 text-center mt-5 mb-3">
                            <img className="w-75" src={digsol2}  alt="mainlogo"/>
                        </div>
                        <div className="col-12 m-4 text-center">
                            <h5><strong style={{color:"#f54b08"}}>Our Works</strong></h5>
                            <h1>Our case studies</h1>
                        </div>
                        <div class="col-12 col-md-4 ">                        
                            <div class="dbg1 p-3 text-center ">                          
                                <img src={case1} class="w-50" alt="web3"/>  
                                <p><strong>Email marketing</strong><br/>Fashion, product</p>                                            
                            </div>
                            
                        
                        
                    </div>
                        <div class="col-12 col-md-4">
                            <div class=" dbg2 p-3 text-center">                          
                                <img src={case2} class="w-50" alt="web3"/> 
                                <p><strong>Content marketing</strong><br/>Fashion, product</p>                                            
                            </div>
                            
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="dbg3 p-3 text-center">                          
                                <img src={case3} class="w-50" alt="web3"/>                        
                                <p><strong>Growth marketing</strong><br/>Fashion, product</p>                       
                            </div>
                        </div>
                        <div className="col-12 col-md-6 text-center mb-3">
                            <img className="w-75" src={clientcircle}  alt="mainlogo"/>
                        </div>
                        <div className="col-12 col-md-6 mt-5 mb-5">
                        <p className="pt-4"><strong style={{color:"#f54b08"}}>Our Clients</strong></p>
                            <h1 class='text-left' >Love form happy clients from the entire world</h1>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <div className="row">
                            <img className="clientimg" src={cliimg} alt="logo"/>
                            <p className="p-3"> <strong>Mr. John Doe</strong> <br/>Design manager</p>
                            </div>

                        </div>
                    </div>
                </div>
                

            </div>
        )
    }
}
