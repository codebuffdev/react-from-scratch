import Person from "./Person.jsx";
import Product from "./Product.jsx";

const ContainerApp = () => {
    return (
        <div>
            <Person name={"sp"} age={30}/>
            <Product name={"laptop"} price={30000} />
        </div>
    )
};
export default ContainerApp;