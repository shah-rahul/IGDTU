import React from "react";

const Rank = ({ name, count }) => {
  return (
    <div>
      <div className="white f3">
        {`${name}, your face detection count is   :${count}`}
      </div>
      {count ? (
        <div className="">
          <h1>Total {count} faces detected</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Rank;
