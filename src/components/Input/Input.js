import React from 'react';
import './Input.css';

const Input = ({ onChange, type, placeholder }) => {
	return (
		<>
			<input onChange={onChange} type={type} placeholder={placeholder} />
		</>
	);
};

export default Input;
