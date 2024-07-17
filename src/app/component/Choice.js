import React from "react";

const Choice = () => {
  return (
    <div className="mt-5 container">
      <p className="fs-2 text-center">Why you should choose us?</p>
      <div className="d-flex justify-content-between p-3 ">
        <div
          className="qualities d-flex flex-column justify-content-center"
          style={{ width: "20%", height: "250px" }}
        >
          <div className="bg-body-secondary qualities-item">
            <i className="bi bi-truck fs-1"></i>
          </div>
          <p className="fs-4 mt-3 mb-0">Free Shipping</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ipsa.
          </p>
        </div>
        <div
          className="qualities d-flex flex-column justify-content-center"
          style={{ width: "20%", height: "250px" }}
        >
          <div className="bg-body-secondary qualities-item">
            <i className="bi bi-wallet2 fs-1"></i>
          </div>
          <p className="fs-4 mt-3 mb-0">Easy Payments</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ipsa.
          </p>
        </div>
        <div
          className="qualities d-flex flex-column justify-content-center"
          style={{ width: "20%", height: "250px" }}
        >
          <div className="bg-body-secondary qualities-item">
            <i className="bi bi-shield-shaded fs-1"></i>
          </div>
          <p className="fs-4 mt-3 mb-0">Money-Back Guarantee</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ipsa.
          </p>
        </div>
        <div
          className="qualities d-flex flex-column justify-content-center"
          style={{ width: "20%", height: "250px" }}
        >
          <div className="bg-body-secondary qualities-item">
            <i className="bi bi-brilliance fs-1"></i>
          </div>
          <p className="fs-4 mt-3 mb-0">Finest Quality</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ipsa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choice;
