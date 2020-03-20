import React, { useState, useEffect } from "react";
import AvatarImg from "../../assets/images/users/avatar-2.jpg";
import { Container, Row } from "reactstrap";
import { UserCards, Breadcrumb } from "../../ccomponents";
const AdminsPage = props => {
	const [ users, setUsers ] = useState(null);
	useEffect(() => {
		const usersRes = getUsers();
		setUsers(usersRes);
	}, []);

	const editHandler = id => {
		console.log("Edit", id);
	};
	const removeHandler = id => {
		console.log("Remove", id);
	};
	return (
		<Container fluid>
			<Breadcrumb />
			<Row>{users && <UserCards users={users} edited={editHandler} removed={removeHandler} />}</Row>;
		</Container>
	);
};

const getUsers = () => {
	return [
		{
			id: 0,
			name: "David",
			surname: "James",
			email: "elbek2710@gmail.com",
			role: 0,
			avatar: AvatarImg
		},
		{
			id: 1,
			name: "David",
			surname: "James",
			email: "elbek2710@gmail.com",
			role: 0,
			avatar: AvatarImg
		},
		{
			id: 2,
			name: "David",
			surname: "James",
			email: "elbek2710@gmail.com",
			role: 0,
			avatar: AvatarImg
		},
		{
			id: 3,
			name: "David",
			surname: "James",
			email: "elbek2710@gmail.com",
			role: 0,
			avatar: AvatarImg
		},
		{
			id: 4,
			name: "David",
			surname: "James",
			email: "elbek2710@gmail.com",
			role: 0,
			avatar: AvatarImg
		},
		{
			id: 5,
			name: "David",
			surname: "James",
			email: "elbek2710@gmail.com",
			role: 0,
			avatar: AvatarImg
		}
	];
};
export default AdminsPage;
