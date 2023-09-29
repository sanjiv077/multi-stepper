import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

import "./addons.css";

const Addons = ({ onPrev, onNext }) => {
  return (
    <Col className="side-bar md-7  mt-5">
      <h1 className="title">Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="cards">
        <Card className="mb-3 mt-5">
          
          <div className="d-flex">
            <div className="p-2">
            <input type="checkbox"></input>
            </div>
            <div className="p-2">
              <div className="title">Online Services</div>
              <div className="body ">
                Access to multiplayer games
              </div>
            </div>
            <div className=" p-2 ms-auto">

            <div className="body">+$1/mo</div>
            </div>
          </div>
        </Card>
        <Card className="mb-4 mt-3">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card className="mb-4 mt-3">
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </div>

      <div className="buttons justify-content-between d-flex mt-5">
        <div className="nextpage">
          <Button className="btn-next-step" onClick={onPrev}>
            Go Back
          </Button>
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
