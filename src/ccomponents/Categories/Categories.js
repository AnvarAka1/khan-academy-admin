import React from "react";
import Category from "./Category/Category";
const categories = ({ categories }) => {
	let counter = 0;
	console.log(console.log(categories));
	return <div>{listCategoriesViaRecursion(categories, counter)}</div>;
};

const listCategoriesViaRecursion = (categories, counter) => {
	let index = 0;

	return categories.map(cat => {
		index++;
		if ((cat.categories && cat.categories.length) > 0) {
			const subcat = (
				<React.Fragment key={cat.id}>
					<Category title={cat.title} counter={counter} />
					{listCategoriesViaRecursion(cat.categories, ++counter)}
				</React.Fragment>
			);
			--counter;
			return subcat;
		}

		if (categories.length === index) {
		}
		return <Category key={cat.id} title={cat.title} counter={counter} />;
	});
};

export default categories;
