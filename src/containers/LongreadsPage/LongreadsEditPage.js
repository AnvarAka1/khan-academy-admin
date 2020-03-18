import React, { useEffect } from "react";
import { Container, Col, Row, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { useSelect, useForm } from "../../hooks";
import Select from "react-select";
import { Breadcrumb, MainForm, Submenu, AudioVersion } from "../../ccomponents/";
const SeriesEditPage = props => {
	const titleControl = useForm();
	const slugControl = useForm();
	const metaDescControl = useForm();
	const orderControl = useForm();
	const statusSelect = useSelect();
	const seriesSelect = useSelect();
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
		seriesSelect.initOptions(optionGroup);
		// eslint-disable-next-line
	}, []);
	const submitHandler = () => {
		console.log("Submitted!");
	};
	const deleteHandler = () => {
		console.log("Deleted!");
	};
	const audioSelectHandler = () => {
		console.log("Selected!");
	};
	const audioRemoveHandler = () => {
		console.log("Removed!");
	};

	const subContent = (
		<React.Fragment>
			<FormGroup>
				<Label>Series</Label>
				<Select
					value={seriesSelect.value}
					onChange={seriesSelect.selectHandler}
					options={seriesSelect.options}
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
							<FormGroup className="mt-3">
								<Label for="Meta_desc">Meta description:</Label>
								<Input
									placeholder="eg: Intro to combining functions"
									id="Meta_desc"
									className="form-control"
									type="textarea"
									value={metaDescControl.value}
									onChange={metaDescControl.onChange}
								/>
							</FormGroup>
							<AudioVersion
								title={"intro-to-combining-functions asdsasdasda dsad as"}
								selected={audioSelectHandler}
								removed={audioRemoveHandler}
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

export default SeriesEditPage;
