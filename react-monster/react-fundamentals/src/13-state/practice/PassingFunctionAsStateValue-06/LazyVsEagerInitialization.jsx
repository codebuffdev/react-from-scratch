import {useState} from "react";
// initialization : creating the initial value
let xx = 10;

function createUsers() {
	console.log("Creating users eager way...");
	return new Array(1000000).fill("User");
}

function createUsers2() {
	console.log("Creating users lazy way...");
	return new Array(1000000).fill("User");
}


const LazyVsEagerInitialization = () => {
	const [x, setX] = useState(10); // initial value 10 eager initialization => immediately

	const [user, setUser] = useState(createUsers()); // eager
	const [user2, setUser2] = useState(() => createUsers2());

	return (
		<div>
			<button onMouseOver={
				() => {
					setX(
						prev => prev + 1
					)
				}
			}>+
			</button>
		</div>
	)

};
export default LazyVsEagerInitialization;


// Eager -> JS computes immediately on every render.
// Lazy -> React computes only on the first render.
// prev -> Always update from the latest state.