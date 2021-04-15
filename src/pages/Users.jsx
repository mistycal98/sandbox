/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Users = () => {
	// console.log(process.env.REACT_APP_URL);
	const [users, setUsers] = useState([]);
	const { id } = useParams();

	const fetchUsers = async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_URL}/users/${id}`);
		setUsers([data]);
	};

	useEffect(() => {
		fetchUsers();
		return () => {};
	}, []);

	if (users.length >= 1) {
		return (
			<div data-testid="resolved">
				{users.map((user) => (
					<p key={user.id}>{user.name}</p>
				))}
			</div>
		);
	}

	return (
		<>
			<div data-testid="loading">Loading....</div>
		</>
	);
};

export default Users;
