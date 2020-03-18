import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { FormEditor } from "../";
const mainForm = ({ children, titleControl, slugControl, formEdited }) => {
	return (
		<React.Fragment>
			<FormGroup>
				<Label for="lesson">Lesson title:</Label>
				<Input
					placeholder="eg: Intro to combining functions"
					id="lesson"
					className="form-control"
					value={titleControl.value}
					onChange={titleControl.onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="slug">Slug:</Label>
				<Input
					id="slug"
					placeholder="intro-to-combining-functions"
					className="form-control"
					value={slugControl.value}
					onChange={slugControl.onChange}
				/>
			</FormGroup>
			{children}
			<FormEditor changed={formEdited} />
		</React.Fragment>
	);
};

export default mainForm;
