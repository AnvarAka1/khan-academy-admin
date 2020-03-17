import React from "react";
// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const formEditor = ({ changed }) => {
	return (
		<React.Fragment>
			<Editor
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
				onChange={changed}
			/>
		</React.Fragment>
	);
};

export default formEditor;
