import {useState} from "react";

const Counter = () => {
	const [count, setCount] = useState();
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={()=>{
				setCount(prev => prev + 1);
			}}>+</button>
		</div>
	)
};
export default Counter;