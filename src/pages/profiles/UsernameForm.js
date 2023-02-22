// Code based from Code Institute's Moments project
import React, { useEffect, useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useHistory, useParams } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefaults';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../../contexts/CurrentUserContext';

import btnStyles from '../../styles/Button.module.css';
import styles from '../../styles/UsernamePasswordEditForm.module.css';

// Allows users to change their username
const UsernameForm = () => {
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  // sets the original username
  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push('/');
    }
  }, [currentUser, history, id]);

  // sends put request to API to to update the username
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put('/dj-rest-auth/user/', {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className={`${styles.Col}`}>
        <Container className={`${styles.Container}`}>
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label className={`${styles.Label} d-none`}>
                Change username
              </Form.Label>
              <Form.Control
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className={styles.Input}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright} ${styles.Button}`}
              onClick={() => history.goBack()}
            >
              cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright} ${styles.Button}`}
              type="submit"
            >
              save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UsernameForm;
