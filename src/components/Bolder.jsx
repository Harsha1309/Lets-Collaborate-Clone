import React from "react";
import "./Bolder.css";
import "../App.css";
const Bolder = () => {
  return (
    <>
      <div className="row animation">
        <div className="col-md-6 pr">
          <h1 className="text-left font">
            <b> Make Bolder Choices</b>
          </h1>
          <p className="my-3 text-left fs-3">
            Digital focused strategies to realize market-changing ideas
          </p>
          <p className="my-5 fs-5">
            <b>
              <a
                className="text-decoration-none text-dark"
                href="https://www.xivtech.io./services/delivery-pipeline-automation"
              >
                DevOps
                <img className="mx-2 arrow" src="images\Black_arrow.png" alt="" />
              </a>
            </b>
          </p>
        </div>
        <div className="col-md-6">
          <img src="images\Bolder.png" className="image" alt="" />
        </div>
      </div>
    </>
  );
};

export default Bolder;
