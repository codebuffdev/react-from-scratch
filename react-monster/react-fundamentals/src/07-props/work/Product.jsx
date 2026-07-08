const Product = (props) => {
    return (
        <div>
            <h2>Name : {props.name}</h2>
            <p>price : {props.price}</p>
        </div>
    )
};
export default Product;