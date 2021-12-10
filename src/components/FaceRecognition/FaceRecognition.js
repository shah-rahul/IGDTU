import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center inputimage-div">
      <div className="relative">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500"
          height="auto"
          className={`bg-white shadow-5 b--solid${" yellow"}`}
        />
        {boxes &&
          boxes.map((box) => (
            <div
              key={`box${box.topRow}${box.rightCol}`}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
