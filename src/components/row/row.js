import React from "react";

const Row = ({ left, right }) => {
	return (
		<div className="row">
			<div className="col-lg-6">
				{ left }
			</div>
			<div className="col-lg-6">
				{ right }
			</div>
		</div>
	);
}

export default Row;