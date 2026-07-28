import {useState} from "react";

const PassingFunctionAsStateValue = () => {
	const [fn, setFn] = useState(()=> () => console.log("Hello"));
	return (
		<section>
			<button onClick={
				() => fn()

			}>+
			</button>

			<button onClick={() => {
				setFn(
					() => console.log("hi")
				)
			}}> *
			</button>
		</section>
	);
}
export default PassingFunctionAsStateValue;