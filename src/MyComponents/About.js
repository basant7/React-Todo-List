import React from "react";

export const About = () => {
  let myStyle = {
    minHeight: "100vh",
    margin: "20px auto"
  };
  return (
    <div className="container" style={myStyle}>
      This Is An ABout Component
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error
        temporibus culpa quos ducimus iste eligendi, numquam inventore voluptas
        amet officia totam expedita doloremque! Vero at in dicta eveniet
        nostrum.
      </p>
    </div>
  );
};
