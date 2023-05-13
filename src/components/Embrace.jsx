import React from "react";
import "../App.css";
import "./Bolder.css";

const Embrace = () => {
  return (
    <>
      <div className="row animation">
        <div className="col-md-6 pr">
          <h1 className="text-left font">
            <b> Embrace Cloud</b>
          </h1>
          <p className="my-3 text-left fs-3">
            With Cloud-First accelerate innovation and optimize performance
          </p>
          <p className="my-5 fs-5">
            <b>
              <a
                className="text-decoration-none text-dark"
                href="https://www.xivtech.io./services/cloud"
              >
                Cloud Services 
                <img className="mx-2 arrow" src="images\Black_arrow.png" alt="" />
              </a>
            </b>
          </p>
        </div>
        <div className="col-md-6">
          <img src="images\Embrace.jpg" className="image" alt="" />
        </div>
      </div>
    </>
  );
};

export default Embrace;
