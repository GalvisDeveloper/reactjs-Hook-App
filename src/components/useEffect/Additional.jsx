import React, { useEffect } from "react";

const Additional = () => {
  let coors = "";

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
    <div>
      <h4>Just return a message</h4>
    </div>
  );
};

export default Additional;
