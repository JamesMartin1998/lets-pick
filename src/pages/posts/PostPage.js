import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

function PostPage() {
  const { id } = useParams();

  const [post, setPost] = useState({ results: [] });

//   get post data from API
  useEffect(() => {
    const handleMount = async () => {
      try {
        // destructure data and rename to post
        const [{data: post}] = await Promise.all([
            axiosReq.get(`/posts/${id}`),
        ])
        setPost({results: [post]})
        console.log(post)
      } catch (err) {
        console.log(err)
      }
    };

    handleMount()
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className={appStyles.Content}>Comments</Container>
      </Col>
    </Row>
  );
}

export default PostPage;