import React from "react";
import { Container, Col, Row, Card, CardBody, Form, FormGroup, Label, Input } from "reactstrap";
import { Breadcrumb, FormEditor } from "../../ccomponents/";
const LessonsEditPage = props => {
	const formEditChangeHandler = event => {
		console.log("Changed!");
	};
	return (
		<Container fluid>
			<Breadcrumb />
			<Row>
				<Col md={9}>
					<Card>
						<CardBody>
							<Form>
								<FormGroup>
									<Label for="lesson">Lesson title:</Label>
									<Input
										placeholder="eg: Intro to combining functions"
										id="lesson"
										className="form-control"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="slug">Slug:</Label>
									<Input
										id="slug"
										placeholder="intro-to-combining-functions"
										className="form-control"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="validatedCustomFileMultiple">Video:</Label>
									<div className="custom-file">
										<Input
											type="file"
											className="custom-file-input"
											id="validatedCustomFileMultiple"
											required
											multiple={true}
										/>
										<Label className="custom-file-label" for="validatedCustomFileMultiple">
											Choose the video
										</Label>
										<div className="invalid-feedback">Example invalid custom file feedback</div>
									</div>
								</FormGroup>
								<FormGroup>
									<Label for="exercise">Exercise:</Label>
									<Input placeholder="Paste link here" id="exercise" className="form-control" />
								</FormGroup>
								<FormEditor changed={formEditChangeHandler} />
							</Form>
						</CardBody>
					</Card>
				</Col>
				<Col md={3}>
					<Card>
						<CardBody>
							<ul>
								<li>Last edit: {"10 oct 2019"}</li>
								<li>Published: {"10 oct 2019"}</li>
								<li>Created: {"10 oct 2019"}</li>
							</ul>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default LessonsEditPage;
