const Button = () => {
    return (
        <button onClick={() => {
            console.log("Stop Clicking me")
        }}>Submit</button>
    )
};

const Copy = () => {
    const stopCopy = () => {
        prompt("Stop Copying");
    }
    return (
        <p onCopy={stopCopy}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam asperiores atque beatae dicta eius fugiat fugit illo in magni maxime molestiae natus neque officiis quibusdam ratione reprehenderit sapiente ut.</p>
    )
};

const App = () => {
    return (
        <div>
            <Button/>
            <Copy />
        </div>
    )
};
export default App;