import React from "react";
import { MDBDataTable } from "mdbreact";
import { Button, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
const dataTable = props => {
	return (
		<Row>
			<Col>
				<Card>
					<CardBody>
						{props.link && (
							<div className="text-right mb-2">
								<Link to={props.link}>
									<Button className="primary">Add new</Button>
								</Link>
							</div>
						)}
						<MDBDataTable {...props} />
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
};

export default dataTable;
