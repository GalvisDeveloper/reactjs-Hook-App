import React, { useEffect } from "react";

const InputWarningMessage = () => {
  let coors = "";


  //Algo anda mal aqui ome
  const mouseMove = (e) => {
    coors = { x: e.x, y: e.y };
  };

  useEffect(() => {
    const mouseMove = (e) => {
      const coors = { x: e.x, y: e.y };
      console.log(coors);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h5 style={{ color: "red" }}>Just return a message</h5>
    </>
  );
};

export default InputWarningMessage;
