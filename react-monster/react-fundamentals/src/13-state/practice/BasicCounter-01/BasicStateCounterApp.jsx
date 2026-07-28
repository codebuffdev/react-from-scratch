import {useState} from "react";

/**
 * Whenever a state variable updates react , rerender the component.
 * */

const BasicStateCounterApp = () => {
	const [counter, setCounter] = useState(0);

	return (<h1 onMouseOver={() => {
		setCounter(counter + 1);
	}}>Hover over the number to change the value by one : {counter}</h1>)
};
export default BasicStateCounterApp;