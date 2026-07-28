import {useState} from "react";

const ShoppingList = () => {
	const [list, setList] = useState([{
		name: "fan",
		quantity: 2
	}, {
		name: "Laptop",
		quantity: 3
	}, {
		name: "mobile",
		quantity: 1
	}]);

	const [itemName, setItemNm] = useState('');
	const [itemQty, setItemQty] = useState(0);

	return (
		<div>
			<form onSubmit={
				(e) => {
					e.preventDefault()
					console.log(itemName , itemQty);
					setList(
						[
							...list,
							{
								name: itemName,
								quantity: itemQty,
							}
						]
					)
				}
			}>
				<input type={"text"} value={itemName} onChange={(e)=>{
					setItemNm(e.target.value);
				}}/>
				<br/>
				<input type={"number"} value={itemQty} onChange={(e)=>{
					setItemQty(Number(e.target.value));
				}}/>
				<br/>
				<button type={"submit"}>Submit</button>
			</form>
			<h1>Cart</h1>
			{/*	display */}
			{
				list.map((item, index) =>  <ul key={index}>
					<li>{item.name}</li>
					<li>{item.quantity}</li>
				</ul>)
			}
		</div>
	);
}
export default ShoppingList;