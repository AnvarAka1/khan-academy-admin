import React from "react";
import classes from "./Category.module.scss";
const category = ({ title, number, counter, link }) => {
	return (
		<div className={`d-flex justify-content-between ${classes.Category}`}>
			<p style={{ paddingLeft: counter * 30 + "px", color: getColor(counter) }}>
				<i className="fa fa-bars mr-2" style={{ color: "#C9C9C9" }} />
				{title}
			</p>
			<p style={{ color: getColor(counter) }}>{number}</p>
		</div>
	);
};

const getColor = counter => {
	const colors = [ "#4945C4", "#C77000", "#43425D" ];
	return colors[counter];
};
export default category;
