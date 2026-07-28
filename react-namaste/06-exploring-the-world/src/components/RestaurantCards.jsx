import {CDN_URl} from "../utils/constants";

const RestaurantCards = ({resData: {name , cloudinaryImageId , avgRating  , cuisines }}) => {
	return (
		<div className={"rest-card"}>
			<img className={"res-image"}
			     src={CDN_URl + cloudinaryImageId}
			     alt="restaurant-image"/>
			<h2>{name}</h2>
			<h4>{cuisines.join(" , ")}</h4>
			<h4>{avgRating}</h4>
		</div>
	);
};

export default RestaurantCards;