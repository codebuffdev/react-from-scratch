import RestaurantCards from "./RestaurantCards";
import {RESTAURANT_LIST} from "../utils/mockData";
import {useState} from "react";
import "./btns-top-control.css";

const Body = () => {
	const [restaurantList, setRestaurantList] = useState(RESTAURANT_LIST.cards);
	return (
		<div className={"body"}>
			<div className={"top-controls"}>
				<div className={"search-container"}>
					<input type={"text"} placeholder={"Search"}/>
					<button type={"submit"}>Search</button>
				</div>
				<div className={"filter-container"}>
					<button className={"filter-restaurant"} onClick={() => {
						const filteredRestaurant = restaurantList.filter(
							(restaurant) => restaurant.card.card.info.avgRating > 4
						)
						setRestaurantList(filteredRestaurant);
					}
					}>Top-rated restaurant
					</button>
				</div>
			</div>
			<div className={"rest-container"}>
				{/*<RestaurantCards resData = {RESTAURANT_LIST.cards?.[0]}/>*/}
				{
					/*RESTAURANT_LIST?.cards.map((restaurant) =>
						<RestaurantCards key = {restaurant?.card?.card?.info?.id} resData = {restaurant}/>
					)*/
					restaurantList.map(
						({card}) => <RestaurantCards key={card?.card?.info?.id} resData={card?.card?.info}/>
					)
				}
			</div>
		</div>
	);
};

export default Body;