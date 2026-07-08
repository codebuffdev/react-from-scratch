const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: "$1200",
        availability: "In stock"
    }
    return (
        <div>
            name: {product.name}
            price: {product.price}
            availability: {product.availability}
        </div>
    );
};
export default ProductInfo;