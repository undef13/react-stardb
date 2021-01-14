import React from "react";

import "./person-details.css"

const PersonDetails = () => {
  return (
    <div className="person-details">
      <h3>Person`s name</h3>
      <div className="d-flex">
        <div className="person-image-container">
					<img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="Person"></img>
				</div>
        <div>
          <ul className="person-list">
            <li className="person-list-item">Person`s property</li>
            <li className="person-list-item">Person`s property</li>
            <li className="person-list-item">Person`s property</li>
            <li className="person-list-item">Person`s property</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
