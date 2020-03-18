import React from "react";
import Select from "react-select";
import { Form, FormGroup, Label, Button } from "reactstrap";
const submenu = ({ children, statusSelect, infos, src, submitted, deleted }) => {
	return (
		<React.Fragment>
			<ul className="ul">
				<li>Last edit: {infos.lastEdit}</li>
				<li>Published: {infos.published}</li>
				<li>Created: {infos.created}</li>
			</ul>
			<Form>
				<FormGroup>
					<Label>Status</Label>
					<Select
						value={statusSelect.value}
						onChange={statusSelect.selectHandler}
						options={statusSelect.options}
					/>
				</FormGroup>
				{children}

				<FormGroup>
					<Label>Thumbnail</Label>
					<img style={{ width: "100%" }} src={src} alt={"Thumbnail"} />
				</FormGroup>
				<div className="d-flex align-items-center justify-content-between">
					<Button type="submit" className="w-100 mr-1 primary" onClick={submitted}>
						Save
					</Button>
					<Button type="button" className="w-100 danger" onClick={deleted}>
						Delete
					</Button>
				</div>
			</Form>
		</React.Fragment>
	);
};
submenu.defaultProps = {
	infos: {
		lastEdit: "10 oct 2019",
		published: "10 oct 2019",
		created: "10 oct 2019"
	}
};
export default submenu;
