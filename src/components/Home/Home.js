import React, { Component } from 'react';
import './Home.css';
import mainimage from './mainimage.png';
import web1 from './web-design1.png';
import web2 from './web-design2.png';
import web3 from './web-design3.png';
import smallimg from './smalllogo.png';
import startup1 from './startup1.png';
import startup2 from './startup2.png';
import startup3 from './startup3.png';
import rectangle2 from './Rectangle2.png';
//import rectangle3 from './Rectangle3.png'
import cmp1 from './cmp1.png';
import cmp2 from './cmp2.png';
import cmp3 from './cmp3.png';
import cmp4 from './cmp4.png';
import touch from './Touch.png';
import Carousel from 'react-bootstrap/Carousel';
import Marquee from 'react-fast-marquee';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid header-container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div className="heading-width">
                <h1 className="header-heading">
                  Webure a
                  <strong style={{ color: '#FF5D22' }}>
                    {' '}
                    Full Service Digital Agency{' '}
                  </strong>
                </h1>
                <p class="header-description">
                  That helps clients expand their digital reach. Put your brand
                  on the map with the ROI driven Digital Marketing solutions
                </p>
                <button className="main-button">Get in Touch</button>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center mb-3">
              <img className="w-75" src={mainimage} alt="mainlogo" />
            </div>
          </div>
        </div>
        <div>
          <div className="container-fluid mt-2">
            <div className="d-flex flex-column flex-md-row justify-content-around align-items-center p-3">
              <div className="webure-card p-3 m-2">
                <div className="text-center">
                  <img src={web1} className="card-image" alt="web1" />
                </div>
                <h1 className="card-title mt-3">Consult</h1>
                <p className="card-description">
                  Webure gathers the complete requirement and assigns a
                  dedicated person for the project who gives you regular updates
                  with the project to customer.
                </p>
                <a className="card-link" href="/">
                  Learn More
                </a>
              </div>
              <div className="webure-card p-3 m-2">
                <div className="text-center">
                  <img src={web2} class="card-image" alt="web2" />
                </div>
                <h1 className="card-title mt-3">Create</h1>
                <p className="card-description">
                  We start the designing and development of the project based on
                  the requirement and our dedicated Account Manager defines the
                  timelines.
                </p>
                <a className="card-link" href="/">
                  Learn More
                </a>
              </div>
              <div className="webure-card p-3 m-2">
                <div className="text-center">
                  <img src={web3} class="card-image" alt="web3" />
                </div>
                <h1 className="card-title mt-3">Collaborate</h1>
                <p className="card-description">
                  Collaborating our services and web application under mobile
                  friendly web interface to ensure seamless collaboration as
                  your extended team for technology.
                </p>
                <a className="card-link" href="/">
                  Learn More
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-xl-6">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                  <div className="m-3">
                    <div class="about-us-card p-3 mb-3 mt-5">
                      <div className="text-center">
                        <img src={smallimg} class="card1-image" alt="web2" />
                      </div>
                      <h1 class="card1-title mt-3">Web Developmet</h1>
                      <p class="card1-description">
                        We're motivated to scale and grow your business as we
                        are more than just a web application development
                        company. We're strong software development partner who
                        is ready to cover all your tech needs.
                      </p>
                    </div>
                  </div>
                  <div className="m-3">
                    <div class="about-us-card p-3 mb-3">
                      <div className="text-center">
                        <img src={smallimg} class="card1-image" alt="web2" />
                      </div>
                      <h1 class="card1-title mt-3">Web Developmet</h1>
                      <p class="card1-description">
                        We're motivated to scale and grow your business as we
                        are more than just a web application development
                        company. We're strong software development partner who
                        is ready to cover all your tech needs.
                      </p>
                    </div>
                    <div class="about-us-card p-3 mb-3">
                      <div className="text-center">
                        <img src={smallimg} class="card1-image" alt="web2" />
                      </div>
                      <h1 class="card1-title mt-3">Web Developmet</h1>
                      <p class="card1-description">
                        We're motivated to scale and grow your business as we
                        are more than just a web application development
                        company. We're strong software development partner who
                        is ready to cover all your tech needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 pl-5 d-flex flex-column align-items-start justify-content-center">
                <p class="about-card-description">Services</p>
                <h1 class="about-heading">About Us</h1>
                <p class="about-card-description">
                  We offer the same services that thousands of others do. But
                  the real difference is in the execution
                </p>
                <br />
                <p class="about-card-description">
                  We are branding up businesses and cutting-edge technology such
                  us lot or blockchain. we provide you technology such us lot or
                  blockchain. We provide you wiith high quality solutions and
                  conultancy, always through a very practical, fresh and
                  professional approach
                </p>

                <button type="button" className="button-explore">
                  Explore <i class="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12 mt-5">
                <h1 className="text-center pt-5">Why should you Choose Us</h1>
                <h5 className="text-center pb-3">
                  Webure a Full Service Agency that help our clients expand
                  their digital reach
                </h5>
              </div>
              <div class="col-12 col-md-4">
                <div class="card p-3 mb-3">
                  <div className="text-center">
                    <img src={startup1} class="card-image" alt="startup1" />
                  </div>
                  <h1 class="card-title mt-3" style={{ color: '#f54b08' }}>
                    Consult
                  </h1>
                  <p class="card-description">
                    Webure gathers the complete requirement and assigns a
                    dedicated person for the project who gives you regular
                    updates with the project to customer.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card p-3 mb-3">
                  <div className="text-center">
                    <img src={startup2} class="card-image" alt="startup2" />
                  </div>
                  <h1 class="card-title mt-3" style={{ color: '#f54b08' }}>
                    Create
                  </h1>
                  <p class="card-description">
                    We start the designing and development of the project based
                    on the requirement and our dedicated Account Manager defines
                    the timelines.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card p-3 mb-3">
                  <div className="text-center">
                    <img src={startup3} class="card-image" alt="startup3" />
                  </div>
                  <h1 class="card-title mt-3" style={{ color: '#f54b08' }}>
                    Collaborate
                  </h1>
                  <p class="card-description">
                    Collaborating our services and web application under mobile
                    friendly web interface to ensure seamless collaboration as
                    your extended team for technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <Marquee behavior="scroll" direction="left">
                <div className="pl-5">
                  <img className="moveimg" src={cmp1} alt="logo" />
                </div>
                <img className="moveimg" src={cmp2} alt="logo" />
                <img className="moveimg" src={cmp3} alt="logo" />
                <img className="moveimg" src={cmp4} alt="logo" />
              </Marquee>
            </div>
            <div
              className="row pb-3"
              style={{
                backgroundImage: `url(${rectangle2})`,
                backgroundSize: 'cover',
                color: '#ffffff',
              }}
            >
              <div className="col-12 mt-5 mb-5">
                <h1 className="text-center">Drive Digital Revolution</h1>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <h1 className="text-center">7 Years on Market</h1>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <h1 className="text-center">15+ Team Members</h1>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <h1 className="text-center">
                  100% <br /> Satsfaction
                </h1>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <h1 className="text-center">
                  300+ <br /> Projects
                </h1>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12 mt-5">
                <h1 className="text-center pt-5">Ready to Grow Business?</h1>
                <h5 className="text-center pb-3">
                  Being the best digital marketing agency in India and US, we
                  partner with clients to create superior digital experiences
                </h5>
              </div>
              <div class="col-12 col-md-3">
                <div class="card p-3 mb-3">
                  <div className="text-center">
                    <img src={cmp1} class="card2-image" alt="cmp1" />
                  </div>
                  <h1 class="card2-title mt-3">Stripe</h1>
                  <p class="card2-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="card p-3 mb-3">
                  <div className="text-center">
                    <img src={cmp2} class="card2-image" alt="cmp2" />
                  </div>
                  <h1 class="card2-title mt-3">razorpay</h1>
                  <p class="card2-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="card p-3 mb-3">
                  <div className="text-center">
                    <img src={cmp3} class="card2-image" alt="cmp3" />
                  </div>
                  <h1 class="card2-title mt-3">Slack</h1>
                  <p class="card2-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="card p-3 mb-3">
                  <div className="text-center">
                    <img src={cmp4} class="card2-image" alt="cmp4" />
                  </div>
                  <h1 class="card2-title mt-3">Marketo</h1>
                  <p class="card2-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <h1>Hundreds of happy clients</h1>
              <p class="card-description">
                Being the best digital marketing agency in India and US, we
                partner with clients to create superior digital experiences
              </p>
              <button className="buttonexplore mt-2 mb-5">
                want to become our client
              </button>
            </div>
            <div className="col-12 col-md-7">
              <Carousel>
                <Carousel.Item style={{ height: '350px' }}>
                  <div class="card p-3 mt-3 mb-3">
                    <h1>Name</h1>
                    <h5>Company Name</h5>
                    <p class="card-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item style={{ height: '350px' }}>
                  <div class="card p-3 mt-3 mb-3">
                    <h1>Name</h1>
                    <h5>Company Name</h5>
                    <p class="card-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item style={{ height: '350px' }}>
                  <div class="card p-3 mt-3 mb-3">
                    <h1>Name</h1>
                    <h5>Company Name</h5>
                    <p class="card-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <h1 className="text-left" style={{ color: '#f54b08' }}>
                Get in touch
              </h1>
              <h5 className="text-left">
                Let s talk and explore variety of digital marketing strategies
                to build your brand and reach the right people.
              </h5>
              <img className="w-75" src={touch} alt="mainlogo" />
            </div>
            <div className="col-12 col-md-6">
              <div class="card p-3 mt-5 mb-3">
                <div>
                  <div class="col-auto pt-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your name"
                    />
                  </div>
                  <div class="col-auto pt-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Phone number"
                    />
                  </div>
                  <div class="col-auto pt-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your email"
                    />
                  </div>
                  <div class="col-auto pt-3">
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="Message..."
                      rows="3"
                    />
                  </div>
                  <button className="buttonexplore mt-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
