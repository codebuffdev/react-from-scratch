import {FaCartShopping} from "react-icons/fa6";
import {LOGO_URL} from "../utils/constants";

const Header = () => {
	return (
		<div className={"header"}>
			<div className={"logo-container"}>
				<img className={"img-logo"}
				     src={LOGO_URL}
				     alt={"LOGO Image"}/>
			</div>
			<div className={"nav-items"}>
				<ul>
					<li><a href="">Home</a></li>
					<li><a href="">About</a></li>
					<li><a href="">Contact</a></li>
					<li><a href=""><FaCartShopping/></a></li>
				</ul>
			</div>
		</div>
	);
};

// export default Component
export default Header;