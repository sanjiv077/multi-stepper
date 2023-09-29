import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

import "./personalinfo.css";

const PersonalInfo = ({ onNext }) => {
  return (
    <Col className="side-bar md-7  mt-5">
      <h1 className="title">Personal info</h1>
      <p>Please provide your name,email-address and phone number. </p>
      <Form className="mt-5">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Please enter your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Please enter your E-mail" />
        </Form.Group>
        <Form.Group className="mb-3">
          <div className="d-flex justify-content-between">
            <Form.Label>Phone Number</Form.Label>
          </div>
          <Form.Control type="number" placeholder="Please enter your phone" />
        </Form.Group>
        <div className="d-flex justify-content-end mt-5">
          <Button className="btn-next-step" onClick={onNext}>
            Next Step
          </Button>
        </div>
      </Form>
    </Col>
  );
};

export default PersonalInfo;
