import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { withRouter, Link } from "react-router-dom";

// users
import user4 from "../assets/images/users/user-4.jpg";

const ProfileMenu = ({ fullName }) => {
	const [ menu, setMenu ] = useState(false);

	const toggle = () => {
		setMenu(!menu);
	};

	return (
		<React.Fragment>
			<Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
				<DropdownToggle
					className="btn header-item waves-effect d-flex align-items-center "
					id="page-header-user-dropdown"
					tag="button"
				>
					<p className="mb-0 mr-3">{fullName}</p>
					<img className="rounded-circle header-profile-user" src={user4} alt="Header Avatar" />
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem tag="a" href="#">
						<span className="badge badge-success float-right">11</span>
						<i className="mdi mdi-settings font-size-17 align-middle mr-1" />Settings
					</DropdownItem>
					<div className="dropdown-divider" />
					<Link to="/logout" className="dropdown-item">
						<i className="mdi mdi-logout font-size-17 align-middle mr-1" />
						<span>Logout</span>
					</Link>
				</DropdownMenu>
			</Dropdown>
		</React.Fragment>
	);
};
ProfileMenu.defaultProps = {
	fullName: "John Doe"
};
export default withRouter(ProfileMenu);
