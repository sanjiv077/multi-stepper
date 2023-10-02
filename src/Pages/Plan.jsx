import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Col, Row } from "react-bootstrap";

import arcade from "../assets/images/icon-arcade.png";
import advanced from "../assets/images/icon-advanced.png";
import pro from "../assets/images/icon-pro.png";

import "../assets/styling/plan.css";

const Plan = ({ onPrev, onNext ,  selectedPlan }) => {
  const [billingPeriod, setBillingPeriod] = useState(
    localStorage.getItem("billingPeriod") || "monthly"
  );
  const [selectedCardIndex, setSelectedCardIndex] = useState(
    parseInt(localStorage.getItem("selectedCardIndex")) || 0
  );

  const handleBillingToggle = () => {
    const newBillingPeriod = billingPeriod === "monthly" ? "yearly" : "monthly";
    setBillingPeriod(newBillingPeriod);
    localStorage.setItem("billingPeriod", newBillingPeriod);
  };

  const additionalInfo =
    billingPeriod === "yearly" ? (
      <span className="additional-info">2 months free</span>
    ) : null;

  const handleCardClick = (cardindex) => {
    setSelectedCardIndex(cardindex);
    localStorage.setItem("selectedCardIndex", cardindex.toString());
  };

  return (
    <Col className="side-bar md-9  mt-5">
      <h1 className="title">Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <Row className="mt-5">
        <Col>
          <Card
            style={{ width: "8rem" }}
            className={`${selectedCardIndex === 0 ? "card-plan" : "c-plan"}`}
            onClick={() => handleCardClick(0)}
          >
            <Card.Img src={arcade} className="plan-icon mx-3 mt-3 mb-3" />
            <Card.Body>
              <Card.Title>Arcade</Card.Title>
              <Card.Text className="price">
                ${billingPeriod === "monthly" ? "9/mo" : "90/yr"}{" "}
                {additionalInfo}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "8rem" }}
            className={`${selectedCardIndex === 1 ? "card-plan" : "c-plan"}`}
            onClick={() => handleCardClick(1)}
          >
            <Card.Img src={advanced} className="plan-icon mx-3 mt-3 mb-3" />
            <Card.Body>
              <Card.Title>Advanced</Card.Title>
              <Card.Text className="price">
                ${billingPeriod === "monthly" ? "12/mo" : "120/yr"}{" "}
                {additionalInfo}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "8rem" }}
            className={`${selectedCardIndex === 2 ? "card-plan" : "c-plan"}`}
            onClick={() => handleCardClick(2)}
          >
            <Card.Img src={pro} className="plan-icon mx-3 mt-3 mb-3" />
            <Card.Body>
              <Card.Title>Pro</Card.Title>
              <Card.Text className="price">
                ${billingPeriod === "monthly" ? "15/mo" : "150/yr"}{" "}
                {additionalInfo}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="plan mt-5 d-flex align-items-center justify-content-center">
        <p
          className={`mt-2  mx-3 ${
            billingPeriod === "monthly"
              ? "toggle-selected"
              : "toggle-unselected"
          }`}
        >
          Monthly
        </p>

        <input
          type="checkbox"
          className="checkbox"
          id="switch"
          checked={billingPeriod === "yearly"}
          onChange={handleBillingToggle}
        />
        <label for="switch" className="label">
          Toggle
        </label>
        <p
          className={`mt-2 mx-3 ${
            billingPeriod === "monthly"
              ? "toggle-unselected"
              : "toggle-selected"
          }`}
        >
          Yearly
        </p>
      </div>
      <div className="buttons justify-content-between d-flex mt-5">
        <div className="nextpage">
          <button
            className={`btn-prev-step ${
              billingPeriod === "monthly" ? "mt-4" : "mt-2"
            } `}
            onClick={onPrev}
          >
            Go Back
          </button>
        </div>
        <div className="nextpage">
          <Button
            className={`btn-next-step ${
              billingPeriod === "monthly" ? "mt-3" : "mb-5"
            }`}
            onClick={onNext}
          >
            Next Step
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Plan;
