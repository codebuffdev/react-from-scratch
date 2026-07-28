/**
 * Creating react ele using the core lib of react is a tedious job. So JSX is introduced.
 * JSX JavaScript HTML
 * JSX allows us to write HTML in React.
 * JSX makes it easier to write & add HTML in React.
 * */

const JSXComponent = () => {
    return (
        <section id="section">
            <h1>My Website</h1>
            <article>
                <h2>Welcome To React</h2>
                <p className="text">Paragraph Content</p>
            </article>
        </section>
    );
};

export default JSXComponent;

// jsx to js ? babel transcompile
// Go to babel (https://babeljs.io/repl) & past code

// output :

// import React from "react";
// const BasicStateCounterApp = () => {
//   return React.createElement(
//     "section",
//     {
//       id: "section",
//     },
//     React.createElement("h1", null, "My Website"),
//     React.createElement(
//       "article",
//       null,
//       React.createElement("h2", null, "Welcome To React"),
//       React.createElement(
//         "p",
//         {
//           class: "text",
//         },
//         "Paragraph Content"
//       )
//     )
//   );
// };

// export default BasicStateCounterApp;