import React from "react";
import { Col } from "reactstrap";
import UserCard from "./UserCard/UserCard";
const userCards = ({ users, edited, removed }) => {
	const usersView = users.map(user => {
		return (
			<Col key={user.id} md={4}>
				<UserCard {...user} edited={() => edited(user.id)} removed={() => removed(user.id)} />
			</Col>
		);
	});
	return <React.Fragment>{usersView}</React.Fragment>;
};

export default userCards;
