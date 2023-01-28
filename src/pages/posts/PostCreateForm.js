import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });

  const { title, category, image, content } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChangeCategory = (event) => {
    setPostData({
      ...postData,
      category: event.target.value,
    });
  };

  return (
    <Form className={styles.Form}>
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
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="pt-3">
          <Container>
            <Form.Group controlId="category">
              <Form.Label className={styles.Label}>Category</Form.Label>
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
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="pt-3">
          <Container>
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Yellow} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File 
                className={styles.File}
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Form.Group>
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
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="d-flex justify-content-center mt-3 mb-3">
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright} ${styles.Button}`}
              onClick={() => {}}
            >
              cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright} ${styles.Button}`}
              type="submit"
            >
              create
            </Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

{
  /* <Form className={styles.Form}>
      <Row>
        <Col
            className={`${styles.Col} my-auto mr-10 py-10 p-md-2`}
            md={{ span: 10, offset: 1 }}
        >
          <Container className={`${styles.Container}`}
          md={{ span: 6, offset: 3 }}
          sm={{ span: 10, offset: 1 }}>
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
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className={styles.Red} md={{ span: 6, offset: 3 }}>
          <Container className={styles.Green}>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={handleChange}
                className={styles.Input}
                >
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
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className={styles.Red} md={{ span: 6, offset: 3 }}>
          <Container className={styles.Green}>
            <Form.Group className="text-center">
                {image ? (
                    <>
                        <figure>
                            <Image className={appStyles.Image} src={image} rounded />
                        </figure>
                        <div>
                            <Form.Label className={`${btnStyles.Button} ${btnStyles.Yellow} btn`} htmlFor="image-upload">
                                Change the image
                            </Form.Label>
                        </div>
                    </>
                ) : (
                    <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click or tap to upload an image" />
              </Form.Label>
                )}
              
              <Form.File id="image-upload" accept="image/*" onChange={handleChangeImage} />
            </Form.Group>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Container className={styles.Green}>
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
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="d-flex justify-content-center mt-3 mb-3">
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright} ${styles.Button}`}
              onClick={() => {}}
            >
              cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright} ${styles.Button}`}
              type="submit"
            >
              create
            </Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
} */
}

export default PostCreateForm;
