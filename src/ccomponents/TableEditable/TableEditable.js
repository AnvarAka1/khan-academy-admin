import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
const { SearchBar } = Search;
const tableEditable = ({ data }) => {
	return (
		<Row>
			<Col>
				<Card>
					<CardBody>
						<ToolkitProvider keyField="id" data={data.rows} columns={data.columns} search>
							{props => (
								<div>
									<SearchBar {...props.searchProps} />
									<hr />
									<BootstrapTable
										cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
										pagination={paginationFactory(getPaginationOption(data.rows))}
										{...props.baseProps}
									/>
								</div>
							)}
						</ToolkitProvider>
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
};
const getPaginationOption = data => {
	return {
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
};
export default tableEditable;
