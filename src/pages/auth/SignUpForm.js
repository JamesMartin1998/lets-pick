import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  // Universal function to detect changes in forms
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col
        className={`${styles.Col} my-auto mr-10 py-10 p-md-2`}
        md={{ span: 10, offset: 1 }}
      >
        <Container
          className={`${styles.Container}`}
          md={{ span: 6, offset: 3 }}
          sm={{ span: 10, offset: 1 }}
        >
          <h1 className={styles.Header}>Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert className={styles.Alert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert className={styles.Alert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert className={styles.Alert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert className={styles.Different} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Form>
          <Link
            className={styles.Link}
            md={{ span: 6, offset: 3 }}
            to="/signin"
          >
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
