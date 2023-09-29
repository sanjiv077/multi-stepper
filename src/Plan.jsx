import { Col, Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import arcade from "./assets/images/icon-arcade.png";
import advanced from "./assets/images/icon-advanced.png";
import pro from "./assets/images/icon-pro.png";

import "./plan.css";

const Plan = ({ onPrev, onNext }) => {
  return (
    <Col className="side-bar md-9  mt-5">
      <h1 className="title">Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <Row className="mt-5">
        <Col>
          <Card style={{ width: "8rem" }}>
            <Card.Img src={arcade} className="plan-icon mx-3 mt-3 mb-3" />
            <Card.Body>
              <Card.Title>Arcade</Card.Title>
              <Card.Text>$9/mo</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "8rem" }}>
            <Card.Img src={advanced} className="plan-icon mx-3 mt-3 mb-3" />
            <Card.Body>
              <Card.Title>Advanced</Card.Title>
              <Card.Text>$12/mo</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "8rem" }}>
            <Card.Img src={pro} className="plan-icon mx-3 mt-3 mb-3" />
            <Card.Body>
              <Card.Title>Pro</Card.Title>
              <Card.Text>$15/mo</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="plan mt-5 d-flex align-items-center justify-content-center">
        <p className="mt-2  mx-3">Monthly</p>

        <input type="checkbox" className="checkbox" id="switch" />
        <label for="switch" className="label">Toggle</label>
        <p className="mt-2 mx-3">Yearly</p>
      </div>
      <div className="buttons justify-content-between d-flex mt-5">
        <div className="nextpage">
          <Button className="btn-next-step" onClick={onPrev}>Go Back</Button>
        </div>
        <div className="nextpage">
          <Button className="btn-next-step " onClick={onNext}>Next Step</Button>
        </div>
      </div>
    </Col>
  );
};

export default Plan;
