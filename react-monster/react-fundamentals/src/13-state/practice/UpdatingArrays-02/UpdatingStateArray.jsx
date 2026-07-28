// add / remove /update a value of the array
import {useState} from "react";

const UpdatingStateArray = () => {
	const array = ["sp", "codebuffdev"];
	const [nameArr, setNameArr] = useState(array);

	return (
		<div>
			{
				nameArr.map((name) => <li>{name}</li>)
			}

			<h1 onMouseOver={() => {
				setNameArr([...nameArr, "react-codebuffdev"]);
			}}>Hover to add a name </h1>

			<button onClick={
				() => {
					setNameArr(nameArr.filter((f) => f !== "react-codebuffdev"))
				}
			}>Click to remove a react-codebuffdev
			</button>

			{/*Update */}
			<button onClick={() => {
				setNameArr(
					nameArr.map(
						name => name === "react-codebuffdev" ? "fullstack-codebuffdev" : name,
					)
				)
			}}>Update
			</button>
		</div>
	)
};
export default UpdatingStateArray;