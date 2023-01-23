import { Link } from "react-router-dom";
import "./signin.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function SignIn(props) {
	const [usernameSignIn, setUsernameSignIn] = useState("");
	const [passwordSignIn, setPasswordSignIn] = useState("");

	if (props.isRedirect.redirect) return <Navigate to={"/"} />;
	return (
		<div className="signin flex flex-col items-center pt-28">
			<div>
				<h1 className="font-bold text-2xl pt-5">Sign in or create an account</h1>
			</div>

			<div className="w-full max-w-lg mt-10 p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
				<form className="space-y-6" action="#">
					<h5 className="text-sm font-medium text-gray-900">*indicates required field</h5>

					<input
						type="email"
						name="email"
						id="email"
						className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 py-4"
						placeholder="* Username or email address"
						onChange={(event) => setUsernameSignIn(event.target.value)}
						value={usernameSignIn}
						required
					/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="* password"
						className="border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 py-4"
						onChange={(event) => setPasswordSignIn(event.target.value)}
						value={passwordSignIn}
						required
					/>
					<div className="flex w-fit">
						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input
									id="remember"
									type="checkbox"
									value=""
									className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
									required
								/>
							</div>
							<label className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">
								Keep me signed in.
							</label>
						</div>
						<a href="/" className="ml-auto text-lg my-fc hover:underline">
							Details
						</a>
					</div>
					<div className="flex flex-col text-lg font-medium">
						<a href="/" className="my-fc font-bold underline underline-offset-1 w-fit">
							Forgot your username?
						</a>
						<a href="/" className="my-fc font-bold underline underline-offset-1 w-fit">
							Forgot your password?
						</a>
					</div>
					<div className="flex justify-end">
						<button
							type="submit"
							onClick={() => props.myFunc.OnLogin(usernameSignIn, passwordSignIn)}
							className="text-white my-bg focus:ring-[1px] focus:outline-none focus:ring-black font-medium rounded-full text-lg px-5 py-2.5 text-center"
						>
							Sign in
						</button>
					</div>
				</form>
			</div>

			<div className="flex flex-col items-center max-w-lg p-6 py-10 mt-10 my-sbg rounded-lg">
				<h5 className="mb-2 text-md text-gray-900 dark:text-white">JOIN STARBUCKS&reg; REWARDS</h5>
				<p className="flex flex-col items-center text-sm px-5 text-center text-gray-700">
					Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with
					your phone, and more.
				</p>
				<button
					type="submit"
					className="my-fc font-medium border-[1px] border-black rounded-full text-lg px-4 py-[4px] mt-5 text-center"
				>
					<Link to={"/register"}>Join now</Link>
				</button>
			</div>
		</div>
	);
}
