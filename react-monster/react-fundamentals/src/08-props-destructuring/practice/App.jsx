const App = () => {
    return (
        <User
            name="WebDev"
            age={81}
            isMarried={false}
            hobbies={["Coding", "Reading", "Sleeping"]}
        />
    );
};

const User = ({ name, age, isMarried, hobbies }) => {
    return (
        <section>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h3>Is married: {isMarried}</h3>
            <h4>Hobbies: {hobbies} </h4>
        </section>
    );
};

export default App;