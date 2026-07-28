import {useState} from "react";

const TodoList = () => {
	const [todos, setTodos] = useState(["react"]);
	const [text, setText] = useState('');
	return (
		<div>
			<input placeholder={"Enter Task"} type={"text"} value={text} onChange={(event)=>{setText(event.target.value)}}/>
			<button onClick={
				()=>{
					setTodos([...todos,text]);
					setText('');
				}
			}>Submit</button>
			<ul>
				{todos.map(
					(todo, index) => <li key={index}>{todo}</li>)}
			</ul>
		</div>
	);
};
export default TodoList;