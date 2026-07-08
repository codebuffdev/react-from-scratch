import "./style.css";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * Application Layout
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search bar
 * - RestaurantCardContainer
 *      - Restaurant Cards
 * Footer
 * - Copyright
 * - Links
 * - Address
 * */


const AppLayout = () => {
	return (
		<div className={"app"}>
			<Header/>
			<Body/>
		</div>)
};
export default AppLayout;