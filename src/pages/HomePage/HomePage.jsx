import React,{useEffect,useState} from 'react';
import './HomePage.css';
import home from '../../assets/images/home.jpg';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
// import logo from '../../assets/images/logo.jpg';
// import search from '../../assets/images/search.png';
// import facebook from '../../assets/images/facebook.png';
// import instagram from '../../assets/images/instagram.png';
// import twitter from '../../assets/images/twitter.png';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

// import userImage from '../../assets/images/userImage.jpg';

// import { Link } from 'react-router-dom';import HomePagePricingCard from "../../components/HomePagePricing/HomePagePricingCard";
// import HomePagePricingCard from "../../components/HomePagePricing/HomePagePricingCard";

// import { prices } from "../../Mock/Price";

const HomePage = () => {
	const navigate = useNavigate();
	const handleLogin = () =>{
		navigate('/auth');
	};
	// let login = false;
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	const token = localStorage.getItem('pmaToken');
    
	return (
		<div>
			<NavBar />
			{/* ---------------------------MAIN BODY---------------------- */}
			<section className="main_body">
				<div className="row">
					<div className="col-md-4 mt-5">
						<h1 className="text-break">A better way</h1>
						<h1 className="text-break">to design</h1>
						<h1 className="text-break">website</h1>
						<div className="mt-4" style={{ lineHeight: '0.5em' }}>
							<p className="text-break">Create a website for your business,</p>
							<p className="text-break">portfolio, or eCommerce store. Start from</p>
							<p className="text-break">scratch. Pick a designer made template</p>
						</div>
					</div>
					<div className="col-md-8">
						<img src={home} alt="Image" className="img-fluid bigger-image" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center mt-4">
						<div>
							<button type="button" className="btn btn-warning btn-lg">
								Get Started
	
							</button>
							{windowWidth < 670 && !token && (
								<button onClick={handleLogin} type="button" className="btn btn-warning btn-lg ml-4">
								Login
								</button>
							)}
							
						</div>
					</div>
				</div>
			</section>
			{/* -------------------------- SECOND MAIN BODY--------------------------*/}
			<section className="Second_main_body">
				<h1 className="text-center">Find the Perfect Template for Your Website</h1>
				<div className="overlap-images mt-4">
					<img src={img1} alt="Image 1" className="img-fluid img1 col-md-4" />
					<img src={img2} alt="Image 2" className="img-fluid img2 col-md-4" />
					<img src={img3} alt="image 3" className="img-fluid img3 col-md-4" />
				</div>
			</section>
			<div>
				<div className="text-center additional p-md-4">
					<h2>Get Started with Beautiful Pre-designed Templates</h2>
					<button type="button" className="btn btn-dark btn-lg">
						Explore Templates
					</button>
				</div>
			</div>
			{/* ---------------------------PRICE----------------------------------- */}
			<section className="price">
				<div
					className="container-fluid"
					style={{
						background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)'
					}}
				>
					<div className="p-5">
						<div className="row">
							<div className="col-lg-4 col-md-12 mb-4">
								<div className="card h-100 shadow-lg">
									<div className="card-body">
										<div className="text-center p-3">
											<h5 className="card-title">Basic Plan</h5>
											<h6 className="card-subtitle mb-2 text-muted">Free</h6>
										</div>
										<ul className="list-group list-group-flush text-center">
											<li className="list-group-item">1 GB Storage</li>
											<li className="list-group-item">5 Templates</li>
											<li className="list-group-item">Limited Support</li>
										</ul>
										<div className="text-center p-3">
											<button type="button" className="btn btn-outline-primary">
												Get Started
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 mb-4">
								<div className="card h-100 shadow-lg">
									<div className="card-body">
										<div className="text-center p-3">
											<h5 className="card-title">Pro Plan</h5>
											<h6 className="card-subtitle mb-2 text-muted">$9.99/month</h6>
										</div>
										<ul className="list-group list-group-flush text-center">
											<li className="list-group-item">10 GB Storage</li>
											<li className="list-group-item">20 Templates</li>
											<li className="list-group-item">24/7 Support</li>
										</ul>
										<div className="text-center p-3">
											<button type="button" className="btn btn-outline-primary">
												Get Started
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 mb-4">
								<div className="card h-100 shadow-lg">
									<div className="card-body">
										<div className="text-center p-3">
											<h5 className="card-title">Enterprise Plan</h5>
											<h6 className="card-subtitle mb-2 text-muted">Contact Us</h6>
										</div>
										<ul className="list-group list-group-flush text-center">
											<li className="list-group-item">Unlimited Storage</li>
											<li className="list-group-item">Unlimited Templates</li>
											<li className="list-group-item">Priority Support</li>
										</ul>
										<div className="text-center p-3">
											<button type="button" className="btn btn-outline-primary">
												Get Started
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <div className="price">
        {prices.map((plan) => (
          <HomePagePricingCard
            planType={plan.planType}
            planDescription={plan.planDescribtion}
            planPrice={plan.planPricing}
          />
        ))}
      </div> */}
		</div>
	);
};

export default HomePage;
