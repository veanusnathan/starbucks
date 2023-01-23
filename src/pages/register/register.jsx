import "./register.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
	const [disabledButton, setDisabledButton] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async () => {
		const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
		try {
			setDisabledButton(true);

			let errPassMin = { message: "Password must have atleast 8 characters" };
			let errPassNaN = { message: "Password must contain atleast a number" };
			let errEmailAt = { message: "Invalid Email" };

			if (!email.includes("@")) {
				throw errEmailAt;
			} else if (password.length < 8) {
				throw errPassMin;
			} else if (!regex.test(password)) {
				throw errPassNaN;
			} else {
				const data = await axios.post("http://localhost:5005/user/create/", { email, password });
				localStorage.setItem("token", data.data.data.uuid);

				setFirstName("");
				setLastName("");
				setEmail("");
				setPassword("");
				setErrMsg("");
			}
		} catch (error) {
			setErrMsg(error.message);
		} finally {
			setDisabledButton(false);
		}
	};

	return (
		<>
			<div className="signin flex flex-col items-center pt-28">
				<div>
					<h1 className="font-bold text-3xl pt-5">Create an account</h1>
				</div>
				<div className="flex flex-col items-center max-w-lg p-6 py-10 rounded-lg">
					<h5 className="mb-2 text-md text-gray-900 ">STARBUCKS&reg; REWARDS</h5>
					<p className="items-center text-sm px-5 text-center text-gray-700">
						Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get
						access to mobile ordering, a birthday Reward, and{" "}
						<a href="/" className="underline underline-offset-1">
							more
						</a>
						.
					</p>
				</div>

				<div className="w-full max-w-xl mt-5 p-10 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
					<form className="space-y-6" action="#">
						<h5 className="text-sm font-medium text-gray-900">*indicates required field</h5>
						<h5 className="mb-2 text-md text-gray-900 ">Personal Information</h5>

						<input
							type="text"
							name="firstName"
							id="firstName"
							placeholder="* First name"
							onChange={(event) => setFirstName(event.target.value)}
							value={firstName}
							className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 py-4"
							required
						/>
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="* Last name"
							onChange={(event) => setLastName(event.target.value)}
							value={lastName}
							className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 py-4"
							required
						/>
						<h5 className="mb-2 text-md pt-5 text-gray-900 ">Account Security</h5>

						<input
							type="email"
							name="email"
							id="email"
							placeholder="* Email address"
							onChange={(event) => setEmail(event.target.value)}
							value={email}
							className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 py-4"
							required
						/>
						<p className="pl-4 text-xs sm-text">This will be your username</p>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="* password"
							onChange={(event) => setPassword(event.target.value)}
							value={password}
							className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 py-4"
							required
						/>
						<p className="pl-4 text-xs sm-text">
							Create a password 8 to 25 characters long that includes at least 1 uppercase and 1
							lowercase letter, 1 number and 1 special character like an exclamation point or
							asterisk.
						</p>
						<a href="/" className="text-lg pl-2 pt-5 my-fc underline">
							Already have a Starbucks gift card?
						</a>
						<p className="pl-4 text-sm sm-text">COLLECT MORE STARS & EARN REWARDS</p>
						<p className="pl-4 text-xs sm-text">
							Email is a great way to know about offers and what's new from Starbucks.
						</p>

						<div className="flex w-fit">
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value=""
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
									/>
								</div>
								<label className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">
									Yes, I'd like email from Starbucks
								</label>
							</div>
						</div>
						<div className="flex flex-row-reverse">
							<button
								disabled={
									firstName === "" ||
									lastName === "" ||
									email === "" ||
									password === "" ||
									disabledButton
								}
								onClick={() =>
									onSubmit(
										firstName,
										setFirstName,
										lastName,
										setLastName,
										email,
										setEmail,
										password,
										setPassword,
										setErrMsg,
										setDisabledButton
									)
								}
								type="submit"
								className="text-white my-bg focus:ring-[1px] focus:outline-none focus:ring-black font-medium rounded-full text-lg px-5 py-2.5 text-center"
							>
								Create account
							</button>
						</div>
						<div>{errMsg}</div>
					</form>
				</div>
			</div>
		</>
	);
}
