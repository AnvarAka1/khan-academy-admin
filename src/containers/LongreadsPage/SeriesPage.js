import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "reactstrap";

import { DataTable, Breadcrumb } from "../../ccomponents";

const SeriesPage = props => {
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		// axios.then

		const columnsData = [ ...getTableData().columns ];
		columnsData.push({
			label: "Edit",
			field: "edit",
			sort: "asc",
			width: 150
		});
		const rowsData = getTableData().rows.map((row, index) => {
			console.log(row);
			return {
				...row,
				edit: (
					<Button key={index} onClick={() => editHandler(index)}>
						Edit
					</Button>
				)
			};
		});
		console.log(rowsData);
		const resData = {
			columns: columnsData,
			rows: rowsData
		};
		setData(resData);
		setLoading(false);
		// eslint-disable-next-line
	}, []);

	const editHandler = index => {
		props.history.push(props.match.path + "/edit/" + index);
	};
	return (
		<div className="container-fluid">
			<Breadcrumb />
			<Row className="align-items-center">
				<Col>
					{!loading && <DataTable data={data} link={props.match.path + "/add"} striped bordered responsive />}
				</Col>
			</Row>
		</div>
	);
};
const getTableData = () => {
	const data = {
		columns: [
			{
				label: "ID",
				field: "id",
				sort: "asc",
				width: 150
			},
			{
				label: "Title",
				field: "title",
				sort: "asc",
				width: 150
			},
			{
				label: "Category",
				field: "category",
				sort: "asc",
				width: 270
			},
			{
				label: "# of Longreads",
				field: "longreadsNumber",
				sort: "asc",
				width: 100
			},
			{
				label: "Views",
				field: "views",
				sort: "asc",
				width: 200
			},
			{
				label: "Pub date",
				field: "pubDate",
				sort: "asc",
				width: 100
			},
			{
				label: "Status",
				field: "status",
				sort: "asc",
				width: 150
			}
		],
		rows: [
			{
				title: "Intro to combining functions",
				category: "Algebra 2",
				longreadsNumber: "255",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			},
			{
				title: "Intro to combining functions",
				category: "Physics 2",
				longreadsNumber: "255",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			},
			{
				title: "Intro to combining functions",
				category: "Algebra 2",
				longreadsNumber: "255",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			},
			{
				title: "Intro to combining functions",
				category: "Algebra 2",
				longreadsNumber: "255",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			},
			{
				title: "Intro to combining functions",
				category: "Algebra 2",
				longreadsNumber: "255",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			}
		]
	};
	return data;
};
export default SeriesPage;
