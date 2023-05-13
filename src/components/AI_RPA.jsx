import React from "react";
import "../App.css";
const AI_RPA = () => {
  return (
    <>
      <div className="row my-5 animation">
        <div className="col-md-6">
          <h2 className="text-left font">
            <b>AI + RPA is what we do</b>
          </h2>
          <p className="my-3 text-left fs-3">
            Future-Proof your business. Drive efficiency, profitability and
            deliver on customer experience
          </p>
          <p className="my-5">
            <b>
              <a
                className="text-decoration-none text-dark fs-5" 
                href="https://www.xivtech.io./services/AIandRPAautomation"
              >
                AI+RPA Automation{" "}
                <img className="mx-2 arrow" src="images\Black_arrow.png" alt="" />
              </a>
            </b>
          </p>
        </div>
        <div className="col-md-6">
          <img src="images\AI+RPA.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default AI_RPA;
