/*
const Child = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
};
*/

// de-str
const Child = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
};
export default Child;