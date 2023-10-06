import { useState } from "react";

import { Col, Row, Button, Card } from "react-bootstrap";

import { useAppContext } from "../context/AppContext";

import "../assets/styling/plan.css";
import { data } from "../mock/data";

const Plan = () => {
  const { handlePlus, handlePrev, selectedPlan, setSelectedPlan } =
    useAppContext();

  const [selectedCardIndex, setSelectedCardIndex] = useState({});

  const plan = data.plan;
  const [billingPeriod, setBillingPeriod] = useState(
    localStorage.getItem("billingPeriod") || "monthly"
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

  const handleCardClick = (item) => {
    setSelectedPlan({ ...item, billingPeriod });
    setSelectedCardIndex(item);
    localStorage.setItem("selectedCardIndex", item.toString());
  };

  return (
// header 
    <Col className="side-bar md-9  mt-5">
      <h1 className="title">Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
{/* content */}
      <Row className="mt-5">
        {plan.map((item) => (
          <Col key={item.id}>
            <Card
              style={{ width: "8rem" }}
              className={`${
                selectedPlan.id === item.id ? "card-plan" : "c-plan"
              }`}
              onClick={() => handleCardClick(item)}
            >
              <Card.Img src={item.img} className="plan-icon mx-3 mt-3 mb-3" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="price">
                  $
                  {billingPeriod === "monthly"
                    ? `${item.pricemonthly}`
                    : `${item.priceyearly}`}{" "}
                  {additionalInfo}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
{/* toggle */}
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
{/* buttons */}
      <div className="buttons justify-content-between d-flex mt-5">
        <div className="nextpage">
          <button
            className={`btn-prev-step ${
              billingPeriod === "monthly" ? "mt-4" : "mt-2"
            } `}
            onClick={handlePrev}
          >
            Go Back
          </button>
        </div>
        <div className="nextpage">
          <Button
            className={`btn-next-step ${
              billingPeriod === "monthly" ? "mt-3" : "mb-5"
            }`}
            onClick={handlePlus}
          >
            Next Step
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Plan;
