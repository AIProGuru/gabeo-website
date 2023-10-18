import React, { useState } from "react";
import { Slider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./calculator.scss";

export const Calculator = () => {
  const [averageReimbursement, setAverageReimbursement] = useState(78500);
  const [nDeniedClaims, setNDeniedClaims] = useState(178);
  const [revenueLossWeek, setRevenueLossWeek] = useState(0);
  const [revenueLossMonth, setRevenueLossMonth] = useState(0);
  const [revenueLossYear, setRevenueLossYear] = useState(0);
  const [deniedClaimPerPhysicianPerYear, setDeniedClaimPerPhysicianPerYear] =
    useState(0);
  const [averageCostToRework, setAverageCostToRework] = useState(0);
  const [nPhysiciansInPractice, setNPhysicianInPractice] = useState(0);
  const [reimbursementPerWeek, setReimbursementPerWeek] = useState(0);
  const [reimbursementPerMonth, setReimbursementPerMonth] = useState(0);
  const [reimbursementPerYear, setReimbursementPerYear] = useState(0);
  const [potentialSaving, setPontentialSaving] = useState(78500);
  useState();
  return (
    <div className="calculator">
      <div className="top-bar">
        <img src="/assets/logos/Logo.svg" alt="" width="134px" />
        <img src="/assets/icons/MacOS window buttons.svg" alt="" width="45px" />
      </div>
      <div className="body">
        <div className="row">
          <div className="description first">
            How much reimbursement are you losing to denied claims
          </div>
          <div className="content first">
            <div className="unit">
              <p>The average reimbursement dollar amount per claim</p>
              <h5>${averageReimbursement}</h5>
              <Slider
                progress
                defaultValue={78500}
                onChange={(value) => {
                  setAverageReimbursement(value);
                }}
                min={0}
                max={500000}
              />
              <div className="price-range">
                <h4>$0.00</h4>
                <h4>$500,000.00</h4>
              </div>
            </div>
            <div className="unit">
              <p>Number of claims denials</p>
              <div>
                <h5>{nDeniedClaims}</h5>
                <Slider
                  progress
                  defaultValue={178}
                  onChange={(value) => {
                    setNDeniedClaims(value);
                  }}
                  min={0}
                  max={1000}
                />
                <div className="price-range">
                  <h4>0</h4>
                  <h4>1000</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="description">Your revenue loss adds up to</div>
          <div className="content">
            <div className="unit">
              <p>Per week</p>
              <h5>${revenueLossWeek}</h5>
              <Slider
                progress
                defaultValue={0}
                onChange={(value) => {
                  setRevenueLossWeek(value);
                }}
                min={0}
                max={500000}
              />
              <div className="price-range">
                <h4>$0.00</h4>
                <h4>$500,000.00</h4>
              </div>
            </div>
            <div className="unit">
              <p>Per month</p>
              <h5>${revenueLossMonth}</h5>
              <Slider
                progress
                defaultValue={0}
                onChange={(value) => {
                  setRevenueLossMonth(value);
                }}
                min={0}
                max={500000}
              />
              <div className="price-range">
                <h4>$0.00</h4>
                <h4>$500,000.00</h4>
              </div>
            </div>
            <div className="unit">
              <p>Per year</p>
              <h5>${revenueLossYear}</h5>
              <Slider
                progress
                defaultValue={0}
                onChange={(value) => {
                  setRevenueLossYear(value);
                }}
                min={0}
                max={500000}
              />
              <div className="price-range">
                <h4>$0.00</h4>
                <h4>$500,000.00</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="description">
            Calculate what reworking claims is costing you
          </div>
          <div className="content">
            <div className="unit">
              <p>Denied claims per physician per year</p>
              <h5>{deniedClaimPerPhysicianPerYear}</h5>
              <Slider
                progress
                defaultValue={0}
                onChange={(value) => {
                  setDeniedClaimPerPhysicianPerYear(value);
                }}
                min={0}
                max={1000}
              />
              <div className="price-range">
                <h4>0.00</h4>
                <h4>1000</h4>
              </div>
            </div>
            <div className="unit">
              <p>Average Cost to rework a single claim</p>
              <h5>${averageCostToRework}</h5>
              <Slider
                progress
                defaultValue={0}
                onChange={(value) => {
                  setAverageCostToRework(value);
                }}
                min={0}
                max={500000}
              />
              <div className="price-range">
                <h4>$0.00</h4>
                <h4>$500,000.00</h4>
              </div>
            </div>
            <div className="unit">
              <p>Number of physicians in your practice</p>
              <h5>{nPhysiciansInPractice}</h5>
              <Slider
                progress
                defaultValue={0}
                onChange={(value) => {
                  setNPhysicianInPractice(value);
                }}
                min={0}
                max={10000}
              />
              <div className="price-range">
                <h4>0.00</h4>
                <h4>10000</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="description">
            Attempting to rework claims for reimbursement costs your practive
          </div>
          <div className="content">
            <div className="unit">
              <p>Per week</p>
              <h5>${reimbursementPerWeek}</h5>
              <Slider
                progress
                defaultValue={0}
                onChange={(value) => {
                  setReimbursementPerWeek(value);
                }}
                min={0}
                max={1000}
              />
              <div className="price-range">
                <h4>$0.00</h4>
                <h4>$1000</h4>
              </div>
            </div>
            <div className="unit">
              <p>Per month</p>
              <h5>${reimbursementPerMonth}</h5>
              <Slider
                progress
                defaultValue={0}
                onChange={(value) => {
                  setReimbursementPerMonth(value);
                }}
                min={0}
                max={1000}
              />
              <div className="price-range">
                <h4>$0.00</h4>
                <h4>$1000</h4>
              </div>
            </div>
            <div className="unit">
              <p>Per year</p>
              <h5>${reimbursementPerYear}</h5>
              <Slider
                progress
                defaultValue={0}
                onChange={(value) => {
                  setReimbursementPerYear(value);
                }}
                min={0}
                max={1000}
              />
              <div className="price-range">
                <h4>$0.00</h4>
                <h4>$1000</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="description">Your revenue loss adds up to</div>
          <div className="content">
            <div className="unit">
              <p>Per year</p>
              <h5>${potentialSaving}</h5>
              <Slider
                progress
                defaultValue={78500}
                onChange={(value) => {
                  setPontentialSaving(value);
                }}
                min={0}
                max={500000}
              />
              <div className="price-range">
                <h4>$0.00</h4>
                <h4>$500,000.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
