import {useState} from "react";

const UpdatingArrayOfObjects = () => {
	const [movies, setMovies] = useState([
		{id: 1, title: "Spider man", ratings: 3},
		{id: 2, title: "Superman", ratings: 6},
	]);

	return (
		<div>

			{
				Object.entries(movies).map(([key, value]) => {
					return (
						<p key={key}>
							{`id: ${value.id} title: ${value.title} ratings: ${value.ratings}`}
						</p>
					);
				})
			}

			<button onClick={() => setMovies(movies.map(m => m.id === 1 ? {...m, ratings: 4} : m))}>
				Update Spider man ratings
			</button>

			<button onClick={() => {
				// [ bcZ setMovies accept only one arg]
				setMovies([...movies, {id: 3, title: "Jumaniji", ratings: 2}])
			}}>Add Jumanji Movie
			</button>
			<button onClick={() => {
				setMovies(
					movies.filter(m => m.title !== "Jumaniji")
				)
			}}>Delete Jumanji
			</button>
		</div>
	);
}

export default UpdatingArrayOfObjects;