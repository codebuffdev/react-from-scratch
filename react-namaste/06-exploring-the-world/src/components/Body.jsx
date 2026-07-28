import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import "./btns-top-control.css";
import ShimmerUI from "./ShimmerUI.jsx";

const Body = () => {
	// Whenever state variable changes react re-render the component
	const [showTopRated, setShowTopRated] = useState(false);
	const [allRestaurants, setAllRestaurants] = useState([]); // source of truth
	const [restaurantList, setRestaurantList] = useState([]);
	const [searchText, setSearchText] = useState([]);

	// useEffect(arrCallbackFunction , dependencyArr) hook (function)
	useEffect(() => {
		const fetchData = async () => {
			// escape cors policy => https://corsproxy.io/?url=url
			const data = await fetch(
				"https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.46360&lng=85.87830&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
			);
			const responseData = await data.json();

			const filteredRestaurants = responseData.data.cards.filter(
				(item) => item.card?.card?.info,
			);
			setAllRestaurants(filteredRestaurants);
			setRestaurantList(filteredRestaurants);
		};
		fetchData();
	}, []);

	// conditional rendering
	if (allRestaurants.length === 0) {
		return <ShimmerUI />;
	}

	return (
		<div className={"body"}>
			<div className={"top-controls"}>
				{/* search bar */}
				<div className={"search-container"}>
					<input
						type={"text"}
						placeholder={"Search"}
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						type={"submit"}
						onClick={() => {
							const filteredRestaurants = allRestaurants.filter(
								(restaurant) =>
									restaurant.card.card.info.name
										.toLowerCase()
										.includes(searchText.toLowerCase()),
							);
							setRestaurantList(filteredRestaurants);
						}}
					>
						Search
					</button>
				</div>
				<div className={"filter-container"}>
					<button
						className={"filter-restaurant"}
						onClick={() => {
							if (!showTopRated) {
								const filteredRestaurant =
									allRestaurants.filter(
										(restaurant) =>
											restaurant.card.card.info
												.avgRating > 4,
									);
								setRestaurantList(filteredRestaurant);
								setShowTopRated((prev) => !prev);
							} else {
								setRestaurantList(allRestaurants);
								setShowTopRated((prev) => !prev);
							}
						}}
					>
						{showTopRated ? "Show All" : "Top-rated Restaurant"}
					</button>
				</div>
			</div>
			<div className={"rest-container"}>
				{restaurantList.map(({ card }) => (
					<RestaurantCards
						key={card?.card?.info?.id}
						resData={card?.card?.info}
					/>
				))}
			</div>
		</div>
	);
};

export default Body;
