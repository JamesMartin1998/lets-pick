import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import Avatar from "../../components/Avatar";

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
  } = props;

  const currentUser = useCurrentUser();
  const is_author = currentUser?.username === author;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profiles_id}`}>
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
            <i className="far fa-comments" />
          </Link>
          {comments_count}
          {is_author ? (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't vote on your own post</Tooltip>}
              >
                <i className={`fas fa-heart ${styles.Heart}`} />
              </OverlayTrigger>
              {option1_count}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't vote on your own post</Tooltip>}
              >
                <i className={`fas fa-heart ${styles.Heart}`} />
              </OverlayTrigger>
              {option2_count}
            </>
          ) : vote_id ? (
            <>
              <span onClick={() => {}}>
                <i className={`fas fa-heart ${styles.Heart}`} />
              </span>
              {option1_count}
              <span onClick={() => {}}>
                <i className={`fas fa-heart ${styles.Heart}`} />
              </span>
              {option2_count}
            </>
          ) : currentUser ? (
            <>
              <span onClick={() => {}}>
                <i className={`far fa-heart ${styles.HeartOutline}`} />
              </span>
              {option1_count}
              <span onClick={() => {}}>
                <i className={`far fa-heart ${styles.HeartOutline}`} />
              </span>
              {option2_count}
            </>
          ) : (
            <>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to vote on posts</Tooltip>}
              >
                <i className="far fa-heart" />
              </OverlayTrigger>
              {option1_count}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to vote on posts</Tooltip>}
              >
                <i className="far fa-heart" />
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
