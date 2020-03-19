import React, { useEffect } from "react";
import { Container, Col, Row, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { useSelect, useForm } from "../../hooks";
import Select from "react-select";
import { Breadcrumb, MainForm, Submenu } from "../../ccomponents/";
const GuidesEditPage = props => {
	const titleControl = useForm();
	const slugControl = useForm();
	const parentArticleControl = useForm();
	const orderControl = useForm();
	const statusSelect = useSelect();
	const guideSelect = useSelect();
	const chapterSelect = useSelect();
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
		guideSelect.initOptions(optionGroup);
		// eslint-disable-next-line
	}, []);
	const submitHandler = () => {
		console.log("Submitted!");
	};
	const deleteHandler = () => {
		console.log("Deleted!");
	};

	const subContent = (
		<React.Fragment>
			<FormGroup>
				<Label>Guide</Label>
				<Select value={guideSelect.value} onChange={guideSelect.selectHandler} options={guideSelect.options} />
			</FormGroup>
			<FormGroup>
				<Label>Chapter</Label>
				<Select
					value={chapterSelect.value}
					onChange={chapterSelect.selectHandler}
					options={chapterSelect.options}
				/>
			</FormGroup>

			<FormGroup>
				<Label for="parent-article">Parent article:</Label>
				<Input
					placeholder=""
					id="parent-article"
					className="form-control"
					value={parentArticleControl.value}
					onChange={parentArticleControl.onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="order">Order:</Label>
				<Input
					placeholder=""
					id="order"
					className="form-control"
					value={orderControl.value}
					onChange={orderControl.onChange}
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
								titleControl={titleControl}
								slugControl={slugControl}
								formEdited={formEditChangeHandler}
							/>
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

export default GuidesEditPage;
