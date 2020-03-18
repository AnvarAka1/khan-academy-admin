import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Select from "react-select";
import { Buttons } from "../";
const catSubmenu = ({
	children,
	titleControl,
	slugControl,
	metaKeysControl,
	metaDescControl,
	pCatSelect,
	submitted,
	deleted
}) => {
	return (
		<React.Fragment>
			<div className="w-75 mb-5">
				<FormGroup>
					<Label>Title</Label>
					<Input value={titleControl.value} onChange={titleControl.onChange} />
				</FormGroup>
				<FormGroup>
					<Label>Slug</Label>
					<Input value={slugControl.value} onChange={slugControl.onChange} />
				</FormGroup>
				<FormGroup>
					<Label>Meta keywords</Label>
					<Input value={metaKeysControl.value} onChange={metaKeysControl.onChange} />
				</FormGroup>
				<FormGroup>
					<Label>Meta description</Label>
					<Input value={metaDescControl.value} onChange={metaDescControl.onChange} />
				</FormGroup>

				{pCatSelect && (
					<FormGroup>
						<Label>Parent category</Label>
						<Select value={pCatSelect.value} options={pCatSelect.options} onChange={pCatSelect.onChange} />
					</FormGroup>
				)}
				{children}
			</div>

			<Buttons isFixed submitted={submitted} deleted={deleted} />
		</React.Fragment>
	);
};

export default catSubmenu;
