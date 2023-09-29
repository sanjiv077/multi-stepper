import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

import "./summary.css";
const Summary = ({ onPrev }) => {
  return (
    <Col className="side-bar md-7  mt-5">
      <h1 className="title">Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="nextpage">
        <Button className="btn-next-step" onClick={onPrev}>
          Go Back
        </Button>
      </div>
    </Col>
  );
};

export default Summary;
