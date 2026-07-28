import {useState} from "react";

const Profile = () => {
	const userRandom = {
		name: "John",
		age: 20
	}

	const [user, setUser] = useState(userRandom);
	const [username, setUsername] = useState("");
	const [userage, setAge] = useState(0);

	return (
		<div>
 			<h1>{user.name}</h1>
			<input type={"text"} value={username} onChange={(event)=>{
				setUsername(event.target.value)
			}} />
			<button onClick={()=>{
				setUser({
					...user,
					name: username
				});
			}}>Update username</button>

			<h1>{user.age}</h1>
			<input type={"number"} value={userage} onChange={(event)=>{
				setAge(Number(event.target.value))
			}}/>
			<button onClick={()=>{
				setUser(
					{
						...user,
						age: userage
					}
				)
			}}>Update user's age</button>
		</div>
	)
}
export default Profile;

/*
* <input
  type="text" // Input accepts text.
  value={username} // Input value is controlled by React state.
  onChange={(e) => setUsername(e.target.value)} // Sync React state whenever the user types.
 />

kind of input : type=""
what appears inside input box: value={username}

*
* onChange => on each change
e.target.value
event contains a lot of ele
1. e.target = is the input element.
2. e.target.value = is whatever is inside the textbox.
*
* */