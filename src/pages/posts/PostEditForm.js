// Code based from Code Institute's Moments project
import React, { useEffect, useRef, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import styles from '../../styles/PostCreateEditForm.module.css';
import appStyles from '../../App.module.css';
import btnStyles from '../../styles/Button.module.css';
import { useHistory, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { Alert } from 'react-bootstrap';

function PostEditForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: '',
    category: '',
    image: '',
    content: '',
  });

  const { title, category, image, content } = postData;

  const imageInput = useRef(null);

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    // gets the existing post data so it can be displayed in the form intially
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { title, category, image, content, is_author } = data;
        is_author
          ? setPostData({ title, category, image, content })
          : history.push('/');
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [history, id]);

  // handles state changes for post title and content
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // handles state changes for post image
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // handles state changes for category
  const handleChangeCategory = (event) => {
    setPostData({
      ...postData,
      category: event.target.value,
    });
  };

  // posts data to API, checks for errors
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);

    if (imageInput?.current?.files[0]) {
      formData.append('image', imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/posts/${id}/`, formData);
      history.push(`/posts/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form className={styles.Form} onSubmit={handleSubmit}>
      <Row>
        <Col className="pt-3">
          <Container>
            <Form.Group>
              <Form.Label className="d-none">Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={handleChange}
                className={styles.Input}
              />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert className={styles.Alert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="pt-3">
          <Container>
            <Form.Group controlId="category">
              <Form.Label className={`${styles.Label} d-none`}>
                Category
              </Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={handleChangeCategory}
                className={`${styles.Input} ${styles.Category}`}
              >
                <option defaultValue disabled>
                  Select Category
                </option>
                <option value="sport">Sport</option>
                <option value="people">People</option>
                <option value="places">Places</option>
                <option value="food">Food</option>
                <option value="entertainment">Entertainment</option>
                <option value="fashion">Fashion</option>
                <option value="animals">Animals</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
            {errors?.category?.map((message, idx) => (
              <Alert className={styles.Alert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="pt-3">
          <Container>
            <Form.Group className="text-center">
              <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} btn`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              <Form.File
                className={styles.File}
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert className={styles.Alert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="pt-3">
          <Container>
            <Form.Group>
              <Form.Label className="d-none">Content</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                placeholder="Content"
                rows={5}
                value={content}
                onChange={handleChange}
                className={`${styles.Input} ${styles.Content}`}
              />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
              <Alert className={styles.Alert} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="d-flex justify-content-center mt-3 mb-3">
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
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostEditForm;
