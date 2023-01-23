import "./menu.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
	const [data, setData] = useState([]);
	const [category, setCategory] = useState([]);
	const [filter, setFilter] = useState([]);

	const FilteredProducts = (idx) => {
		let filterProducts = data.filter((value) => {
			return value.categoryId === idx + 1;
		});
		setFilter(filterProducts);
	};

	useEffect(() => {
		const GetData = async () => {
			try {
				let response = await axios.get("http://localhost:5005/productData");
				let resCategory = await axios.get("http://localhost:5005/productData/category");

				let filterProducts = response.data.data.filter((value) => {
					return value.categoryId === 2;
				});

				setData(response.data.data);
				setFilter(filterProducts);
				setCategory(resCategory.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		GetData();
	}, []);

	return (
		<>
			<div className="flex pt-24">
				<div className="basis-1/6 flex flex-col">
					{category.map((value, index) => {
						return (
							<button onClick={() => FilteredProducts(index)} className="my-3 mr-3" key={index}>
								{value.name}
							</button>
						);
					})}
				</div>
				<div className="basis-5/6 flex flex-wrap border-l-[2px] pt-4 h-screen">
					{" "}
					{filter.map((value, index) => {
						return (
							<button
								key={index}
								className="basis-1/4 flex flex-col justify-center items-center mb-5"
							>
								<Link to={`/productData/detail/${value.id}`}>
									<div className="flex justify-center items-center">
										<img
											src={`${value.img}`}
											width={"200px"}
											className="rounded-full"
											alt="drinks"
										/>
									</div>
									<div className="flex justify-center items-center">
										<p className="pt-3">{value.name}</p>
									</div>
								</Link>
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
}
