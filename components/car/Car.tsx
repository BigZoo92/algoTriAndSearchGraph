import React, { useEffect } from "react";
import "./style.scss";

interface CarProps {
  isLoading?: boolean;
}

const Car = ({ isLoading }: CarProps) => {
  return (
    <>
      <div
        className="overlay_car_loader"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgb(0, 0, 0, 0.5)",
          display: isLoading ? "block" : "none",
        }}
      ></div>
      <div
        className="loader"
        style={{ position: isLoading ? "fixed" : "inherit" }}
      >
        <div className="pilot pilot2"></div>
        <div className="pilot"></div>
        <div className="sas sas2"></div>
        <div className="loader_body loader_body2"></div>
        <div className="wing wing2"></div>
        <div className="sas"></div>
        <div className="loader_body">
          <div className="door"></div>
        </div>
        <div className="wing"></div>
        <div className="line"></div>
        <div className="line2"></div>
        <div className="mirror"></div>
        <div className="wheel">
          <span className="wheel_light"></span>
          <div className="rim"></div>
        </div>
        <div className="wheel wheel2">
          <span className="wheel_light"></span>
          <div className="rim"></div>
        </div>
      </div>
    </>
  );
};

export default Car;
