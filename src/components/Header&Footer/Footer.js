import React, { Component } from 'react'
import './header&footer.css'
//import logo from "./logo.png"
export default class Footer extends Component {
    render() {
        return (          
			<div class="container-fluid footer-area">
				<div class="row pt-5">
					<div class="col-12 col-md-3">
						<h4 class="">Our Company</h4>
						<ul class="">
							<li><a href="/"  className="footer-list">About Webure</a></li>

							<li><a href="/"  className="footer-list">Pricing</a></li>

							<li><a href="/"  className="footer-list">Referral Program</a></li>

							<li><a href="/"  className="footer-list">#GivingBackToCommunity</a></li>

							<li><a href="/"  className="footer-list">Employee Referral</a></li>

							<li><a href="/"  className="footer-list">Our Culture</a></li>

							<li><a href="/"  className="footer-list">Corporate Social Responsibility</a></li>

							<li><a href="/"  className="footer-list">Careers</a></li>

							<li><a href="/"  className="footer-list">Contact Us</a></li>

							<li><a href="/"  className="footer-list">FAQs</a></li>
						</ul>
					</div>
					<div class="col-12 col-md-3 menuBox">
						<h4 class="">Build Your Team</h4>
						<ul class="">
							<li><a href="/" className="footer-list">How It Works</a></li>

							<li><a href="/" className="footer-list">Why Offshore</a></li>
							
							<li><a href="/" className="footer-list">Pricing Estimator</a></li>

							<li><a href="/" className="footer-list">Video Profiles</a></li>

							<li><a href="/" className="footer-list">About Webure</a></li>

							<li><a href="/" className="footer-list">Remote Blogs</a></li>

							<li><a href="/" className="footer-list">Take the Assessment</a></li>
						</ul>
					</div>
					<div class="col-12 col-md-3 menuBox">
						<h4 class="">Services</h4>
						<ul class="">
							<li><a href="/" className="footer-list">SEO Services</a></li>

							<li><a href="/" className="footer-list">SEM Services</a></li>

							<li><a href="/" className="footer-list">Email Marketing</a></li>

							<li><a href="/" className="footer-list">Design Services</a></li>

							<li><a href="/" className="footer-list">Front-end Development</a></li>

							<li><a href="/" className="footer-list">WordPress Development</a></li>


							<li><a href="/" className="footer-list">HubSpot Development</a></li>

							<li><a href="/" className="footer-list">Marketo Automation</a></li>

							<li><a href="/" className="footer-list">Salesforce Automation</a></li>
						</ul>
					</div>
					<div class="col-12 col-md-3 menuBox">
						<h4 class="">Resources</h4>
						<ul class="">
							<li><a href="/" className="footer-list">Blogs</a></li>

							<li><a href="/" className="footer-list">Podcast</a></li>

							<li><a href="/" className="footer-list">Case Studies</a></li>

							<li><a href="/" className="footer-list">Testimonials</a></li>

							<li><a href="/" className="footer-list">eBooks</a></li>

							<li><a href="/" className="footer-list">Infographics</a></li>

						</ul>
					</div>					
				</div>
				<hr/>
				<div className="row">
					<div className="col-11 col-md-4">
					<h4 className="p-3">Sign up for Webure Emails</h4>
					<div class="input-group m-3">
						<input type="text" class="form-control" placeholder="Your Email"/>
						<div class="input-group-append">
						<span class="input-group-text">Subscribe</span>
						</div>
					</div>
					</div>
					<div className="col-10 col-md-3 mr-3">
						<h4 className="p-3">Select region</h4>
							<div class="input-group m-3">
								<select class="form-control regioncolor">
								<option value="India">India</option>
								<option value="USA">USA</option>
								<option value="Australia">Australia</option>
								<option value="South Africa">South Africa</option>
								</select>
							</div>
					</div>
					<div className="col-12 col-md-3 mt-3">
						
						<h5 className="footerheadpadding">Follow Us</h5>
						<ul className="row footersocilapadding">
							<li class="socialsize pr-2 "><i class="fab fa-facebook-square"></i></li>
							<li class="socialsize pr-2"><i class="fab fa-twitter-square"></i></li>
							<li class="socialsize pr-2"><i class="fab fa-linkedin"></i></li>
							<li class="socialsize pr-2"><i class="fab fa-instagram"></i></li>
							<li class="socialsize"><i class="fab fa-youtube-square"></i></li>
						</ul>	
						<h5 className="numstyle">+91-0123456789</h5>
						<h4 className="mailstyle">sales@webure.in</h4>
					</div>
				</div>					
				<hr/>
				<div class="row">
					<div class="col-12 col-md-6 col-lg-3 mt-3">
						<h2 class="pb-1">India</h2>
						<h5 class="citycolor">Bangalore</h5>
						<div>#310G, Whitefield Post Office Road, Whiefield, Bangalore, Karnataka 560103, India</div>
					</div>
					<div class="col-12 col-md-6 col-lg-3 mt-3">
						<h2 class="pb-1">Cannada</h2>
						<h5 class="citycolor">Hamilton</h5>
						<div>155-2 King Street West Unit #145 Hamilton, ON L8P 4S0 Canada</div>
					</div>
					<div class="col-12 col-md-6 col-lg-3 mt-3">
						<h2 class="pb-1">New York</h2>
						<h5 class="citycolor">New York City</h5>
						<div>One World Trade Center, 285 Fulton Street Suite 8500, New York City NY 10007, USA</div>
					</div>
					<div class="col-12 col-md-6 col-lg-3 mt-3">
						<h3 class="pb-1">New Zealand</h3>
						<h4 class="citycolor">Auckland</h4>
						<div>Level 26, HSBC Tower, 188 Quay Street, Auckland, AUK 1010 New Zealand</div>
					</div>
				</div>
				<hr/>	
				<div><p class="copyrights">© 2021 Webure Technologies. All rights reserved. <a href="/" class="policy">Privacy Policy</a> &nbsp;|&nbsp; <a href="/" class="policy">ISMS Policy</a></p>
				</div>
			</div>
                
            
        )
    }
}
