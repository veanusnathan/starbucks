import axios from "axios";

export const DetailProducts = async () => {
	try {
		let response = await axios.get(
			"https://my-json-server.typicode.com/veanusnathan/json-server-E-Commerce/products"
		);
		return response.data;
	} catch (error) {}
};

export const GetData = async (paramSetData, paramSetFilter, paramSetCategory) => {
	try {
		let response = await axios.get(
			"https://my-json-server.typicode.com/veanusnathan/json-server-E-Commerce/products"
		);
		let resCategory = await axios.get(
			"https://my-json-server.typicode.com/veanusnathan/json-server-E-Commerce/categories"
		);

		let filterProducts = response.data.filter((value) => {
			return value.category === 0;
		});

		paramSetData(response.data);
		paramSetFilter(filterProducts);
		paramSetCategory(resCategory.data);
	} catch (error) {}
};
