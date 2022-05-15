import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './styles/index.css';
import './styles/tour.css';
import logo from './Assets/logo.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {
	MdOutlineAirportShuttle,
	MdHotel,
	MdOutlinePersonOutline,
	MdLocalAirport,
} from 'react-icons/md';
import { IoTicketSharp } from 'react-icons/io5';
import { FaMapMarkedAlt, FaRegCalendarAlt, FaUserTie } from 'react-icons/fa';

function Tours() {
	const [tour, setTour] = useState([
		{
			_id: '',
			title: '',
			duration: null,
			description: '',
			price: null,
			day1: '',
			day2: '',
			day3: '',
			day4: '',
			day5: '',
			day6: '',
			day7: '',
		},
	]);

	// const source = process.env.REACT_APP_GOOGLE_MAP_KEY;

	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get('/myTours')
			.then((res) => {
				setTour(res.data);
			})
			.catch((error) => {
				setError(error);
			});
	}, []);

	if (error) return `Error: ${error.message}`;

	return (
		<div className="tourInfo" style={{ color: 'white', marginTop: '4em' }}>
			<h1 className="logo">
				<img src={logo} alt="Logo" />
			</h1>
			<section className="tourMainInfoContainer">
				<div>
					<h3>Why choose one of our Tours?</h3>
					<div className="iconContainer">
						<section className="mapContent">
							<FaMapMarkedAlt style={{ fontSize: '60px' }} />
							<p>Fully Ready made itineraries</p>
						</section>
						<section className="calendarContent">
							<FaRegCalendarAlt style={{ fontSize: '60px' }} />
							<p>Flexible Booking & Departures</p>
						</section>
						<section className="guideContent">
							<FaUserTie style={{ fontSize: '60px' }} />
							<p>Professional Tour Guides</p>
						</section>
					</div>
					<p
						style={{
							marginTop: '2em',
							width: '60%',
						}}
					>
						These tours have been created with you in mind. They have everything you need
						included, especially if this is your first time visiting St Petersburg. We
						have picked the must see places & things to do. I know your time and money is
						important when choosing how to use it. I want you to enjoy your time here. I
						want to take your stress away so you can focus on what you want to do, and
						that is relax. The memories you make here will be priceless.
					</p>
				</div>
			</section>
			<section className="tourContain">
				{tour.map((tour) => {
					return (
						<div key={tour._id} style={{ width: '100%' }} className="mainTourContainer">
							<section className="tourContent">
								<h2>{tour.title}</h2>
								<h3>Tour Duration: {tour.duration} days</h3>
								<h5>Price: ${tour.price} for 2 people</h5>
								<p
									style={{
										fontSize: '18px',
									}}
								>
									{tour.description}
								</p>
								<div style={{ fontSize: '18px' }}>
									{tour.day1} <br />
								</div>
								<div style={{ fontSize: '18px' }}>{tour.day2}</div>
								<div style={{ fontSize: '18px' }}>{tour.day3}</div>
								<div style={{ fontSize: '18px' }}>{tour.day4}</div>
								<div style={{ fontSize: '18px' }}>{tour.day5}</div>
								<div style={{ fontSize: '18px' }}>{tour.day6}</div>
								<div style={{ fontSize: '18px' }}>{tour.day7}</div>
							</section>

							<section>
								<h5>Included in this Tour: </h5>
								<ol className="listText">
									<li>
										Airport Pickup | <MdLocalAirport className="includedIcons" />
									</li>

									<li>
										Hotel | <MdHotel className="includedIcons" />
									</li>
									<li>
										Guide | <MdOutlinePersonOutline className="includedIcons" />
									</li>
									<li>
										Transportation | <MdOutlineAirportShuttle className="includedIcons" />
									</li>
									<li>
										Tickets | <IoTicketSharp className="includedIcons" />
									</li>
								</ol>
								<Button
									variant="contained"
									onClick={() => {
										alert('Tour Added');
									}}
									style={{
										width: '60%',
										marginLeft: '5rem',
										marginTop: '1em',
									}}
								>
									Add Tour
								</Button>
							</section>
						</div>
					);
				})}
			</section>
			<div>
				<p style={{ marginLeft: '16em', fontSize: '18px', fontFamily: 'roboto' }}>
					{' '}
					Want to customize your itinerary?
					<Link
						to="/custom_tours"
						className="navLinks"
						// style={{ textDecoration: "none" }}
					>
						{` Create your own here!`}
					</Link>
				</p>
			</div>
			<div className="mapContainer">
				<div className="leftContainer">
					<h3>Some info here:</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestiae
						corrupti architecto incidunt ipsam quis quibusdam amet dicta modi. At aliquam,
						illo dolore porro harum illum doloribus dolorum vitae eos.
					</p>
				</div>
				<iframe
					title="map"
					width="600"
					height="450"
					style={{ border: 0 }}
					loading="lazy"
					allowfullscreen
				/>
				<div className="rightContainer">
					<h1>Check the Calendar</h1>
					<p style={{ fontSize: '25px' }}>Russian Holidays:</p>
					<ul>
						<li>Jan 1st - New Year</li>
						<li>Feb 23rd - Men's Day</li>
						<li>Mar 8th - Women's Day</li>
						<li>May 9th - Victory Day</li>
						<li>May 27th - St Pete Founded</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Tours;
