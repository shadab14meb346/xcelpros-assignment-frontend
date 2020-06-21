import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { getRegisteredUsers } from '../../http/user';
import './Dashboard.css';

const Dashboard = () => {
	const [registeredUsers, setRegisteredUsers] = useState([]);
	useEffect(() => {
		console.log(localStorage.getItem('token'));
		async function fetchRegisteredUsers() {
			const res = await getRegisteredUsers();
			setRegisteredUsers(res.data);
		}
		fetchRegisteredUsers();
	}, []);
	return (
		<div className="main">
			<h1>Dashboard</h1>
			<div className="content">
				{registeredUsers.map(({ email, name, _id }) => {
					return <Card key={_id} email={email} name={name} />;
				})}
			</div>
		</div>
	);
};

export default Dashboard;
