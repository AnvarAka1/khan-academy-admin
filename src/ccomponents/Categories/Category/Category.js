import React from "react";

const category = ({ title, counter, link }) => {
	return <p style={{ marginLeft: counter * 30 + "px" }}>{title + " counter = " + counter}</p>;
};

export default category;
