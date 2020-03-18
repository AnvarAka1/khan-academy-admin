import React from "react";
import Author from "./Author/Author";
import { Label } from "reactstrap";
const authors = ({ authors }) => {
	const authorsView = authors.authors.map(author => {
		return <Author key={author.id}>{author.name}</Author>;
	});
	const translatorsView = authors.translators.map(author => {
		return <Author key={author.id}>{author.name}</Author>;
	});
	const editorsView = authors.editors.map(author => {
		return <Author key={author.id}>{author.name}</Author>;
	});
	return (
		<div>
			<Label>Authors</Label>
			<div className="d-flex align-items-center">{authorsView}</div>
			<Label>Translators</Label>
			<div className="d-flex align-items-center">{translatorsView}</div>
			<Label>Editors</Label>
			<div className="d-flex align-items-center">{editorsView}</div>
		</div>
	);
};

export default authors;
