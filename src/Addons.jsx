import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

import "./addons.css";

const Addons = ({ onPrev, onNext }) => {
  const [checkboxes , setCheckboxes] = useState({
    onlineServices: false ,
    largerStorage: false,
    customizableProfile: false,
  })

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes({
      ...checkboxes  , 
      [checkboxName]: !checkboxes[checkboxName]
    })

  }
  return (
    <Col className="side-bar md-7  mt-5">
      <h1 className="title">Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="cards">
        <Card className={`mt-5 my-3 ${checkboxes.onlineServices ? "card-selected" : ""}`}>
          <div className="d-flex">
            <div className="p-2">
              <input type="checkbox" 
              className="check mt-3 mx-2"
              checked={checkboxes.onlineServices}
                onChange={() => handleCheckboxChange("onlineServices")}
                ></input>
            </div>
            <div className="p-2">
              <div className="title">Online Services</div>
              <div className="body ">Access to multiplayer games</div>
            </div>
            <div className=" p-2 ms-auto mt-2">
              <div className="body-price">+$1/mo</div>
            </div>
          </div>
        </Card>
        <Card className={`my-3 ${checkboxes.largerStorage ? "card-selected" : ""}`}>
          <div className="d-flex">
            <div className="p-2">
              <input type="checkbox" 
              className="check mt-3 mx-2"
              checked={checkboxes.largerStorage}
                onChange={() => handleCheckboxChange("largerStorage")}></input>
            </div>
            <div className="p-2">
              <div className="title">Larger storage</div>
              <div className="body ">Extra 1TB of cloud save</div>
            </div>
            <div className=" p-2 ms-auto mt-2">
              <div className="body-price">+$2/mo</div>
            </div>
          </div>
        </Card>
        <Card className={`my-3 ${checkboxes.customizableProfile ? "card-selected" : ""}`}>
          <div className="d-flex">
            <div className="p-2">
              <input type="checkbox" 
              className="check mt-3 mx-2"
              checked={checkboxes.customizableProfile}
                onChange={() => handleCheckboxChange("customizableProfile")}></input>
            </div>
            <div className="p-2">
              <div className="title">Customizable Profile</div>
              <div className="body ">Custom theme on your profile</div>
            </div>
            <div className=" p-2 ms-auto mt-2">
              <div className="body-price">+$2/mo</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="buttons justify-content-between d-flex mt-5">
        <div className="nextpage">
          <button className="btn-prev-step mt-4" onClick={onPrev}>
            Go Back
          </button>
        </div>
        <div className="nextpage">
          <Button className="btn-next-step " onClick={onNext}>
            Next Step
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Addons;
