import React, { useEffect } from "react";
import { Container, Col, Row, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { useSelect, useForm } from "../../hooks";
import Select from "react-select";
import { Breadcrumb, MainForm, Submenu } from "../../ccomponents/";
const ChaptersEditPage = props => {
	const titleControl = useForm();
	const slugControl = useForm();
	const metaKeysControl = useForm();
	const metaDescControl = useForm();
	const statusSelect = useSelect();
	const categorySelect = useSelect();

	const formEditChangeHandler = event => {
		console.log("Changed!");
	};

	useEffect(() => {
		const optionGroup = [
			{
				label: "Picnic",
				options: [
					{ label: "Mustard", value: "Mustard" },
					{ label: "Ketchup", value: "Ketchup" },
					{ label: "Relish", value: "Relish" }
				]
			},
			{
				label: "Camping",
				options: [
					{ label: "Tent", value: "Tent" },
					{ label: "Flashlight", value: "Flashlight" },
					{ label: "Toilet Paper", value: "Toilet Paper" }
				]
			}
		];
		statusSelect.initOptions(optionGroup);
		categorySelect.initOptions(optionGroup);
		// eslint-disable-next-line
	}, []);
	const submitHandler = () => {
		console.log("Submitted!");
	};
	const deleteHandler = () => {
		console.log("Deleted!");
	};
	const content = (
		<React.Fragment>
			<FormGroup>
				<Label>Meta keywords</Label>
				<Input type="textarea" value={metaKeysControl.value} onChange={metaKeysControl.onChange} />
			</FormGroup>
			<FormGroup>
				<Label>Meta description</Label>
				<Input type="textarea" value={metaDescControl.value} onChange={metaDescControl.onChange} />
			</FormGroup>
		</React.Fragment>
	);
	const subContent = (
		<React.Fragment>
			<FormGroup>
				<Label>Category</Label>
				<Select
					value={categorySelect.value}
					onChange={categorySelect.selectHandler}
					options={categorySelect.options}
				/>
			</FormGroup>
		</React.Fragment>
	);
	return (
		<Container fluid>
			<Breadcrumb />
			<Row>
				<Col md={9}>
					<Card>
						<CardBody>
							<MainForm
								withoutFormEditor
								titleControl={titleControl}
								slugControl={slugControl}
								formEdited={formEditChangeHandler}
							>
								{content}
							</MainForm>

							{/* Chapters */}
						</CardBody>
					</Card>
				</Col>
				<Col md={3}>
					<Card>
						<CardBody>
							<Submenu
								statusSelect={statusSelect}
								src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"}
								submitted={submitHandler}
								deleted={deleteHandler}
							>
								{subContent}
							</Submenu>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ChaptersEditPage;
