const WorkingWithListVal = () => {
    const listFruits = ['apple', 'banana', 'orange', 'kiwi'];
    return (
        <div>
            {
                listFruits.map(
                    (fruit,index) => (
                        // key should be in the top ele returned by map here ul
                        <ul key={index}>
                            <li>{fruit.toUpperCase()}</li>
                        </ul>
                    )
                )
            }
        </div>
    );
};
export default WorkingWithListVal;