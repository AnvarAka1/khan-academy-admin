import React from "react";
import { Button } from "reactstrap";
const buttons = ({ submitted, deleted, isFixed }) => {
	return (
		<div className={`d-flex align-items-center ${isFixed ? "justify-content-center" : "justify-content-between"}`}>
			<Button type="submit" className={`${isFixed ? "w-fixed" : "w-100"} mr-1 primary`} onClick={submitted}>
				Save
			</Button>
			<Button type="button" className={`${isFixed ? "w-fixed" : "w-100"} danger`} onClick={deleted}>
				Delete
			</Button>
		</div>
	);
};

export default buttons;
