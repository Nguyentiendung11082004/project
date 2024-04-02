import React from "react";

const TotalIncome = () => {
  return (
    <div className="totalincome">
      <div className="totalincome__left">
        <div className="heading">Total income</div>
        <div className="totalincome__left__content">
          <p>1.000.000.000</p>
          <span>VND</span>
        </div>
      </div>
      <div className="totalincome__right">
        <div className="heading">Monthly estimated income</div>
        <div className="totalincome__right__content">
          <p>60.000.000</p>
          <span>VND</span>
        </div>
      </div>
    </div>
  );
};

export default TotalIncome;
