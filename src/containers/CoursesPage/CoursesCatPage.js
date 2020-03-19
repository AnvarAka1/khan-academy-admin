import React, { useState, useEffect } from "react";
import { useForm, useSelect } from "../../hooks";

import { Row, Col, Card, CardBody, Container, Input, FormGroup, Form, Label } from "reactstrap";
import { CatSubmenu, Breadcrumb, Categories } from "../../ccomponents";
let depth = 0;
const CoursesCatPage = props => {
	const [ categories, setCategories ] = useState(null);
	const titleControl = useForm();
	const slugControl = useForm();
	const metaKeysControl = useForm();
	const metaDescControl = useForm();
	const pCatSelect = useSelect();
	const orderControl = useForm();

	useEffect(() => {
		let cats = getCategories();
		setCategories(initCategoriesViaRecursion(cats));
	}, []);

	const initCategoriesViaRecursion = cats => {
		if (depth > 3) {
			return;
		}
		depth++;
		return cats.map(cat => {
			return {
				...cat,
				isOpen: false,
				categories:
					(cat.categories && cat.categories.length) > 0 ? initCategoriesViaRecursion(cat.categories) : []
			};
		});
	};

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
						<CardBody>{categories && <Categories categories={categories} />}</CardBody>
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
const getCategories = () => {
	return [
		{
			id: 0,
			title: "Early math",
			count: "250",
			categories: []
		},
		{
			id: 1,
			title: "Arithmetics",
			count: "380",
			categories: [
				{
					id: 0,
					title: "Arithmetics_subcat_1",
					count: "28",
					categories: [
						{
							id: 0,
							title: "Arithmetics_subcat_1_subcat_1",
							count: "10",
							categories: []
						},
						{
							id: 1,
							title: "Arithmetics_subcat_1_subcat_2",
							count: "11",
							categories: []
						}
					]
				},
				{
					id: 1,
					title: "Arithmetics_subcat_2",
					count: "54",
					categories: [
						{
							id: 0,
							title: "Arithmetics_subcat_2_subcat_1",
							count: "2",
							categories: []
						},
						{
							id: 1,
							title: "Arithmetics_subcat_2_subcat_2",
							count: "14",
							categories: []
						}
					]
				},
				{
					id: 2,
					title: "Arithmetics_subcat_3",
					count: "54",
					categories: [
						{
							id: 0,
							title: "Arithmetics_subcat_3_subcat_1",
							count: "2",
							categories: []
						},
						{
							id: 1,
							title: "Arithmetics_subcat_3_subcat_2",
							count: "14",
							categories: []
						}
					]
				},
				{
					id: 3,
					title: "Arithmetics_subcat_4",
					count: "54",
					categories: [
						{
							id: 0,
							title: "Arithmetics_subcat_4_subcat_1",
							count: "45",
							categories: []
						},
						{
							id: 1,
							title: "Arithmetics_subcat_4_subcat_2",
							count: "30",
							categories: []
						}
					]
				}
			]
		},
		{
			id: 2,
			title: "Course category",
			count: "380",
			categories: []
		}
	];
};
export default CoursesCatPage;
