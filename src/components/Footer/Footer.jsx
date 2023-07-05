import React from 'react';
import './Footer.css';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
function Footer() {
	return (
		<div>
			<div className="footer">
				<div className="footer_container1">
					<a href="/" className="fb">
						<BiLogoFacebook /> Facebook
					</a>
					<a href="/" className="insta">
						<AiFillInstagram /> Instagram
					</a>
					<a href="/" className="twt">
						<BsTwitter /> Twitter
					</a>
				</div>
				<div className="footer_container2">
					<h3>
						<a href="/">Explore</a>
					</h3>
					<a href="/">Figma</a>
					<a href="/">Customers</a>
					<a href="/">Bing</a>
					<a href="/">Contact</a>
					<a href="/">Learn Design</a>
				</div>
				<div className="footer_container3">
					<h3>
						<a href="/">Company</a>
					</h3>
					<a href="/">FAQ</a>
					<a href="/">Terms of Services</a>
					<a href="/">Privacy Policy</a>
				</div>
				<div className="footer_container4">
					<h3>
						<a href="/"> Support </a>
					</h3>
					<a href="/"> About Us </a>
					<a href="/"> Pricing </a>
					<a href="/"> Features </a>
					<a href="/"> Help </a>
				</div>
				<div className="footer_container5">
					<h3>
						<a href="/"> Legal </a>
					</h3>
					<a href="/"> Compare </a>
					<a href="/"> Sketch </a>
					<a href="/"> ADobe XD </a>
					<a href="/"> Invision Studio </a>
					<a href="/"> Framer </a>
					<a href="/"> Design on Windows </a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
