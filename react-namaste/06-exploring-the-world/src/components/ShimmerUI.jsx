import "./shimmerUI.css";

const ShimmerCard = () => {
	return (
		<div className="shimmer-card">
			<div className="shimmer-img skeleton"></div>
			<div className="shimmer-line skeleton"></div>
			<div className="shimmer-line small skeleton"></div>
		</div>
	);
};

const ShimmerUI = () => {
	return (
		<div className="shimmer-container">
			{new Array(15).fill("").map((_, index) => (
				<ShimmerCard key={index} />
			))}
		</div>
	);
};

export default ShimmerUI;
