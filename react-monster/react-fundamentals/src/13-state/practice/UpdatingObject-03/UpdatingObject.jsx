import {useState} from 'react';

const UpdatingObject = () => {

	const [info, setInfo] = useState({
		user: "sp",
		skills: ['js', 'react']
	});


	return (
		<div>
			{/*Printing all values */}

			{
				Object.entries(info).map(([key, value]) => (
					<div key={key}>
						<p>
							key: {key}
						</p>
						<p>
							value: {Array.isArray(value) ? value.join(', ') : value}
						</p>
					</div>
				))

			}


			<button onClick={
				() => {
					setInfo({...info, active: "false"});
				}
			}>Add a prop
			</button>
			<br/>

			<button onClick={()=>{
				setInfo({
					...info,
					skills: info.skills.map(skill => skill === 'js' ? "Javascript" : skill)
				});
			}}>Update a prop</button>
			<br/>

			<button onClick={ ()=> {
				const {active, ...rest} = info;
				setInfo(rest);
			}}>Delete a prop</button>
			<br/>
		</div>
	);
};
export default UpdatingObject;