import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Menu from "./pages/menu/menu";
import Register from "./pages/register/register";
import SignIn from "./pages/signin/signin";
import { useState, useEffect } from "react";
import axios from "axios";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../src/firebase";
import ProductDetails from "./pages/productDetail/productDetail";

function App() {
	const [username, setUsername] = useState("");
	const [redirect, setRedirect] = useState(false);

	let OnLogin = async (email, password) => {
		try {
			let response = await axios.post("http://localhost:5005/user/login/", { email, password });
			localStorage.setItem("tokenUID", response.data.data.uuid);
			setUsername(response.data.data.email);
			setTimeout(() => {
				setRedirect(true);
			}, 1500);
		} catch (error) {
			console.log(error);
		}
	};

	const GLogin = async () => {
		const provider = new GoogleAuthProvider();
		try {
			let response = await signInWithPopup(auth, provider);
			localStorage.setItem("GUID", response.user.uid);
			setUsername(response.user.email);
		} catch (error) {
			console.log(error);
		}
	};

	let onLogout = () => {
		localStorage.removeItem("GUID");
		localStorage.removeItem("token");
		signOut(auth);
		setRedirect(false);
		setUsername("");
	};
	async function checkIsLogin() {
		try {
			let getToken = localStorage.getItem("tokenUID");
			if (getToken) {
				let response = await axios.get(`http://localhost:5005/user/check?token=${getToken}`);
				setUsername(response.data.data.email);
				setRedirect(true);
			}
		} catch (error) {}
	}

	useEffect(() => {
		checkIsLogin();
		if (localStorage.getItem("tokenUID")) {
			onAuthStateChanged(auth, (user) => {
				setUsername(user.email);
			});
		}
	}, []);

	return (
		<>
			<script src="../path/to/flowbite/dist/flowbite.js"></script>
			<Navbar data={{ username }} myFunc={{ onLogout, GLogin }} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn myFunc={{ OnLogin }} isRedirect={{ redirect }} />} />
				<Route path="/register" element={<Register isRedirect={{ redirect }} />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/productdetails/:id" element={<ProductDetails />} />
			</Routes>
		</>
	);
}

export default App;
