import React from "react";
import { Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
const breadcrumb = ({ title, locations }) => {
	const lastLocation = locations.length - 1;
	return (
		<Row className="align-items-center">
			<Col sm={6}>
				<div className="page-title-box">
					<h4 className="font-size-18">{title}</h4>
					<ol className="breadcrumb mb-0">
						{locations.map((location, index) => {
							return (
								<li
									key={location.name}
									className={`breadcrumb-item ${lastLocation === index && "active"}`}
								>
									{lastLocation !== index ? (
										<Link to={location.link}>{location.name}</Link>
									) : (
										<React.Fragment>{location.name}</React.Fragment>
									)}
								</li>
							);
						})}
					</ol>
				</div>
			</Col>
		</Row>
	);
};
breadcrumb.defaultProps = {
	title: "Some Title",
	locations: []
};
export default breadcrumb;
