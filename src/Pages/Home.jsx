import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Addons from "./Addons";
import Summary from "./Summary";

import "../assets/styling/home.css";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = (stepNum) => {
    if(stepNum == 1){
      navigate('/')
      setStep(stepNum);
    }
    else if(stepNum == 2){
      navigate('/plan')
    }
    else if(stepNum == 3){
      navigate('/addons')
      setStep(stepNum);
    }
    setStep(stepNum);

   
  };

  const handlePlus = () => {
     setStep(step + 1);
    navigate(`/step${step + 1}`);
  }

  const handlePrev = () => {
    setStep(step - 1);
    navigate(`/step${step - 1}`);
  };

  return (
    <div className="background">
      <div className="box">
        <Container>
          <Row>
            <Col className="col-md-4">
              <div className=" left-img d-flex">
                <div className="mt-5">
                  <NavLink onClick={() => handleNext(1)} className="d-flex">
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
                  </NavLink>
                  <NavLink onClick={() => handleNext(2)} to="/plan" className="d-flex mt-3">
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
                  </NavLink>
                  <NavLink onClick={() => handleNext(3)} to="/addons" className="d-flex mt-3">
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
                  </NavLink>
                  <NavLink onClick={() => handleNext(4)} className="d-flex mt-3">
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
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col className="col-md-8">
              {step === 1 && <PersonalInfo onNext={handlePlus} />}
              {step === 2 && <Plan onPrev={handlePrev} onNext={handlePlus} />}
              {step === 3 && <Addons onPrev={handlePrev} onNext={handlePlus} />}
              {step === 4 && <Summary onPrev={handlePrev} />}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
