import React from "react";
import { MDBDataTable } from "mdbreact";
const dataTable = props => {
	return (
		<div className="row">
			<div className="col-12">
				<div className="card">
					<div className="card-body">
						<MDBDataTable {...props} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default dataTable;
