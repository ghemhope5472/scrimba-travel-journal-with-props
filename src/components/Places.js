import React from "react";

function Places(props) {
  return (
    <div className="container">
      <section className="places--container">
        <img src={props.imageUrl} className="places--img" />
        <div className="places--details">
          <div className="top-part">
            <i className="fas fa-map-marker-alt"></i>
            <p className="location">{props.location}</p>
            <span className="maps-link">View on Google Maps</span>
          </div>
          <h1 className="title"> {props.title}</h1>
          <p className="dates">
            {" "}
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Places;
