import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { useSelect, useForm } from "../../hooks";
import Select from "react-select";
import { Breadcrumb, MainForm, Submenu, Authors } from "../../ccomponents/";
const SeriesEditPage = props => {
	// eslint-disable-next-line
	const [ authors, setAuthors ] = useState({
		authors: [
			{
				id: 0,
				name: "Elbek Bahromov"
			},
			{
				id: 1,
				name: "Another guy"
			}
		],

		translators: [
			{
				id: 0,
				name: "Elbek Bahromov"
			},
			{
				id: 1,
				name: "Another guy"
			}
		],

		editors: [
			{
				id: 0,
				name: "Elbek Bahromov"
			},
			{
				id: 1,
				name: "Another guy"
			},
			{
				id: 2,
				name: "Yet, another man"
			}
		]
	});
	const titleControl = useForm();
	const slugControl = useForm();
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
			<FormGroup>
				<Label>Head image</Label>
				<img
					src={"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"}
					alt="Head"
					style={{ width: "100%" }}
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
							<Authors authors={authors} />
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
