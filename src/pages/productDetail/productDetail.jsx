import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function DetailProduct() {
	const productId = useParams();
	const selectSize = useRef();
	const selectTopping = useRef();
	const selectSugar = useRef();
	const selected = useRef();
	const [data, setData] = useState(null);
	const [sizeToShow, setSizeToShow] = useState(0);
	const [totalCart, setTotalCart] = useState(0);

	const onGetData = async () => {
		try {
			let response = await axios.get(`http://localhost:5005/productData/detail/${productId.id}`);
			console.log(response);
			setData(response.data);
		} catch (error) {}
	};

	let onSelectSize = () => {
		let indexSelectedSize = selectSize.current.value;
		console.log(indexSelectedSize);
		setSizeToShow(indexSelectedSize);
	};

	let onAddOrder = async () => {
		try {
			let myToken;

			if (localStorage.getItem("token")) {
				myToken = parseInt(localStorage.getItem("token"));
			} else {
				myToken = localStorage.getItem("tokenUid");
			}

			let dataToSend = {
				productsId: data.id,
				indexSize: parseInt(selectSize.current.value),
				indexTopping: parseInt(selectTopping.current.value),
				indexSugar: parseInt(selectSugar.current.value),
				quantity: 1,
				usersId: myToken,
			};
			let checkExist = await axios.get(
				`http://localhost:5000/cart?productsId=${data.id}&userId=${myToken}`
			);

			if (checkExist.data.length === 0) {
				let response = await axios.post("http://localhost:5000/cart", dataToSend);
				toast("Add to cart success.");
				onGetTotalCarts();
			} else {
				let newQuantity = checkExist.data[0].quantity + 1;
				let update = await axios.patch(`http://localhost:5000/cart/${checkExist.data[0].id}`, {
					quantity: newQuantity,
				});
				toast("Update quantity Success.");
			}
		} catch (error) {}
	};

	let onGetTotalCarts = async () => {
		try {
			let myToken = localStorage.getItem("token")
				? parseInt(localStorage.getItem("token"))
				: localStorage.getItem("tokenUid");

			if (myToken) {
				let response = await axios.get(`http://localhost:5000/cart?userId=${myToken}`);
				setTotalCart(response.data.length);
			}
		} catch (error) {}
	};

	useEffect(() => {
		onGetData();
		onGetTotalCarts();
	}, []);

	if (data === null) {
		return <div>Loading...</div>;
	}

	return (
		<div className="pt-28">
			<div></div>
			<div className="flex items-center bg-[#1F3933] h-[300px]">
				<div className="basis-2/5 flex justify-center">
					<img src={data.image} className="rounded-full w-[300px] h-[300px]" alt="productPic" />
				</div>
				<div className="basis-3/5 text-white">
					<h1 className="text-3xl font-bold ">{data.name}</h1>
					<h1 className="basis-3/5 text-xl mt-2">{data.size[sizeToShow].calories} Calories</h1>
					<h1 className="basis-3/5 my-fs-25 mt-2">
						Rp. {data.size[sizeToShow].price.toLocaleString()}
					</h1>
				</div>
			</div>
			<div className="flex mt-10">
				<div className="basis-1/3 px-24">
					<h1 className="my-fs-25 font-bold pb-2 border-b-[3px]">Size Options</h1>
					<select
						ref={selectSize}
						onClick={onSelectSize}
						className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						{data.size.map((value, index) => {
							return (
								<option key={index} value={index}>
									{value.option}
								</option>
							);
						})}
					</select>
				</div>
				<div className="basis-2/5">
					<h1 className="my-fs-25 font-bold pb-2 border-b-[3px]">Topping</h1>
					<select
						ref={selectTopping}
						className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						{data.topping.map((value, index) => {
							return <option value={index}>{value}</option>;
						})}
					</select>

					{data.sugar ? (
						<>
							<h1 className="my-fs-25 font-bold pb-2 mt-3 border-b-[3px]">Sugar</h1>
							<select
								ref={selectSugar}
								className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								{data.sugar.map((value, index) => {
									return <option value={index}>{value}</option>;
								})}
							</select>
						</>
					) : null}
				</div>
			</div>
			<div className="flex justify-end px-24 pt-40">
				<div className="relative">
					<button onClick={onAddOrder} className="bg-[#1F3933] text-white px-3 py-3 rounded-full">
						Add to order
					</button>
					<div
						// style={{ position: "absolute", top: "-20px", right: "-10px", zIndex: "-1" }}
						className="bg-[#1F3933] px-[10px] py-1 text-white rounded-full absolute top-[-20px] right-[-10px] -z-10"
					>
						{totalCart}
					</div>
				</div>
			</div>
			<Toaster />
		</div>
	);
}

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { DetailProducts } from "../../supports/contants/function";

// export default function ProductDetails() {
// 	const [data, setData] = useState([]);
// 	const [filter, setFilter] = useState([]);
// 	let { id } = useParams();

// 	useEffect(() => {
// 		setData(DetailProducts());
// 		setFilter(
// 			data.filter((value) => {
// 				return value.id === id;
// 			})
// 		);
// 	}, []);
// 	return (
// 		<>
// 			{console.log(data)}
// 			<div className="w-screen bg-[#1F3933] pt-28 text-white flex">
// 				{filter.map((value, index) => {
// 					return (
// 						<>
// 							<div className="basis-1/2">
// 								<img src={`${value.image}`} alt="product" />
// 							</div>
// 							<div className="basis-1/2">
// 								<div>${value.name}</div>
// 								<div>${value.size?.calories}</div>
// 							</div>
// 						</>
// 					);
// 				})}
// 			</div>
// 		</>
// 	);
// }
