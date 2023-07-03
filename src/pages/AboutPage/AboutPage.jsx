import React, { useState, useEffect } from 'react';
import './AboutPage.css';
import photo1 from '../../assets/images/photo1.jpg';
import mission from '../../assets/images/mission.jpg';
import { BiLogoFacebook } from 'react-icons/bi';
// import Testimonials from '../Testimonals/Testimonals';

import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

export default function Hero() {
	const [ mode, setMode ] = useState('light');
	const toggleMode = () => {
		setMode(mode === 'light' ? 'dark' : 'light');
	};
	const [ teamData, setTeamData ] = useState([]);

	return (
		<div>
			{/*------------------------------- Hero Section -------------------------------*/}

			<div className="hero">
				<div className="leftside">
					<h1>
						Build Your Digital Presence:
						<br />
						Unleash Your Website's Potential!
					</h1>
					<p className="hero_para">
						"Ignite Your Digital Presence: Unleash Website Wonders in Seconds!
						<br />
						Dominate the Online Realm with Striking Designs.
						<br /> Empower Your Brand, Engage Your Audience, Elevate Your Success! Start Today, Unleash
						Limitless Possibilities!"
					</p>
				</div>
				<div className="rightside">
					<img src={photo1} alt="" srcSet="" />
				</div>
			</div>
			<div className="gap" />

			{/* --------------------------------------Mission section----------------------------- */}

			<div className="mission">
				<div className="mission_para">
					<div className="mission_heading">
						<h4>Our Mission</h4>

						<img src={mission} className="mission_img" alt="mission_image" />
					</div>
					Our mission is to revolutionize the way you build and experience websites. We are driven by a
					passion for empowering individuals and businesses to unleash their online potential. a seamless and
					delightful journey. <br />
					<div className="small_gap" />
					Innovation is at the core of our mission. We are dedicated to staying ahead of the curve, constantly
					pushing boundaries to bring you cutting-edge features and functionalities. <br />
					<div className="small_gap" />
					We believe that everyone deserves a remarkable online presence. That's why we have made our platform
					user-friendly, ensuring that both beginners and experienced users can easily craft
					professional-grade websites. <br />
					<div className="small_gap" />
					Join us on our mission to transform the web landscape. Whether you're a blogger, entrepreneur, or a
					creative professional, we are here to support your journey to online success.
				</div>
				<div className="fact">
					<h1>100+ customizable templates</h1>
					<h1>Lightning-fast loading speeds</h1>
					<h1>Build and customize</h1>
				</div>
			</div>
			<div className="gap" />

			{/* ---------------------------------------------------------------------- */}

			{/* ----------------------------------------------------------------- */}

			{/*------------------------------- Our Value------------------------------- */}
			<div className="value">
				<div className="heading_value">
					<div className="value_heading">
						<h1>Our Value</h1>
					</div>
					<p className="para_value">We uphold a set of core values that guide everything we do.</p>
				</div>
				<div className="topic_value">
					<p>
						<h3>Innovation</h3> We embrace innovation as the fuel that propels us forward. We constantly
						seek new ideas, technologies, and approaches to redefine the boundaries of what's possible. By
						fostering a culture of innovation, we empower our team and clients to stay ahead in a
					</p>

					<p>
						<h3>Collaboration</h3> We believe in the power of collaboration. We foster an environment where
						diverse perspectives thrive, and teamwork is celebrated. By working together, we create synergy,
						amplify our strengths, and achieve remarkable results. We collaborate with our clients,
						understanding their vision and goals to deliver tailored solutions that surpass expectations.
					</p>

					<p>
						<h3>Integrity</h3> Integrity is the cornerstone of our business. We conduct ourselves with the
						utmost professionalism, honesty, and ethical standards. We prioritize transparency and
						accountability in every interaction, building trust and long-term partnerships with our clients
						and stakeholders. We value integrity as the foundation for sustainable growth and success.
					</p>
				</div>
			</div>

			{/*--------------------------------------- Testimonals-----------------------------  */}
			<div className="small_gap" />
			<div className="test_heading">
				<h3>Testimonials</h3>
				<div className="testimonlas_para">What people say about us</div>
			</div>
			{/* <Testimonials /> */}
			<div className="small_gap" />

			{/* ----------------------------------------------------------------------------------- */}

			<hr />

			{/*----------------------------------- footer-------------------------------- */}
			<div className="sections">
				<div className="container1">
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
				<div className="container2">
					<h3>
						<a href="/">Explore</a>
					</h3>
					<a href="/">Figma</a>
					<a href="/">Customers</a>
					<a href="/">Bing</a>
					<a href="/">Contact</a>
					<a href="/">Learn Design</a>
				</div>
				<div className="container3">
					<h3>
						<a href="/">Company</a>
					</h3>
					<a href="/">FAQ</a>
					<a href="/">Terms of Services</a>
					<a href="/">Privacy Policy</a>
				</div>
				<div className="container4">
					<h3>
						<a href="/"> Support </a>
					</h3>
					<a href="/"> About Us </a>
					<a href="/"> Pricing </a>
					<a href="/"> Features </a>
					<a href="/"> Help </a>
				</div>
				<div className="container5">
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
