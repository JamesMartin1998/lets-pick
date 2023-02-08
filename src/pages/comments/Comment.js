import React, { useState } from "react";
import CommentEditForm from "./CommentEditForm";
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
  const [showEditForm, setShowEditForm] = useState(false);


  const handleDelete = async () => {
    // deletes the comment and reduces the comments count by 1 on the post
    // removes the comment from the comments for that post
    try {
        await axiosRes.delete(`/comments/${id}/`)
        setPost((prevPost) => ({
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
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Author}>{author}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
            id={id}
            profile_id={profile_id}
            content={content}
            profileImage={profile_image}
            setComments={setComments}
            setShowEditForm={setShowEditForm}
          />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_author && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
}

export default Comment;
