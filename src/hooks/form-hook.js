import { useState } from "react";
export const useForm = () => {
	const [ value, setValue ] = useState("");
	const initInput = value => {
		setValue(value);
	};

	const inputChangeHandler = event => {
		setValue(event.target.value);
	};
	return {
		value,
		initInput,
		onChange: inputChangeHandler
	};
};
