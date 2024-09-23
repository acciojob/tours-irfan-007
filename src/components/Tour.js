import React, { useState } from "react";

function Tour({ data, list, setList }) {
  // console.log(data);
  const [showBtn, setShowBtn] = useState(false);
  const removeItem = () => {
    let filter = list.filter((k) => k.id != data.id);
    setList(filter);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "20rem",
      }}
    >
      <h3>{data.name}</h3>
      <div>
        Price: <span>{data.price}</span>{" "}
        <button
          id={`delete-btn-${data.id}`}
          style={{ color: "red", float: "right" }}
          onClick={removeItem}
        >
          Remove tour
        </button>
      </div>
      <img src={data.image} alt="" />
      <p id={`tour-item-para-${data.id}`}>
        {showBtn ? data.info : data.info.slice(0, 200)}
      </p>
      <button id={`see-more-${data.id}`} onClick={() => setShowBtn(!showBtn)}>
        {showBtn ? "See less" : "See more"}
      </button>
    </div>
  );
}

export default Tour;
