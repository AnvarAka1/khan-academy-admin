import React from "react";
import classes from "./Author.module.scss";
const author = ({ children }) => {
	return <div className={classes.Author}>{children}</div>;
};

export default author;
