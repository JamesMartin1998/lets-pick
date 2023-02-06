import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post"
import NoResults from "../../assets/no-results.png";
import { fetchMoreData } from "../../utils/utils";

const ProfilePage = () => {

    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const {id} = useParams();
    const [profileData, setProfileData] = useState({})
    const [profilePosts, setProfilePosts] = useState({results: []})

  useEffect(() => {
    const handleMount = async () => {
      try {
        console.log("working");

        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?author__profile=${id}`),
          ]);



        // const {data} = await axiosReq(`/profiles/${id}/`)
        // console.log(data)

        setProfileData(pageProfile)
        setProfilePosts(profilePosts)
        console.log(profilePosts.results)
        console.log(profilePosts)

        setHasLoaded(true)

      } catch (err) {
        console.log(err);
      }
    };
    handleMount()
  }, [id, setProfileData]);


  const mainProfile = (
    <>
      <Row noGutters className=" text-center">
        <Col xs={12} className="text-lg-left">
          <Image className={styles.ProfileImage} roundedCircle src={profileData.image} />
        </Col>
        <Col xs={12} >
          <h3 className="m-2">{profileData.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} >
                <div>{profileData.posts_count}</div>
                <div>Posts</div>
            </Col>
            <Col xs={3} >
                <div>{profileData.votes_made}</div>
                <div>Votes Made</div>
            </Col>
            <Col xs={3} >
                <div>{profileData.votes_received}</div>
                <div>Votes Received</div>
            </Col>
          </Row>
        </Col>
        <Col className="p-3">Profile content</Col>
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
        children={profilePosts.results.map((post) => (
          <Post key={post.id} {...post} setPosts={setProfilePosts} />
        ))}
        dataLength={profilePosts.results.length}
        loader={<Asset spinner />}
        hasMore={!!profilePosts.next}
        next={() => fetchMoreData(profilePosts, setProfilePosts)}
      />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profileData.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;
