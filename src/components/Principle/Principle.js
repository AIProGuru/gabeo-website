import React from "react";
import "./principle.scss";
import { Calculator } from "components/Calculator/Calculator";

export const Principle = () => {
  return (
    <div className="principle">
      <h1>Autonomous Denial Recovery calculator</h1>
      <Calculator />
      <h2>Why Medical Claims are denied by payers?</h2>
      <img src="/assets/images/reason.svg" />
    </div>
  );
};
