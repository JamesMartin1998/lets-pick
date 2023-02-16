// Code based from Code Institute's Moments project
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";

import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import NoResults from "../../assets/no-results.png";
import { fetchMoreData } from "../../utils/utils";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

// Allows users to view posts by a specific user, statistics and edit their profile details
const ProfilePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const [vote1, setVote1] = useState(0);
  const [vote2, setVote2] = useState(0);

  // sends get requests to API to fetch data about the profile and all of the posts by that specific profile
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?author__profile=${id}`),
          ]);
        setProfileData(pageProfile);
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id, setProfileData]);

  console.log(profileData);

  // Shows details about a profile and renders a dropdown to edit the profile if the current user owns the profile
  const mainProfile = (
    <>
      {profileData?.owner === currentUser?.username ? (
        <ProfileEditDropdown id={profileData.id} />
      ) : (
        <span className="d-none"></span>
      )}
      <Row noGutters className=" text-center">
        <Col>
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profileData.image}
          />
        </Col>
        <Col xs={12}>
          <h3 className="m-2">{profileData.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3}>
              <div>{profileData.posts_count}</div>
              <div>Posts</div>
            </Col>
            <Col xs={3}>
              <div>{profileData.votes_made}</div>
              <div>Votes Made</div>
            </Col>
            <Col xs={3}>
              <div>{profileData.votes_received + vote1 + vote2}</div>
              <div>Votes Received</div>
            </Col>
          </Row>
        </Col>
        <Col className="p-3">{profileData.description}</Col>
      </Row>
    </>
  );

  // renders all of the posts belonging to the profile, or a no results image
  const mainProfilePosts = (
    <>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post
              key={post.id}
              {...post}
              setPosts={setProfilePosts}
              setVote1={setVote1}
              setVote2={setVote2}
              vote1={vote1}
            />
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
};

export default ProfilePage;
