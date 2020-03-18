import { useState } from "react";

export const useSelect = () => {
	const [ selectedValue, setSelectedValue ] = useState(null);
	const [ options, setOptions ] = useState([]);
	const selectHandler = value => {
		setSelectedValue(value);
	};
	const initOptions = options => {
		setOptions(options);
	};
	return {
		value: selectedValue,
		options,
		selectHandler,
		initOptions
	};
};
