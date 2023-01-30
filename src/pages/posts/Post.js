import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
  const {
    id,
    author,
    profiles_id,
    profile_image,
    comments_count,
    votes_count,
    vote_id,
    title,
    content,
    image,
    updated_at,
    category,
    favourite_id,
    option1_count,
    option2_count,
    postPage,
    setPosts
  } = props;

  const currentUser = useCurrentUser();
  const is_author = currentUser?.username === author;


  const handleOption1Vote = async () => {
    try {
        const {data} = await axiosRes.post('/votes/', {post: id, option: 'option1'})
        setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
                return post.id === id
                ? {...post, votes_count: post.votes_count+1, vote_id: data.id, option1_count: post.option1_count+1}
                : post
            })
        }))
    } catch(err) {
        console.log(err)
    }
  }


  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link className={styles.Author} to={`/profiles/${profiles_id}`}>
            <Avatar src={profile_image} height={55} />
            {author}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_author && postPage && "..."}
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
          {is_author ? (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't vote on your own post</Tooltip>}
              >
                <i className={`fa-solid fa-circle-check ${styles.VoteIcon}`} />
              </OverlayTrigger>
              {option1_count}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't vote on your own post</Tooltip>}
              >
                <i className={`fa-solid fa-circle-check ${styles.VoteIcon}`} />
              </OverlayTrigger>
              {option2_count}
            </>
          ) : vote_id ? (
            <>
              <span onClick={() => {}}>
                <i className={`fa-solid fa-circle-check ${styles.VoteIcon}`} />
              </span>
              {option1_count}
              <span onClick={() => {}}>
                <i className={`fa-solid fa-circle-check ${styles.VoteIcon}`} />
              </span>
              {option2_count}
            </>
          ) : currentUser ? (
            <>
              <span onClick={handleOption1Vote}>
                <i className={`fa-solid fa-circle-check ${styles.VoteIcon}`} />
              </span>
              {option1_count}
              <span onClick={() => {}}>
                <i className={`fa-solid fa-circle-check ${styles.VoteIcon}`} />
              </span>
              {option2_count}
            </>
          ) : (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to vote on posts</Tooltip>}
              >
                <i className="fa-solid fa-circle-check" />
              </OverlayTrigger>
              {option1_count}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to vote on posts</Tooltip>}
              >
                <i className="fa-solid fa-circle-check" />
              </OverlayTrigger>
              {option2_count}
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
