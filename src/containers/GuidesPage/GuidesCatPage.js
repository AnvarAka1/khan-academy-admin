import React from "react";
import { useForm, useSelect } from "../../hooks";

import { Row, Col, Card, CardBody, Container, Input, FormGroup, Form, Label } from "reactstrap";
import { CatSubmenu } from "../../ccomponents";

import { Breadcrumb } from "../../ccomponents";

const GuidesCatPage = props => {
	const titleControl = useForm();
	const slugControl = useForm();
	const metaKeysControl = useForm();
	const metaDescControl = useForm();
	const pCatSelect = useSelect();
	const orderControl = useForm();

	const submitHandler = event => {
		event.preventDefault();
		console.log("Submitted!");
	};
	const deleteHandler = () => {
		console.log("Deleted");
	};

	return (
		<Container fluid>
			<Breadcrumb title={"Course categories"} />
			<Row>
				<Col md={6}>
					<Card>
						<CardBody />
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<CardBody>
							<Form>
								<div className="w-75 mb-5">
									<CatSubmenu
										titleControl={titleControl}
										slugControl={slugControl}
										metaKeysControl={metaKeysControl}
										metaDescControl={metaDescControl}
										pCatSelect={pCatSelect}
										submitted={submitHandler}
										deleted={deleteHandler}
									>
										<FormGroup>
											<Label>Order</Label>
											<Input value={orderControl.value} onChange={orderControl.onChange} />
										</FormGroup>
									</CatSubmenu>
								</div>
							</Form>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default GuidesCatPage;
