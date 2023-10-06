import { Col , Form , Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useAppContext } from "../context/AppContext";

import "../assets/styling/personalinfo.css";

const PersonalInfo = () => {
  const { handlePlus } = useAppContext();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string().required("Phone number is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("step1Details", JSON.stringify(values));
      handlePlus();
    },
  });

  return (
    <Col className="side-bar md-7 mt-5">
      <h1 className="title">Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form-container">
        <Form onSubmit={formik.handleSubmit}>
{/* for name     */}
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter your Full Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-danger">{formik.errors.name}</div>
            )}
          </Form.Group>
{/* for email */}
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please enter your E-mail"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </Form.Group>
{/* for number  */}
          <Form.Group className="mb-3">
            <div className="d-flex justify-content-between">
              <Form.Label>Phone Number</Form.Label>
            </div>
            <Form.Control
              type="number"
              placeholder="Please enter your phone"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.number && formik.errors.number && (
              <div className="text-danger">{formik.errors.number}</div>
            )}
          </Form.Group>
{/* button */}
          <div className="d-flex justify-content-end mt-5">
            <Button className="btn-next-step mt-4" type="submit">
              Next Step
            </Button>
          </div>
        </Form>
      </div>
    </Col>
  );
};

export default PersonalInfo;