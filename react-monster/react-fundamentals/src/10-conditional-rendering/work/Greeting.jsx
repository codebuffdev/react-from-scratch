const Greeting = ({timeOfDay}) =>{
    return (
        timeOfDay === "morning" ? <h1>Good morning!</h1> :
            timeOfDay === "afternoon" ? <h1>Afternoon!</h1> : <h1>Evening</h1>
    );
};
export default Greeting;