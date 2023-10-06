import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { useAppContext } from "../context/AppContext";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Addons from "./Addons";
import Summary from "./Summary";

import { data } from "../mock/data";

import "../assets/styling/home.css";

const Home = () => {
  const home = data.home;
  const { step, setStep } = useAppContext();
  const navigate = useNavigate();

  const handleNext = (stepNum) => {
    if (stepNum === 1) {
      navigate("/");
      setStep(stepNum);
    } else if (stepNum === 2) {
      navigate("/plan");
    } else if (stepNum === 3) {
      navigate("/addons");
      setStep(stepNum);
    }
    setStep(stepNum);
  };

  return (
    <div className="background">
      <div className="box">
        <Container>
          <Row>
            <Col className="col-md-4">
              <div className=" left-img d-flex">
                <div className="mt-5">
                  {home.map((item) => (
                    <NavLink
                      key={item.id}
                      onClick={() => handleNext(item.id)}
                      className="d-flex mt-3"
                    >
                      <p
                        className={`ms-5 ${
                          step === item.id
                            ? "selected-step"
                            : "notselected-step"
                        }`}
                      >
                        {item.id}
                      </p>
                      <p className="ms-3 text-white  text-lighter">
                        {item.step}
                      </p>
                      <div className="mt-3">
                        <p className="info text-white mt-1">{item.title}</p>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </Col>
            <Col className="col-md-8">
              {step === 1 && <PersonalInfo />}
              {step === 2 && <Plan />}
              {step === 3 && <Addons />}
              {step === 4 && <Summary />}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
