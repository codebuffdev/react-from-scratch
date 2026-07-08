import RestaurantCards from "./RestaurantCards";
import {RESTAURANT_LIST} from "../utils/mockData";

const Body = () => {
	return (
		<div className={"body"}>
			<div className={"search-container"}>
				<input type={"text"} placeholder={"Search"}/>
				<button type={"submit"}>Search</button>
			</div>
			<div className={"rest-container"}>
				{/*<RestaurantCards resData = {RESTAURANT_LIST.cards?.[0]}/>*/}
				{
					/*RESTAURANT_LIST?.cards.map((restaurant) =>
						<RestaurantCards key = {restaurant?.card?.card?.info?.id} resData = {restaurant}/>
					)*/
					RESTAURANT_LIST?.cards.map(
						({card}) => <RestaurantCards key={card?.card?.info?.id} resData={card?.card?.info}/>
					)
				}
			</div>
		</div>
	);
};

export default Body;