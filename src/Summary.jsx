import Button from "react-bootstrap/Button";
import { Card, Col } from "react-bootstrap";

import "./summary.css";
const Summary = ({ onPrev }) => {
  return (
    <Col className="side-bar md-7  mt-5">
      <h1 className="title">Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="cards">
        <Card>
          <div className="d-flex">
            <div className="p-2">
              <div className="title">Online Services</div>
            </div>
            <div className=" p-2 ms-auto">
              <div className="body-price">+$1/mo</div>
            </div>
          </div>
        </Card>
      </div>

      <p>Total Price :</p>

      <div className="buttons justify-content-between d-flex mt-5">
        <div className="nextpage mt-4">
          <button className="btn-prev-step " onClick={onPrev}>
            Go Back
          </button>
        </div>
        <div className="nextpage mt-4">
          <Button className="btn-next-step">Confirm</Button>
        </div>
      </div>
    </Col>
  );
};

export default Summary;
