/**
 * Conditional rendering allows us to dynamically display different components or content based on specific conditions.
 * This enables us to create more interactive and responsive user experiences.
 *
 * using:
 * if else
 * ternary
 * && operator
 * */

const ValidLogin = () => {
    return (
        <h1 style={{color: "Green"}}>Valid login</h1>
    )
};

const InvalidLogin = () => {
    return (
        <h1 style={{color: "red"}}>Invalid Login</h1>
    )
}
// using if else
/*
const Login = (props) => {
    if(props.isValid) return (<ValidLogin />)
    return( <InvalidLogin />)
};
*/

// ternary
const Login = ({isValid}) => {
    return (
        isValid ? <ValidLogin /> : <InvalidLogin />
    );
};

// && => only for true cases & for invalid show nothing
const Cart = (props) => {
    return (
        <div>
            {
                props.items.length > 0 &&
                <h1>{props.items.join(", ")}</h1>
            }
        </div>
    )
}

const ConditionalRenderingContainer = () => {
    return (
        <div>
            <Login isValid={true}/>
            <Cart items ={['bag',"mixer","chips"]}/>
            <Cart items ={[]}/>
        </div>
    )
};

export default ConditionalRenderingContainer;