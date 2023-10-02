import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

import "../assets/styling/personalinfo.css";

const PersonalInfo = ({ onNext }) => {
  // For form fields
  const items = JSON.parse(localStorage.getItem('step1Details')) || {};
  const [name, setName] = useState(items.name || "");
  const [email, setEmail] = useState(items.email || "");
  const [number, setNumber] = useState(items.number || "");
  const [formValid, setFormValid] = useState(true);

  // For validation message
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.trim() !== "") {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.trim() !== "") {
      setEmailError("");
    }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    if (value.trim() !== "") {
      setNumberError("");
    }
  };

  const validateForm = () => {
    const isNameValid = name.trim() !== "";
    const isEmailValid = email.trim() !== "";
    const isNumberValid = number.trim() !== "";

    if (!isNameValid) {
      setNameError("Name cannot be empty");
    } else {
      setNameError("");
    }

    if (!isEmailValid) {
      setEmailError("Email cannot be empty");
    } else {
      setEmailError("");
    }

    if (!isNumberValid) {
      setNumberError("Number cannot be empty");
    } else {
      setNumberError("");
    }

    return isNameValid && isEmailValid && isNumberValid;
  };

  const handleNextClick = () => {
    const isValid = validateForm();
    setFormValid(isValid);

    if (isValid) {
      localStorage.setItem('step1Details' , JSON.stringify({name , email , number}))
      onNext();
    }
  };

  return (
    <Col className="side-bar md-7 mt-5">
      <h1 className="title">Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your Full Name"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <div className="text-danger">{nameError}</div>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please enter your E-mail"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </Form.Group>
          <Form.Group className="mb-3">
            <div className="d-flex justify-content-between">
              <Form.Label>Phone Number</Form.Label>
            </div>
            <Form.Control
              type="number"
              placeholder="Please enter your phone"
              value={number}
              onChange={handleNumberChange}
            />
            {numberError && <div className="text-danger">{numberError}</div>}
          </Form.Group>
          <div className="d-flex justify-content-end mt-5">
            <Button className="btn-next-step mt-4" onClick={handleNextClick}>
              Next Step
            </Button>
          </div>
        </Form>
      </div>
    </Col>
  );
};

export default PersonalInfo;
