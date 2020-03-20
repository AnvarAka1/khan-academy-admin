import React from "react";
import Category from "./Category/Category";
const categories = ({ categories, clicked }) => {
	let counter = 0;
	console.log(console.log(categories));
	return <div>{listCategoriesViaRecursion(categories, counter, clicked)}</div>;
};

const listCategoriesViaRecursion = (categories, counter, clicked) => {
	return categories.map(cat => {
		if ((cat.categories && cat.categories.length) > 0) {
			const subcat = (
				<React.Fragment key={cat.id}>
					<Category
						title={cat.title}
						clicked={() => clicked(cat.id, counter)}
						isOpen={cat.isOpen}
						counter={counter}
						number={cat.count}
					/>
					{listCategoriesViaRecursion(cat.categories, ++counter, clicked)}
				</React.Fragment>
			);
			--counter;
			return subcat;
		}
		return (
			<Category
				key={cat.id}
				title={cat.title}
				isOpen={cat.isOpen}
				clicked={() => clicked(cat.id, counter)}
				counter={counter}
				number={cat.count}
			/>
		);
	});
};

export default categories;
