import React from "react";

function TitleContainer({ children, onViewMoreClick }) {
  return (
    <div className="titleContainer flex justify-between mb-10">
      <h2>{children}</h2>
      <div className="content">{/* Your content goes here */}</div>
      <div className="viewMore">
        <button className="mr-2" onClick={onViewMoreClick}>
          View all
        </button>
        <span>&rarr;</span> {/* Arrow */}
      </div>
    </div>
  );
}

export default TitleContainer;
