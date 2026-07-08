const Greeting = () => {
    const name = "John";
    return (
        <div>
            <h1>name {name}</h1>
            <p>Current Date : {new Date().toLocaleDateString()}</p>
        </div>
    );
};
export default Greeting;

// we can render direct object in jsx
/*
{100}              // OK
{"hello"}          // OK
{[1,2,3]}          // OK
{{name:"John"}}    // Error
{new Date()}       // Error
* */