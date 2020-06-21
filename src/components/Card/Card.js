import React from 'react';
import './Card.css';

const Card = ({ email, name }) => {
	return (
		<div className="main-container">
			<h3>{name}</h3>
			<p>{email}</p>
		</div>
	);
};

export default Card;
