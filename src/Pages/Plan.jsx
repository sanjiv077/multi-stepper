import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Col, Row } from "react-bootstrap";

import arcade from "../assets/images/icon-arcade.png";
import advanced from "../assets/images/icon-advanced.png";
import pro from "../assets/images/icon-pro.png";

import "../assets/styling/plan.css";

const Plan = ({ onPrev, onNext ,  handleSelectedPlan  , setSelectedPlan , selectedPlan}) => {
const [selectedCardIndex, setSelectedCardIndex] = useState( {}
);

  const plan = [
    {
      id : 1,
      name : 'Arcade',
     pricemonthly : '9',
     priceyearly: '90',
     img: arcade,
  },
    {
      id : 2,
      name : 'advanced',
    pricemonthly : '12',
    priceyearly: '120',
    img: advanced,
  },
    {
      id : 3,
      name : 'pro',
    pricemonthly : '15',
    priceyearly: '150',
    img: pro,
  },
]
// const selectedPlan = plan[selectedCardIndex];
  const [billingPeriod, setBillingPeriod] = useState(
    localStorage.getItem("billingPeriod") || "monthly"
  );
 
  const handleNextClick = () => {
    const selectedPlan = plan[selectedCardIndex]
    const selectedPlanData = {
      // index: selectedCardIndex,
      // billingPeriod,
      // pricemonthly: selectedPlan.pricemonthly,
      // priceyearly: selectedPlan.priceyearly,
    };
    // setSelectedPlan(i)
    onNext(plan);
  };

  
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
    setSelectedPlan({...item , billingPeriod })
    setSelectedCardIndex(item);
    localStorage.setItem("selectedCardIndex", item.toString());
  };
  

  return (
    <Col className="side-bar md-9  mt-5">
      <h1 className="title">Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <Row className="mt-5">
        {
          plan.map((item ) => (
        <Col key={item.id}>
          <Card
            style={{ width: "8rem" }}
            className={`${selectedPlan.id === item.id ? "card-plan" : "c-plan"}`}
            onClick={() => handleCardClick(item)}
          >
            <Card.Img src={item.img} className="plan-icon mx-3 mt-3 mb-3" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text className="price">
                ${billingPeriod === "monthly" ? `${item.pricemonthly}` : `${item.priceyearly}`}{" "}
                {additionalInfo}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
          ))
        }
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
            onClick={handleNextClick}
          >
            Next Step
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Plan;
