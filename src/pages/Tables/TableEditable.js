import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
const { SearchBar } = Search;
const data = [
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" },
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" },
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" },
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" },
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" },
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" },
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" },
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" },
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" },
	{ title: "Intro to combining functions", course: "Algebra 2", views: 3700, pubdate: "43%", status: "draft" }
];

const columns = [
	{
		dataField: "title",
		text: "Title"
	},
	{
		dataField: "course",
		text: "Course",
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: "Algebra 2",
					label: "Algebra 2",
					default: true
				},
				{
					value: "Physics 1",
					label: "Physics 1"
				}
			]
		}
	},
	{
		dataField: "views",
		text: "Views",
		editable: false
	},
	{
		dataField: "pubdate",
		text: "Pub date",
		editable: false
	},
	{
		dataField: "status",
		text: "Status",
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: "Draft",
					label: "Draft"
				},
				{
					value: "Not_draft",
					label: "Not draft"
				}
			]
		}
	}
];

class TableEditable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const paginationOption = {
			paginationSize: 4,
			alwaysShowAllBtns: true, // Always show next and previous button
			withFirstAndLast: false, // Hide the going to First and Last page button
			firstPageText: "First",
			prePageText: "Back",
			nextPageText: "Next",
			lastPageText: "Last",
			nextPageTitle: "First page",
			prePageTitle: "Pre page",
			firstPageTitle: "Next page",
			lastPageTitle: "Last page",
			showTotal: true,
			// paginationTotalRenderer: customTotal,
			disablePageTitle: true,
			sizePerPageList: [
				{
					text: "5",
					value: 5
				},
				{
					text: "10",
					value: 10
				},
				{
					text: "All",
					value: data.length
				}
			]
		};
		return (
			<React.Fragment>
				<div className="container-fluid">
					<Row className="align-items-center">
						<Col sm={6}>
							<div className="page-title-box">
								<h4 className="font-size-18">Editable Table</h4>
								<ol className="breadcrumb mb-0">
									<li className="breadcrumb-item">
										<Link to="/#">Veltrix</Link>
									</li>
									<li className="breadcrumb-item">
										<Link to="/#">Tables</Link>
									</li>
									<li className="breadcrumb-item active">Editable Table</li>
								</ol>
							</div>
						</Col>

						<Col sm="6">
							<div className="float-right d-none d-md-block">
								<SettingMenu />
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<CardBody>
									<ToolkitProvider keyField="id" data={data} columns={columns} search>
										{props => (
											<div>
												<SearchBar {...props.searchProps} />
												<hr />
												<BootstrapTable
													cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
													pagination={paginationFactory(paginationOption)}
													{...props.baseProps}
												/>
											</div>
										)}
									</ToolkitProvider>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	}
}

export default TableEditable;
