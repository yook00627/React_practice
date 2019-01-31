import React from "react";

const RightArrow = () => {
  return (
    <div className="nextArrow">
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;


const LeftArrow = () => {
	return ( 
		<div className="backArrow">
		<i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
		</div>
	 );
}
 
export default LeftArrow;