const EmbeddingDynamicContent = () => {
    const v = "Variable";
    const anyClassName = "anything";
    function multiply(x, y){
        return x * y;
    }
    return (
        <section>
            {/*Rendering expression*/}
            <h1>2 + 2 is {2 + 2}</h1>
            {/*Rendering variable value */}
            <h1>{v}</h1>
            {/* Rendering Array */}
            <h1>{['Js','React','Mongodb'].join(", ")}</h1>
            {/* Calling function */}
            <h1>Calling function with val 4 * 2: {multiply(4,2)}</h1>
            {/* Rendering classname */}
            <h1 className={anyClassName}>Hello Check its class name on devtools</h1>
        </section>
    );
}
export default EmbeddingDynamicContent;