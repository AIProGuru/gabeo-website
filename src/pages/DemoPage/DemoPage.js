import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { environment } from "environment";
import "./custom.scss";
// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import VerticalLinearStepper from "components/Stepper/Stepper";
import { Navigate, useNavigate } from "react-router-dom";

function PreQueue() {
  const navigate = useNavigate();
  const [isDetail, setIsDetail] = useState(false);
  const [referencePolicy, setReferencePolicy] = useState();
  const [icdCode, setIcdCode] = useState();
  const [denialCode, setDenialCode] = useState();
  const [denialReason, setDenialReason] = useState();
  const [dayToAppeal, setDayToAppeal] = useState();
  const [appeal, setAppeal] = useState(false);
  const [claimNumber, setClaimNumber] = useState();
  const [denialInfo, setDenialInfo] = useState();
  const [status, setStatus] = useState("");

  const BASE_URL = environment.BASE_URL;
  const checkClaim = (claim) => {
    setClaimNumber(claim);
    var query = new FormData();
    query.append("query", claim);
    axios.post(`${BASE_URL}/v2/query_start/`, query).then((res) => {
      console.log(res.data);
      setIsDetail(true);
    });
  };
  useEffect(() => {
    let res = localStorage.getItem("sign");
    if (res == null) {
      navigate("/");
    } else if (res == "ok") {
      navigate("/demo");
    } else {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    console.log(referencePolicy, icdCode, denialCode);
  }, [referencePolicy, icdCode, denialCode]);

  useEffect(() => {
    console.log(denialInfo);
  }, [denialInfo]);

  const formatResponse = (inputText) => {
    const sections = [];
    console.log(inputText);
    const paragraphs = inputText.split("\n").filter((p) => p.trim() !== ""); // split by newline and filter out any empty paragraphs
    paragraphs.forEach((paragraph, index) => {
      sections.push({
        content: paragraph,
      });
    });
    return sections;
  };

  return (
    <>
      <Container fluid className="demo-container">
        {!isDetail && (
          <Row className="row">
            <div className="title">
              <h1>Gabeo’s Claims Processing System – Live Prototype</h1>
              <p>
                We help BPO agents process medical claims faster – upto 40-50%
                faster than current process
              </p>
            </div>
            <div className="content">
              <p>
                This is a demonstration of Gabeo platforms claims processing
                capabilities. Our LLMs are trained on the following data set:
              </p>
              <p>Number of claims ingested - 5M.</p>
              <p>Number of payer policies - approx. 5000 payer policies.</p>
              <p>Number of provider contracts - 75.</p>
              <p>
                Below are few example claims that simulates a queue for a BPO
                agent to work on. The workflow is:{" "}
              </p>
              <ol>
                <li>BPO agents come to this portal daily</li>
                <li>
                  They get served a handful of curated denied claims to work
                  upon.
                </li>
                <li>
                  All information on claims, denials, diagnosis, labs results,
                  dr notes etc has been pre-synthesized by the Gabeo system the
                  night before.
                </li>
                <li>
                  System has already curated insights and recommendations to
                  surface up to BPO agents, in order to fast track the handling
                  on this denied claim.
                </li>
                <li>
                  As the BPO agent tackles claims one by one, Gabeo will hand
                  hold them through the validation process.
                  <ol style={{ paddingBottom: 0 }}>
                    <li style={{ marginLeft: "2em" }}>
                      First it verifies that the payer on this claim is correct;
                      many claims get denied simply because of mismatched
                      primary and secondary.{" "}
                    </li>
                    <li style={{ marginLeft: "2em", paddingBottom: 0 }}>
                      Second, it validates correct diagnosis codes; by cross
                      checking Dr’s notes and ensure CPT code matches
                      description of diagnosis.
                    </li>
                    <li style={{ marginLeft: "2em", paddingBottom: 0 }}>
                      Third, it validates correct billing code has been applied;
                      if not, it will suggest alternative and also a possible
                      modifier (based on historicals)
                    </li>
                    <li style={{ marginLeft: "2em", paddingBottom: 0 }}>
                      Fourth, it fetches and cross checks the payer policy in
                      seconds. Dissects each section of policy, applies
                      necessary language and verbiage to support overturning
                      denials
                    </li>
                    <li style={{ marginLeft: "2em", paddingBottom: 0 }}>
                      Fifth, it finds if any required documents are missing; if
                      so, it fetches the relevant documents from your EHR system
                      (if API integrated)
                    </li>
                    <li style={{ marginLeft: "2em", paddingBottom: 0 }}>
                      Sixth, it prepares appeals letter using all the above
                      information
                    </li>
                    <li style={{ marginLeft: "2em", paddingBottom: 0 }}>
                      Seventh, with a BPO agents approval, submits the entire
                      resubmission or appeals package directly to the payer.
                    </li>
                  </ol>
                </li>
              </ol>
              <p>
                You are welcome to simulate the BPO use case by clicking any of
                the claims in the queue below. This is a live system, so
                appreciate your patience. Thx!
              </p>
            </div>
            <Col md="12" className="d-flex mb-5 justify-content-around one-col">
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(4945929)}
              >
                Claim 4945929
              </button>
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(3825286)}
              >
                Claim 3825286
              </button>
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(3828296)}
              >
                Claim 3828296
              </button>
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(3829046)}
              >
                Claim 3829046
              </button>
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(4737213)}
              >
                Claim 4737213
              </button>
            </Col>
            <Col md="12" className="d-flex mb-5 justify-content-around one-col">
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(3824540)}
              >
                Claim 3824540
              </button>
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(3824604)}
              >
                Claim 3824604
              </button>
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(3824932)}
              >
                Claim 3824932
              </button>
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(3827504)}
              >
                Claim 3827504
              </button>
              <button
                className="bg-primary px-2 py-3 border-0 text-white rounded"
                onClick={() => checkClaim(2313209876)}
              >
                Claim 2313209876
              </button>
            </Col>
          </Row>
        )}
        {isDetail && (
          <>
            <Row>
              <Row>
                <Col md="12">
                  <h2 style={{ textAlign: "center", color: "green" }}>
                    <b>Claim Number - {claimNumber}</b>
                  </h2>
                  <br />
                  <h6 style={{ textAlign: "center" }}>Status: {status}</h6>
                </Col>
              </Row>
              <Row className="one-col">
                <Col
                  md="6"
                  className="d-flex flex-column mb-5 justify-content-around insight"
                >
                  <h2>
                    <b>Gabeo Insight</b>
                  </h2>
                  <div
                    className="insights"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <p>
                      <b>Payer Guidelines:</b>
                    </p>
                    <p>Reference Policy: {referencePolicy}</p>
                    <p>
                      <b>Denial Incomplete Report:</b>
                    </p>
                    <p>
                      <b>Denial Type:</b>
                      {denialInfo && denialInfo.denied_type}
                    </p>
                    <p>
                      ICD-10:{" "}
                      {icdCode && icdCode.map((icdCode) => icdCode + ",")}
                    </p>
                    <p>Denial Code: {denialCode}</p>
                    <br />
                    <p>
                      <b>Action Required:</b> {denialReason}
                    </p>
                    <br />
                    <p>
                      <b>Days to Appeal: </b>
                      {dayToAppeal}
                    </p>
                  </div>
                </Col>
                <Col md="6" className="d-flex flex-column mb-5">
                  <h2>
                    <b>Gabeo Predictor</b>
                  </h2>
                  <div
                    className="insights"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <p>
                      <b>
                        Overturn Amount YTD:{" "}
                        {denialInfo && denialInfo.charged_amount}
                      </b>
                    </p>
                    <p>
                      <b>Overturn Claim Count YTD: 3514</b>
                    </p>
                    <br />
                    <p>Probability of Success: 90.1%</p>
                    <p>
                      Reimbursement Amount:{" "}
                      {denialInfo && denialInfo.paid_amount}
                    </p>
                    <p>
                      Expected reimbursement days:{" "}
                      {denialInfo && denialInfo.filing_limit}
                    </p>
                  </div>
                </Col>
              </Row>
            </Row>
            <Row>
              <Col md="12" className="d-flex flex-column mb-5">
                <h2>
                  <b>Gabeo Recommendations</b>
                </h2>
                <div className="insights">
                  <div className="stepper">
                    <VerticalLinearStepper
                      claimID={claimNumber}
                      setReferencePolicy={setReferencePolicy}
                      setDenialCode={setDenialCode}
                      setIcdCode={setIcdCode}
                      setDenialReason={setDenialReason}
                      setDayToAppeal={setDayToAppeal}
                      setAppeal={setAppeal}
                      setDenialInfo={setDenialInfo}
                      setStatus={setStatus}
                      denialCode
                      icdCode
                      denialReason
                    />
                  </div>
                  {appeal && (
                    <div className="appeal">
                      <p className="px-3">
                        {formatResponse(appeal).map((section, index) => (
                          <div key={index}>
                            <p>{section.content}</p>
                          </div>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
}

export default PreQueue;
