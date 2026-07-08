/**
 * Props / Properties are arguments passed into React components.
 * Props allows us to pass data from parent component to a child component
 * Props are passed to components via HTML attributes.
 */
const ContainerApp = () => {
    return (
        <div>
            <User
                name="Sp"
                age={30}
                city="Bbsr"
                hobbies={["Coding", "Reading", "Sleeping"]}
            />
        </div>
    )
};
export default ContainerApp;

const User = (props) => {
    return (
        <section>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.city}</h1>
            <h1>{(props.hobbies).join(", ")}</h1>
        </section>
    )
};