import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";

import "../assets/styling/summary.css";
import ThankYou from "./ThankYou";

const Summary = ({ onPrev, selectedPlan, selectedAddons }) => {
  const [showComponent, setShowComponent] = useState(false);

  const handleConfirmClick = () => {
    setShowComponent(true);
  };

  const totalAddonsPrice = selectedAddons.reduce((total, addon) => {
    const priceNumeric = parseFloat(addon.price.match(/\d+(\.\d+)?/)[0]);
    return total + priceNumeric;
  }, 0);

  const hasValidPlan =
    selectedPlan && (selectedPlan.pricemonthly || selectedPlan.priceyearly);

  const pricemonthly =
    selectedPlan?.billingPeriod === "monthly"
      ? selectedPlan.pricemonthly
      : null;
  const priceyearly =
    selectedPlan?.billingPeriod === "yearly" ? selectedPlan.priceyearly : null;

    const planPrice =  selectedPlan?.billingPeriod === "yearly" ? selectedPlan.priceyearly : selectedPlan.pricemonthly

  const totalPrice = hasValidPlan
    ? (parseFloat(planPrice) || 0) +
      totalAddonsPrice
    : totalAddonsPrice;

  console.log("selectedPlan:", selectedPlan);
  console.log("selectedAddons:", selectedAddons);
  console.log("totalAddonsPrice:", totalAddonsPrice);
  console.log("hasValidPlan:", hasValidPlan);
  console.log("pricemonthly:", pricemonthly);
  console.log("priceyearly:", priceyearly);
  console.log("totalPrice:", totalPrice);

  return (
    <Col className={`side-bar md-7 mt-5 ${showComponent ? "disabled" : ""}`}>
      {showComponent ? (
        <ThankYou />
      ) : (
        <>
          <h1 className="title">Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <div className="monthly-box">
            {selectedPlan && (
              <div className="arcade-section with-border d-flex justify-content-between">
                <div className="arcade-monthly">
                  {selectedPlan.name} {selectedPlan.billingPeriod}
                </div>
                <div className="amount-usd-mo mt-2">
                  {selectedPlan
                    ? selectedPlan.billingPeriod === "monthly"
                      ? `$${selectedPlan.pricemonthly}/mo`
                      : `$${selectedPlan.priceyearly}/yr`
                    : "N/A"}
                </div>
              </div>
            )}

            {selectedAddons && selectedAddons.length > 0 && (
              <div className="addons">
                <ul>
                  {selectedAddons.map((addon, index) => (
                    <div
                      key={index}
                      className="service-storage-section d-flex justify-content-between"
                    >
                      <div className="service-storage mt-3">{addon.name}</div>
                      <div className="amount-usd mt-3">{addon.price}</div>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="total-section d-flex justify-content-between mt-4">
            <div className="total ms-3">Total</div>
            <div className="final-amount">${totalPrice.toFixed(2)}</div>
          </div>
          <div className="buttons justify-content-between d-flex mt-5">
            <div className="nextpage mt-4">
              <button className="btn-prev-step" onClick={onPrev}>
                Go Back
              </button>
            </div>
            <div className="nextpage mt-4">
              <Button
                className="btn-next-step"
                onClick={handleConfirmClick}
                disabled={showComponent}
              >
                Confirm
              </Button>
            </div>
          </div>
        </>
      )}
    </Col>
  );
};

export default Summary;
