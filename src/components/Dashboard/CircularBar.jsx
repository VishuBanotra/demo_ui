import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBar = () => {
  const percentage = 73;

  return (
    <div style={{ width: 200, height: 200, position: "relative" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#F3F4F6",
          pathColor: "#4338CA",
          trailColor: "#4B5563",
          textSize: "16px",
        })}
        strokeWidth={5}
      />
      <div
        style={{
          marginTop: "5px",
          position: "absolute",
          top: "55%",
          left: "48.5%",
          transform: "translate(-48.5%)",
          fontSize: "14px",
          fontWeight: 400,
          color: "#9CA3AF",
        }}
      >
        Opened
      </div>
    </div>
  );
};

export default CircularBar;
