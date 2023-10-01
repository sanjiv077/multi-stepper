import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Addons from "./Addons";
import Summary from "./Summary";

import "./home.css";

const Home = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="background">
      <div className="box">
        <Container>
          <Row>
            <Col className="col-md-4">
              <div className=" left-img d-flex">
                <div className="mt-5">
                  <div className="d-flex">
                    <p
                      className={`ms-5 ${
                        step === 1 ? "selected-step" : "notselected-step"
                      }`}
                    >
                      1
                    </p>
                    <p className="ms-3 text-white  text-lighter">STEP 1</p>
                    <div className="mt-3">
                      <p className="info text-white mt-1">YOUR INFO</p>
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <p
                      className={`ms-5 ${
                        step === 2 ? "selected-step" : "notselected-step"
                      }`}
                    >
                      2
                    </p>
                    <p className="ms-3 text-white  text-lighter">STEP 2</p>
                    <div className="mt-3">
                      <p className="info text-white mt-1">SELECT PLAN</p>
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <p
                      className={`ms-5 ${
                        step === 3 ? "selected-step" : "notselected-step"
                      }`}
                    >
                      3
                    </p>
                    <p className="ms-3 text-white text-lighter">STEP 3</p>
                    <div className="mt-3">
                      <p className="info text-white mt-1">ADD-ONS</p>
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <p
                      className={`ms-5 ${
                        step === 4 ? "selected-step" : "notselected-step"
                      }`}
                    >
                      4
                    </p>
                    <p className="ms-3 text-white text-lighter ">STEP 4</p>
                    <div className="mt-3">
                      <p className="info text-white mt-1">SUMMARY</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-md-8">
              {step === 1 && <PersonalInfo onNext={handleNext} />}
              {step === 2 && <Plan onPrev={handlePrev} onNext={handleNext} />}
              {step === 3 && <Addons onPrev={handlePrev} onNext={handleNext} />}
              {step === 4 && <Summary onPrev={handlePrev} />}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
