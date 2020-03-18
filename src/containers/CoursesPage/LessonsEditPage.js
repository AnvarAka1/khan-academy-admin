import React, { useEffect } from "react";
import { Container, Col, Row, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { useSelect, useForm } from "../../hooks";
import Select from "react-select";
import { Breadcrumb, MainForm, Submenu } from "../../ccomponents/";
const LessonsEditPage = props => {
	// const [ selectedGroup, setSelectedGroup ] = useState(null);
	// const selectHandler = selected => {
	// 	setSelectedGroup(selected);
	// };

	const titleControl = useForm();
	const slugControl = useForm();
	const exerciseControl = useForm();
	const orderControl = useForm();
	const moduleControl = useForm();
	const unitControl = useForm();

	const statusSelect = useSelect();
	const courseSelect = useSelect();
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
		courseSelect.initOptions(optionGroup);
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
				<Input
					placeholder="Paste link here"
					id="exercise"
					className="form-control"
					value={exerciseControl.value}
					onChange={exerciseControl.onChange}
				/>
			</FormGroup>
		</React.Fragment>
	);
	const subContent = (
		<React.Fragment>
			<FormGroup>
				<Label>Course</Label>
				<Select
					value={courseSelect.value}
					onChange={courseSelect.selectHandler}
					options={courseSelect.options}
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
			<FormGroup>
				<Label for="module">Module:</Label>
				<Input
					placeholder=""
					id="module"
					className="form-control"
					value={moduleControl.value}
					onChange={moduleControl.onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="unit">Unit:</Label>
				<Input
					placeholder=""
					id="unit"
					className="form-control"
					value={unitControl.value}
					onChange={unitControl.onChange}
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
							>
								{content}
							</MainForm>
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

export default LessonsEditPage;
