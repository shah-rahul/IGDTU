import React from "react";

const Rank = ({ name, count }) => {
  return (
    <div>
      <div className="white f3">
        {`${name}, your face detection count is   :${count}`}
      </div>
    </div>
  );
};

export default Rank;
