// ********** JSX RULES **********

// 1. Return a single root element (container element). To return multiple elements from a component, wrap them with a single parent tag.

// ERROR
// const App = () => {
//     return (
//         <section id="section"> </section>
//         <h1>Welcome To React</h1>
//       );
// }

// 2. Close all the tags
// JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

// Error
// const App = () => {
//     return (
//         <section id="section">
//           <img >
//         </section>
//       );
// }

// 3. className
// open your DevTools and read the error message
// const App = () => {
//   return (
//     <section class="section">
//       <h1 class="title">Hello HuXn</h1>
//     </section>
//   );
// };

// 4. forHTML
// open your DevTools and read the error message
const App = () => {
    return (
        <section class="section">
            <form>
                <label for="name">Name</label>
                <input type="text" placeholder="Enter Your Name" id="name" />
            </form>
        </section>
    );
};

export default App;

// 5.
/*

const Component = () => {

    // Everything here is JavaScript

    return (

        // Everything here is JSX
        {js}
    );
};



React Component
|
├─ Component Body
│
│   Normal JavaScript
│
│   Allowed:
│   - const / let
│   - if / else
│   - for / while
│   - functions
│   - classes
│   - objects
│   - arrays
│   - API calls
│   - hooks (useState, useEffect, etc.)
│
│
├─ return (...)
│
│   JSX Area
│
│   Example:
│
│   <div>
│       { ... }
│   </div>
│
│
└─ Inside JSX { }

    JavaScript Expression Area

    Allowed:
    - vy ariables          {name}
    - propertaccess    {user.name}
    - math               {10 + 20}
    - function calls     {getName()}
    - ternary            {isValid ? "Yes" : "No"}
    - &&                 {isValid && <Login />}
    - map()              {users.map(...)}

    Not Allowed Directly:
    - if / else
    - for / while
    - const / let
    - function declarations
    - class declarations
    - switch
    - try/catch

    Reason:
    JSX {} accepts expressions, not statements.

*/