// Code based from Code Institute's Moments project
import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Button } from "react-bootstrap";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  const [category, setCategory] = useState("");

  const [vote1, setVote1] = useState(0);
  const [vote2, setVote2] = useState(0);

  const currentUser = useCurrentUser();
  const addPostIcon = <Button className={styles.AddPost} href="/posts/create"><i className="far fa-plus-square" />Post</Button>

  // allows users to only see posts of a selected category
  const handleCategoryChange = (event) => {
    console.log("working");
    console.log(event);
    setCategory(`category=${event}`);
  };

  useEffect(() => {
    // different posts will be fetched on the home page, your votes page and favoruites page
    // due to the filter prop
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(
          `/posts/?${filter}&${category}&search=${query}`
        );
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    // timer provides better UX as the posts don't update on every key stroke
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, pathname, query, category]);

  return (
    <Container className={styles.Container}>
      <Row className={styles.Row}>
        <Col>
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form
            className={`${styles.SearchBar}`}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search Posts"
            />
          </Form>
        </Col>
        <Col className={styles.DropdownCol}>
        {/* Code for dropdown based on code from https://www.pluralsight.com/guides/how-to-capture-the-value-of-dropdown-lists-with-react-bootstrap */}
          <DropdownButton
            title="Category"
            className={styles.Dropdown}
            onSelect={handleCategoryChange}
          >
            <Dropdown.Item eventKey="">All</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="sport">Sport</Dropdown.Item>
            <Dropdown.Item eventKey="people">People</Dropdown.Item>
            <Dropdown.Item eventKey="places">Places</Dropdown.Item>
            <Dropdown.Item eventKey="food">Food</Dropdown.Item>
            <Dropdown.Item eventKey="entertainment">Entertainment</Dropdown.Item>
            <Dropdown.Item eventKey="fashion">Fashion</Dropdown.Item>
            <Dropdown.Item eventKey="animals">Animals</Dropdown.Item>
            <Dropdown.Item eventKey="other">Other</Dropdown.Item>
          </DropdownButton>
          {currentUser && addPostIcon}
        </Col>
      </Row>
      <Row>
        <Col>
        {/* checks to see if the API request has finished. Will load spinner until completed */}
          {hasLoaded ? (
            <>
              {posts.results.length ? (
                <InfiniteScroll
                  children={posts.results.map((post) => (
                    <Post key={post.id} {...post} setPosts={setPosts} setVote1={setVote1} setVote2={setVote2} />
                  ))}
                  dataLength={posts.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!posts.next}
                  next={() => fetchMoreData(posts, setPosts)}
                />
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
    </Container>
  );
}

export default PostsPage;