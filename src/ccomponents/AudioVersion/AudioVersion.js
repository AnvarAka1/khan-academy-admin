import React from "react";
import { Label, Button } from "reactstrap";
import classes from "./AudioVersion.module.scss";
const audioVersion = ({ title, selected, removed }) => {
	return (
		<div>
			<Label>Audio version</Label>
			<div className="d-flex  align-items-center">
				<p className={classes.Text}>{title}</p>
				<div className="d-flex">
					<Button className="simple simple-primary mr-3" onClick={selected}>
						Select
					</Button>
					<Button className="simple simple-danger" onClick={removed}>
						Remove
					</Button>
				</div>
			</div>
		</div>
	);
};

export default audioVersion;
