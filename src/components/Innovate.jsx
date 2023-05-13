import React from "react";
import "../App.css";

const Innovate = () => {
  return (
    <>
      <div className="row animation">
        <div className="col-md-6 pr">
          <h1 className="text-left font">
            <b> Innovate with Speed</b>
          </h1>
          <p className="my-3 text-left fs-3">
            Create higher quality software, deliver on customer expectations and
            business goals
          </p>
          <p className="my-5 fs-5">
            <b>
              <a
                className="text-decoration-none text-dark"
                href="https://www.xivtech.io./services/enterprise-apps"
              >
                Build Better Apps{" "}
                <img className="mx-2 arrow" src="images\Black_arrow.png" alt="" />
              </a>
            </b>
          </p>
        </div>
        <div className="col-md-6">
          <img src="images\Innovate.jpg" className="image" alt="" />
        </div>
      </div>
    </>
  );
};

export default Innovate;
