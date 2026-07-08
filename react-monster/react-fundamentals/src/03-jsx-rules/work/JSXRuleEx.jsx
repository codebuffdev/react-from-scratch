/**
 * JSX Rules Exercise
 * In this exercise, you will learn and apply the core rules of writing JSX in React.
 *
 * Step 1: Create a New Component
 * Create a new file called JSXRulesEx.jsx.
 * Inside this file, write a functional component called JSXRulesEx.
 * The component should return a <div> containing the following:
 *
 * A <h1> element with the text "JSX Rules".
 *
 * A paragraph (<p>) that lists at least 3 rules of JSX:
 *
 * JSX must return a single parent element.
 * JSX elements must be properly closed.
 * JSX attributes are written using camelCase (e.g., className instead of class).
 * */

const JSXRulesEx = () => {
    return (
        <div>
            <h1>Jsx Rules</h1>
            <p>
                JSX must return a single parent element. </p>
            <p>JSX elements must be properly closed. </p>
            <p> JSX attributes are written using camelCase (e.g., className instead of class).
            </p>
        </div>
    );

};
export default JSXRulesEx;