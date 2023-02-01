import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

import NoResults from "../../assets/no-results.png"
import Asset from "../../components/Asset";

function PostsPage({message, filter=""}) {

  const [posts, setPosts] = useState({results: []})
  const [hasLoaded, setHasLoaded] = useState(false)
  const {pathname} = useLocation()

  useEffect(() => {
    // different posts will be fetched on the home page, your votes page and favoruites page
    // due to the filter prop
    const fetchPosts = async () => {
      try {
        const {data} = await axiosReq.get(`/posts/?${filter}`)
        setPosts(data)
        setHasLoaded(true)
      } catch(err) {
        console.log(err)
      }
    }
    setHasLoaded(false)
    fetchPosts()
  }, [filter, pathname,])
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Asset spinner />
        )}
      </Col>
    </Row>
  );
}

export default PostsPage;