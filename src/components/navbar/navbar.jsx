import "./navbar.css";
import logo from "../../supports/assets/logo.png";
import pin from "../../supports/assets/maps-and-flags.png";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function Navbar(props) {
	const location = useLocation();

	return (
		<div className="navbar fixed flex justify-between w-screen h-24 px-10 font-bold text-sm">
			<div className="flex items-center justify-center text-md">
				<button className="mr-10">
					<Link to={"/"}>
						<img src={logo} alt="logo" width={"50px"} />
					</Link>
				</button>
				{location.pathname === "/signin" || location.pathname === "/register" ? null : (
					<>
						<button className="mr-6 font-bold">
							<Link to={"/menu"}>ORDER</Link>
						</button>
						<button className="mr-6 font-bold">CARDS</button>
						<button className="font-bold">GIFT</button>
					</>
				)}
			</div>
			<div className="flex justify-center items-center">
				{location.pathname === "/signin" || location.pathname === "/register" ? null : (
					<>
						<button className="mr-9 flex items-center">
							<img src={pin} width="20px" alt="" className="mr-2" />
							Find a store
						</button>
						{props.data.username ? (
							<>
								<div className="px-2">{props.data.username}</div>
								<button onClick={props.myFunc.onLogout}>
									<CgProfile />
								</button>
							</>
						) : (
							<>
								<button className="border-[1px] border-black py-[5px] px-4 rounded-full mr-4 text-sm">
									<Link to={"/signin"}>Sign in</Link>
								</button>
								<button className="border-[1px] border-black py-[5px] px-4 rounded-full text-white bg-black text-sm mr-4">
									<Link to={"/register"}>Join now</Link>
								</button>
								<button
									className="border-[1px] border-black py-[5px] px-4 rounded-full mr-4 text-sm"
									onClick={props.myFunc.GLogin}
								>
									Sign in with Google
								</button>
							</>
						)}
					</>
				)}
			</div>
		</div>
	);
}
