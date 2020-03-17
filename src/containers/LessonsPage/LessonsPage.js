import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "reactstrap";

import { DataTable, Breadcrumb } from "../../ccomponents";

const LessonsPage = props => {
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
	}, []);

	const editHandler = index => {
		props.history.push(props.match.path + "/" + index);
	};
	return (
		<div className="container-fluid">
			<Breadcrumb />
			<Row className="align-items-center">
				<Col>{!loading && <DataTable data={data} striped bordered responsive />}</Col>
			</Row>
		</div>
	);
};
const getTableData = () => {
	const data = {
		columns: [
			{
				label: "Title",
				field: "title",
				sort: "asc",
				width: 150
			},
			{
				label: "Course",
				field: "course",
				sort: "asc",
				width: 270
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
				course: "Algebra 2",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			},
			{
				title: "Intro to combining functions",
				course: "Algebra 2",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			},
			{
				title: "Intro to combining functions",
				course: "Algebra 2",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			},
			{
				title: "Intro to combining functions",
				course: "Algebra 2",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			},
			{
				title: "Intro to combining functions",
				course: "Algebra 2",
				views: "3746",
				pubDate: "43%",
				status: "draft"
			}
		]
	};
	return data;
};
export default LessonsPage;
