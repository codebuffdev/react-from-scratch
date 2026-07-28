import {useState} from "react";

const Component1 = ({ccc, setter}) =>{
	return (
		<button onClick={
			() =>{
				setter(prev => prev + 1);
			}
		}>+</button>
	)
}
const Component2 = ({ccc, setter}) =>{
	return (
		<button onClick={
			() =>{setter(prev => prev + 1);}
		}>+</button>
	)
}

const ShareState = () =>{

	const [count,setCount] = useState(0);

	return (
		<div>
			Counter 1: <Component1 ccc={count} setter={setCount} />   <br/>
			Counter 2: <Component2 ccc={count} setter={setCount} />   <br/>
			Concurrent Current Number : {count}
		</div>
	)
}

export default ShareState;

/**
 * prev
 * Use the functional updater when the new state depends on the previous state.
 * React automatically passes the latest state as `prev`, avoiding stale values.
 */