import "./style.css";
import LoginModal from "./LoginModal";
import { createPortal } from "react-dom";

export default function App() {
	return (
		<div className="app">
			<h1>Amazon Clone</h1>

			<div className="product-card">
				<h2>iPhone 17</h2>

				<button>Buy Now</button>
				{/* using the modal component */}
				{/* <LoginModal /> */}
				{
					/*using react modal */
					createPortal(
						<LoginModal />,
						document.getElementById("portal-root"),
					)
				}
			</div>
		</div>
	);
}
