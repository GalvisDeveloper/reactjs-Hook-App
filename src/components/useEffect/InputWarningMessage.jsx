import React, { useEffect, useState } from "react";

const InputWarningMessage = () => {

  const [coors, setCoors] = useState({x: 0, y:0});

  let {x , y} = coors;

   useEffect(() => {
    const mouseMove = (e) => {
      const coors = { x: e.x, y: e.y };
      setCoors(coors);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h5 style={{ color: "red" }}>Just return a message</h5>
      <p><strong>x: </strong>{x}</p>
      <p><strong>y: </strong>{y}</p>
    </>
  );
};

export default InputWarningMessage;
