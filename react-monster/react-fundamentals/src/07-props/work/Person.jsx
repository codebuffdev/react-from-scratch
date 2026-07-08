const Person = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>age: {props.age
            }</p>
        </div>
    )
};
export default Person;