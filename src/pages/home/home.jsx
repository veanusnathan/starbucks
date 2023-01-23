import "./home.css";
import pic1 from "../../supports/assets/rewards-carousel-1_tcm121-77064.webp";
import pic2 from "../../supports/assets/rewards-carousel-2_tcm121-77065.webp";
import pic3 from "../../supports/assets/rewards-carousel-3_tcm121-77066.webp";
import pic4 from "../../supports/assets/iced_drink.webp";
import pic5 from "../../supports/assets/hot_drink.webp";
import pic6 from "../../supports/assets/SFLOwnedArt_tcm121-82220.webp";
import pic7 from "../../supports/assets/FY23DeltaHolidayUnauthAppIMAGE_tcm121-81975.jpg";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className=" flex pt-24 h-screen">
			<div className="basis-2/5 flex justify-center items-center">
				<div className="flex fixed">
					<p className="sticky text-4xl font-bold">Joy to you 🎁</p>
				</div>
			</div>
			<div className="basis-3/5 flex-row sh-l pt-3 h-fit">
				<div className="px-9 font-bold">STARBUCKS&reg; REWARD</div>
				<div className="flex px-9">
					<div className="my-fc basis-1/3 mx-2 pt-4">
						<img src={pic1} className="rounded-lg" alt="pic1" />
						<div className="pt-4 font-bold">
							Let us treat you—earn and redeem Stars for free drinks, food and more.
						</div>
					</div>
					<div className="my-fc basis-1/3 mx-2 pt-4">
						<img src={pic2} className="rounded-lg" alt="pic2" />
						<div className="pt-4 font-bold">
							Customize your order in the app and pick it up when it's ready.
						</div>
					</div>
					<div className="my-fc basis-1/3 mx-2 pt-4">
						<img src={pic3} className="rounded-lg" alt="pic3" />
						<div className="pt-4 font-bold">
							Stop in on your birthday for a special treat on the house.
						</div>
					</div>
				</div>
				<div className="px-9 my-4">
					<button className="border rounded-full px-3 py-1 font-bold text-white bg-black">
						<Link to={"/register"}>Join now</Link>
					</button>
					<button className="border rounded-full px-3 py-1 font-bold ml-4">Learn more</button>
				</div>
				<div className="content flex flex-col items-center justify-center">
					<div className="card p-3 mt-5 rounded-xl shadow-md max-w-lg bg-white">
						<div className="text-3xl font-semibold mb-2">
							Answer a few questions to find something new
						</div>
						<hr />
						<div className="my-2">What type of drink are you looking for?</div>
						<button className="flex mt-2 w-full">
							<div className="card1 flex justify-between py-2 px-3 rounded-xl w-full home-r-btn">
								<div>
									<div className="font-bold flex justify-start text-xl">Iced</div>
									<div className="font-medium text-base">Cool off and uplift</div>
								</div>
								<img src={pic4} alt="" width={"50px"} />
							</div>
						</button>
						<button className="mt-4 w-full">
							<div className="card1 flex justify-between px-3 pt-1 rounded-xl w-full home-r-btn">
								<div>
									<div className="font-bold flex justify-start">Hot</div>
									<div className="font-medium">Warm up and get going</div>
								</div>
								<img src={pic5} alt="" width={"50px"} />
							</div>
						</button>
					</div>
					<div className="max-w-lg bg-white rounded-lg shadow-md mt-5">
						<a href="/">
							<img className="rounded-t-lg" src={pic6} alt="pic" />
						</a>
						<div className="p-5">
							<a href="/">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									Play for your chance to win
								</h5>
							</a>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Starbucks for Life is here. Join Starbucks® Rewards to play for gift cards, drinks
								and more.
							</p>
							<div className="flex flex-row-reverse">
								<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white my-bg rounded-full ">
									<Link to={"/register"}>Join now</Link>
								</button>
							</div>
						</div>
					</div>
					<div className="max-w-lg bg-white rounded-lg shadow-md mt-5">
						<a href="/">
							<img className="rounded-t-lg" src={pic7} alt="pic" />
						</a>
						<div className="p-5">
							<a href="/">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									Closer to moments that matter
								</h5>
							</a>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Add extra cheer this holiday season by joining Starbucks® Rewards, linking it to
								Delta SkyMiles® to unlock 1 mile per $1 spent at Starbucks (excludes taxes & tips).
							</p>
							<div className="flex flex-row-reverse">
								<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white my-bg rounded-full ">
									<Link to={"/register"}>Sign up + link</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
