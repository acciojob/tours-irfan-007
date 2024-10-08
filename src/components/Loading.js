import React from "react";

function Loading() {
  return (
    <div
      className="loader"
      style={{
        border: "10px solid #f3f3f3",
        borderTop: "10px solid #3498db",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        animation: "spin 1s linear infinite",
      }}
    ></div>
  );
}

export default Loading;

// .loader {
//     border: 10px solid #f3f3f3;
//     border-top: 10px solid #3498db;
//     border-radius: 50%;
//     width: 80px;
//     height: 80px;
//     animation: spin 1s linear infinite;
//   }
