import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Type } from "react-bootstrap-table2-editor";
import { Breadcrumb, TablesEditable } from "../../ccomponents";

const UsersPage = props => {
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		// axios.then
		setLoading(true);

		const resData = getTableData();
		console.log("Now!");
		setData(resData);
		setLoading(false);

		// eslint-disable-next-line
	}, []);

	return (
		<div className="container-fluid">
			<Breadcrumb />
			<Row className="align-items-center">
				<Col>{!loading && <TablesEditable data={data} />}</Col>
			</Row>
		</div>
	);
};

const getTableData = () => {
	const data = {
		columns: [
			{
				dataField: "id",
				text: "ID"
			},
			{
				dataField: "fullname",
				text: "Fullname"
			},
			{
				dataField: "email",
				text: "E-mail"
			},
			{
				dataField: "phone",
				text: "Phone number"
			},
			{
				dataField: "gender",
				text: "Gender",
				editor: {
					type: Type.SELECT,
					options: [
						{
							value: "Male",
							label: "Male"
						},
						{
							value: "Female",
							label: "Female"
						}
					]
				}
			},
			{
				dataField: "age",
				text: "Age"
			}
		],
		rows: [
			{
				id: 0,
				fullname: "John Doe",
				email: "johndoe@gmail.com",
				phone: "+998933332222",
				gender: "Male",
				age: 33
			},
			{
				id: 1,
				fullname: "Doe John",
				email: "johndoe@gmail.com",
				phone: "+998933332222",
				gender: "Female",
				age: 33
			},
			{
				id: 2,
				fullname: "Doe John",
				email: "johndoe@gmail.com",
				phone: "+998933332222",
				gender: "Female",
				age: 33
			},
			{
				id: 3,
				fullname: "Doe John",
				email: "johndoe@gmail.com",
				phone: "+998933332222",
				gender: "Female",
				age: 33
			},
			{
				id: 4,
				fullname: "Doe John",
				email: "johndoe@gmail.com",
				phone: "+998933332222",
				gender: "Female",
				age: 33
			},
			{
				id: 5,
				fullname: "Doe John",
				email: "johndoe@gmail.com",
				phone: "+998933332222",
				gender: "Female",
				age: 33
			}
		]
	};
	return data;
};
export default UsersPage;
