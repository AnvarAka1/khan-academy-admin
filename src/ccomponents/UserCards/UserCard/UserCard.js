import React from "react";
import classes from "./UserCard.module.scss";
import { Card, CardBody } from "reactstrap";
const userCard = ({ name, surname, email, role, avatar, edited, removed }) => {
	const roleString = [ "Superadmin", "admin" ];
	return (
		<Card>
			<CardBody>
				<div className="d-flex align-items-start border-bottom position-relative pb-2 mb-3">
					<div className={classes.ImageWrapper}>
						<img src={avatar} className="rounded-circle w-100" alt={name + " " + surname} />
					</div>
					<div className="ml-4 w-100">
						<h6>{name + " " + surname}</h6>
						<p className="mb-0">{email}</p>
						<p className="mb-0">{roleString[role]}</p>
					</div>
					<div className={classes.Buttons}>
						<p onClick={edited} className="mr-2">
							<i className="ti-pencil" />
						</p>
						<p onClick={removed}>
							<i className="ti-close" />
						</p>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default userCard;
