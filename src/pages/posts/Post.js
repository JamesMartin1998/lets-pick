// Code based from Code Institute's Moments project
import React, { useState } from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
  const {
    id,
    author,
    profile_id,
    profile_image,
    comments_count,
    vote_id,
    title,
    content,
    image,
    updated_at,
    favourite_id,
    option1_count,
    option2_count,
    postPage,
    setPosts,
    setVote1,
    setVote2,
  } = props;

  const currentUser = useCurrentUser();
  const is_author = currentUser?.username === author;
  const history = useHistory();


  // useEffect(() => {
  //   const handleMount = (vote_id) => {
  //     console.log(vote_id)
  //   }
  //   handleMount()
  // }, [])

  // redirects user to page to PostEditForm
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  // deletes the post and redirects to home page
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  // store the font awesome classname in state so that I can have different icons depending on each options state
  // e.g. prevents both buttons changing icon class together when a vote is registered on a post
  const [voteOption1Icon, setVoteOption1Icon] = useState(
    "fa-regular fa-circle-check"
  );
  const [voteOption2Icon, setVoteOption2Icon] = useState(
    "fa-regular fa-circle-check"
  );

  // send post request to API to create vote instance as well as update the state for the votes count and specify vote type
  const handleOption1Vote = async () => {
    try {
      const { data } = await axiosRes.post("/votes/", {
        post: id,
        option: "option1",
      });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                votes_count: post.votes_count + 1,
                vote_id: data.id,
                option1_count: post.option1_count + 1,
              }
            : post;
        }),
      }));
      setVoteOption1Icon("fa-solid fa-circle-check");
      // Allows the Votes Received to be updated on the Profile Page
      setVote1(1);
    } catch (err) {
      console.log(err);
    }
  };

  // send post request to API to create vote instance as well as update the state for the votes count and specify vote type
  const handleOption2Vote = async () => {
    try {
      const { data } = await axiosRes.post("/votes/", {
        post: id,
        option: "option2",
      });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                votes_count: post.votes_count + 1,
                vote_id: data.id,
                option2_count: post.option2_count + 1,
              }
            : post;
        }),
      }));
      setVoteOption2Icon("fa-solid fa-circle-check");
      // Allows the Votes Received to be updated on the Profile Page
      setVote2(1);
    } catch (err) {
      console.log(err);
    }
  };

  // allows users to remove a vote if they voted for option 1
  const handleRemoveOption1Vote = async () => {
    // needed to try to make a get request first so users can't decrement
    // the the option count for the opposite vote option
    try {
      const { data } = await axiosRes.get(`/votes/${vote_id}/`);
      console.log(data);
      console.log(data.option);
      if (data.option === "option1") {
        await axiosRes.delete(`/votes/${vote_id}/`);
        setPosts((prevPosts) => ({
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id
              ? {
                  ...post,
                  votes_count: post.votes_count - 1,
                  vote_id: null,
                  option1_count: post.option1_count - 1,
                }
              : post;
          }),
        }));
        setVoteOption1Icon("fa-regular fa-circle-check");
        // Allows the Votes Received to be updated on the Profile Page
        setVote1(0);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // allows users to remove a vote if they voted for option 2
  const handleRemoveOption2Vote = async () => {
    // needed to to make a get request first so users can't decrement
    // the the option count for the opposite vote option
    try {
      const { data } = await axiosRes.get(`/votes/${vote_id}/`);
      console.log(data);
      console.log(data.option);
      if (data.option === "option2") {
        await axiosRes.delete(`/votes/${vote_id}/`);
        setPosts((prevPosts) => ({
          ...prevPosts,
          results: prevPosts.results.map((post) => {
            return post.id === id
              ? {
                  ...post,
                  votes_count: post.votes_count - 1,
                  vote_id: null,
                  option2_count: post.option2_count - 1,
                }
              : post;
          }),
        }));
        setVoteOption2Icon("fa-regular fa-circle-check");
        // Allows the Votes Received to be updated on the Profile Page
        setVote2(0);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Sends post request to API to create favourite instance as well as update state
  const handleFavourite = async () => {
    try {
      const { data } = await axiosRes.post("/favourites/", {
        post: id,
      });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                favourite_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Sends delete request to API to delete the favourite instance as well as update the state
  const handleRemoveFavourite = async () => {
    try {
      await axiosRes.delete(`/favourites/${favourite_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                favourite_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link className={styles.Author} to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {author}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_author && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          <Link to={`/posts/${id}`}>
            <i className={`${styles.CommentIcon} far fa-comments`} />
          </Link>
          {comments_count}

          {/* Vote button rendering */}
          {is_author ? (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't vote on your own post</Tooltip>}
              >
                <i
                  className={`fa-regular fa-circle-check ${styles.VoteIcon} ${styles.Option1}`}
                />
              </OverlayTrigger>
              {option1_count}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't vote on your own post</Tooltip>}
              >
                <i
                  className={`fa-regular fa-circle-check ${styles.VoteIcon} ${styles.Option2}`}
                />
              </OverlayTrigger>
              {option2_count}
            </>
          ) : vote_id ? (
            <>
              <span onClick={handleRemoveOption1Vote}>
                <i className={`${voteOption1Icon} ${styles.VoteIcon} ${styles.Option1}`} />
              </span>
              {option1_count}
              <span onClick={handleRemoveOption2Vote}>
                <i className={`${voteOption2Icon} ${styles.VoteIcon} ${styles.Option2}`} />
              </span>
              {option2_count}
            </>
          ) : currentUser ? (
            <>
              <span onClick={handleOption1Vote}>
                <i
                  className={`fa-regular fa-circle-check ${styles.VoteIcon} ${styles.Option1}`}
                />
              </span>
              {option1_count}
              <span onClick={handleOption2Vote}>
                <i
                  className={`fa-regular fa-circle-check ${styles.VoteIcon} ${styles.Option2}`}
                />
              </span>
              {option2_count}
            </>
          ) : (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to vote on posts</Tooltip>}
              >
                <i
                  className={`fa-regular fa-circle-check ${styles.VoteIcon} ${styles.Option1}`}
                />
              </OverlayTrigger>
              {option1_count}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to vote on posts</Tooltip>}
              >
                <i
                  className={`fa-regular fa-circle-check ${styles.VoteIcon} ${styles.Option2}`}
                />
              </OverlayTrigger>
              {option2_count}
            </>
          )}

          {/* Favourite button rendering */}
          {is_author ? (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't favourite your own post</Tooltip>}
              >
                <i className={`fa-regular fa-star ${styles.FavouriteIcon}`} />
              </OverlayTrigger>
            </>
          ) : favourite_id ? (
            <>
              <span onClick={handleRemoveFavourite}>
                <i className={`fa-solid fa-star ${styles.FavouriteIcon}`} />
              </span>
            </>
          ) : currentUser ? (
            <>
              <span onClick={handleFavourite}>
                <i className={`fa-regular fa-star ${styles.FavouriteIcon}`} />
              </span>
            </>
          ) : (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to favourite posts</Tooltip>}
              >
                <i className={`fa-regular fa-star ${styles.FavouriteIcon}`} />
              </OverlayTrigger>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
