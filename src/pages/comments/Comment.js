import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const {
    profile_image,
    profile_id,
    content,
    updated_at,
    author,
    id,
    setPost,
    setComments,
  } = props;
  const currentUser = useCurrentUser();
  const is_author = currentUser?.username === author;


  const handleDelete = async () => {
    // deletes the comment and reduces the comments count by 1 on the post
    // removes the comment from the comments for that post
    try {
        await axiosRes.delete(`/comments/${id}/`)
        setPost(prevPost => ({
            results: [{
                ...prevPost.results[0],
                comments_count: prevPost.results[0].comments_count - 1
            }]
        
        }))
        setComments((prevComments) => ({
            ...prevComments,
            results: prevComments.results.filter((comment) => comment.id !== id)
        }))
    } catch(err) {

    }
  }


  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Author}>{author}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
        {is_author && (
          <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete} />
        )}
      </Media>
    </div>
  );
};

export default Comment;
