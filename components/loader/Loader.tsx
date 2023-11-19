import React, { useEffect } from "react";
import "./style.scss";
import Car from "../car";

export const Loader = () => {
  return (
    <section className="container_loader">
      <div className="title_loader">
        <Car></Car>
        <h1>Who is the faster ?</h1>
        <h2>Please wait while the algorithms run their course</h2>
      </div>
    </section>
  );
};
