import React from "react";
import "./principle.scss";
import { ReactComponent as RecoveryCalculator } from "assets/images/block_1.svg";
import { ReactComponent as Reason } from "assets/images/reason.svg";

export const Principle = () => {
  return (
    <div className="principle">
      <h1>Autonomous Denial Recovery calculator</h1>
      <RecoveryCalculator />
      <h2>Why Medical Claims are denied by payers?</h2>
      <Reason />
    </div>
  );
};
